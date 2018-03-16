import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./containers/Nav";
import Subreddit from "./containers/Subreddit";
import Comments from "./containers/Comments";
import { Home } from "./components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="ui container">
          <header className="">
            <Nav />
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/r/:subreddit" component={Subreddit} />
              <Route path="/r/:subreddit/comments/:postId" component={Comments} />
            </Switch>
          </main>
          <footer>
            <p>MiR - client for reddit</p>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
