import React, { Component } from "react";
// import PropTypes from "prop-types";
import Popup from "semantic-ui-react/dist/es/modules/Popup";
import Icon from "semantic-ui-react/dist/es/elements/Icon";
import Search from "./Search";

class SearchPopup extends Component {
  render() {
    const trigger = (
      <div className="settings-btn">
        <Icon size="large" name="ellipsis horizontal" fitted className="ihover" />
      </div>
    );
    return (
      <Popup
        trigger={trigger}
        on="click"
        position="bottom right"
        // horizontalOffset={10}
        verticalOffset={-35}
        hoverable
        basic
        style={style}
      >
        <Search />
      </Popup>
    );
  }
}

const style = {
  borderRadius: 0,
  // opacity: 0.7,
  padding: "2em",
  width: "50%"
  // height: "100%"
};

export default SearchPopup;
