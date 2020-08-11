import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "Pages/Main/Main";
import Register from "Pages/Register/Register";
import Mypage from "Pages/Mypage";
import WordDetail from  'Pages/WordDetail/WordDetail'

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/mypage" component={Mypage} />
          <Route path="/worddetail/:word_id" component={WordDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

