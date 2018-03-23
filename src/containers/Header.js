import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Nav } from "../components/Nav";
import SubsModal from "../components/SubsModal";

class Header extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,
    active: PropTypes.string
  };

  historyPush = subreddit => {
    const { history, active } = this.props;
    if (subreddit !== active) {
      history.push(`/r/${subreddit}`);
    }
  };

  // openModal = () => {
  //   this.setState({ open: true });
  // };

  toggleSub = subreddit => {
    const { dispatch } = this.props;
    dispatch({ type: "TOGGLE_SUB", subreddit });
  };

  render() {
    const { items, active } = this.props;

    return (
      <header>
        <Nav items={items} active={active} handleClick={this.historyPush} />
        <SubsModal items={items} handleAction={this.toggleSub} />
        {/* <div className="settings-btn" onClick={this.openSettings}>
          <Icon size="large" name="ellipsis horizontal" fitted />
        </div> */}
      </header>
    );
  }
}

const mapState = state => ({
  items: state.nav.items,
  active: state.nav.active
});

export default connect(mapState)(Header);
