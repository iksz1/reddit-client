import React, { Component } from "react";
import PropTypes from "prop-types";
import Popup from "semantic-ui-react/dist/es/modules/Popup";
import Icon from "semantic-ui-react/dist/es/elements/Icon";
import Search from "./Search";

class SearchPopup extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Popup
        trigger={<Icon size="large" name="ellipsis horizontal" />}
        on="click"
        position="left center"
        hoverable
      >
        <Search />
      </Popup>
    );
  }
}

export default SearchPopup;
