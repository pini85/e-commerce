import React from "react";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./components/sign-in-sign-up/sign-in-sign-up.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;
  //Each time this will be called when the component refreshes. Which means even when you close the application the user will still be in the state. Until they sign out.
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }
  // When they user signs out, we do not want any memory leaks so we will set the user to null ( to close the subscribtion), otherwise even when they sign out the memory will still persist in our application.
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header user={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
