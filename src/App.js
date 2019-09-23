import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";
import Checkout from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./components/sign-in-sign-up/sign-in-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends React.Component {
  unsubscribeFromAuth = null;
  //Each time this will be called when the component refreshes. Which means even when you close the application the user will still be in the state. Until they sign out.
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        //this function always gives back the documentReference
        const userRef = await createUserProfileDocument(userAuth);

        //we can get a reference of the documents snapshot by calling this function
        userRef.onSnapshot(snapShotObject => {
          setCurrentUser({
            currentUser: {
              id: snapShotObject.id,
              ...snapShotObject.data()
            }
          });
        });
      } else {
        //if userAuth is null we want to set the state to null. Which means no user is signed in.
        setCurrentUser(userAuth);
      }
    });
  }
  // When they user signs out, we do not want any memory leaks so we will set the user to null ( to close the subscribtion), otherwise even when they sign out the memory will still persist in our application.
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
