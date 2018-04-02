import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./containers/Header";
import Subreddit from "./containers/Subreddit";
import Comments from "./containers/Comments";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="ui container">
          <Route component={Header} />
          <div className="main-content">
            <Switch>
              <Redirect exact from="/" to="/r/javascript" />
              <Route exact path="/r/:subreddit" component={Subreddit} />
              <Route path="/r/:subreddit/comments/:postId" component={Comments} />
            </Switch>
          </div>
          <footer />
        </div>
      </Router>
    );
  }
}

export default App;
