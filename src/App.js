import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import Subreddit from "./containers/Subreddit";
import Comments from "./containers/Comments";
import { Home } from "./components/Home";
import SearchModal from "./components/SearchModal";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="ui container">
          <SearchModal />
          <Route component={Header} />
          <div className="main-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/r/:subreddit" component={Subreddit} />
              <Route path="/r/:subreddit/comments/:postId" component={Comments} />
            </Switch>
          </div>
          <footer>
            <ul className="nice-menu">
              <li>M</li>
              <li>i</li>
              <li>R</li>
            </ul>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
