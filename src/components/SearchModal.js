import React, { Component } from "react";
// import { Segment, Header, Icon, TransitionablePortal } from "semantic-ui-react";
import TransitionablePortal from "semantic-ui-react/dist/es/addons/TransitionablePortal";
import Segment from "semantic-ui-react/dist/es/elements/Segment";
import Header from "semantic-ui-react/dist/es/elements/Header";
import Icon from "semantic-ui-react/dist/es/elements/Icon";
import Search from "./Search";

class SearchModal extends Component {
  state = { open: false };

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;

    return (
      <div>
        <div className="settings-btn" onClick={this.show}>
          <Icon size="large" name="ellipsis horizontal" fitted className="ihover" />
        </div>
        <TransitionablePortal open={open} onClose={this.close} transition={transition}>
          <Segment style={style}>
            <Header>Search</Header>
            <Search />
          </Segment>
        </TransitionablePortal>
      </div>
    );
  }
}

const transition = {
  animation: "slide left",
  duration: 300
};

const style = {
  position: "fixed",
  zIndex: 1000,
  maxWidth: "200px",
  height: "100%",
  right: 0,
  top: 0,
  border: "none",
  borderRadius: 0,
  boxShadow: "0 1px 2px 0 rgba(34,36,38,.15)"
};

export default SearchModal;
