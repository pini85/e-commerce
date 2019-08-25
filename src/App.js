import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

const test = () => {
  return <div>hi</div>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/test" component={test} />
      </Switch>
    </div>
  );
}
export default App;
