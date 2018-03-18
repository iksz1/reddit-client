import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Nav } from "../components/Nav";
import SearchPopup from "../components/SearchPopup";

class Header extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,
    active: PropTypes.string
  };

  historyPush = subreddit => {
    const { history, active } = this.props;
    //prevent pushing same url
    if (subreddit !== active) {
      history.push(`/r/${subreddit}`);
    }
  };

  render() {
    const { items, active } = this.props;
    return (
      <header>
        <Nav items={items} active={active} handleClick={this.historyPush} />
        <div className="settings-btn">
          <SearchPopup />
        </div>
      </header>
    );
  }
}

const mapState = state => ({
  items: state.nav.items,
  active: state.nav.active
});

export default connect(mapState)(Header);