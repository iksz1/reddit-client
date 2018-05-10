import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { Nav } from "../components/Nav/Nav";
import SubsModal from "../components/SubsModal/SubsModal";
import { toggleNavItem } from "../actions";

class Header extends Component {
  static propTypes = {
    navItems: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  historyPush = subreddit => {
    const { history, location } = this.props;
    const newPath = `/r/${subreddit}`;
    //prevent pushing same path
    if (location.pathname !== newPath) {
      history.push(newPath);
    }
  };

  navToggleItem = subreddit => {
    const { dispatch } = this.props;
    dispatch(toggleNavItem(subreddit));
  };

  navKeyPress = (e, subreddit) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      this.historyPush(subreddit);
    }
  };

  render() {
    const { navItems } = this.props;

    return (
      <header>
        <Route
          exact
          path="/r/:subreddit"
          children={({ match }) => (
            <Nav
              items={navItems}
              active={match ? match.params.subreddit : null}
              handleClick={this.historyPush}
              handleKeyPress={this.navKeyPress}
            />
          )}
        />
        <SubsModal items={navItems} handleAction={this.navToggleItem} />
      </header>
    );
  }
}

const mapState = state => ({
  navItems: state.nav.items
});

export default connect(mapState)(Header);
