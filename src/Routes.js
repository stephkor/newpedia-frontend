import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "Pages/Main/Main";
import Register from "Pages/Register/Register";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

