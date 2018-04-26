import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "semantic-ui-react/dist/es/elements/Input";

class SubsInput extends Component {
  static propTypes = {
    handleAction: PropTypes.func.isRequired
  };

  state = {
    value: ""
  };

  handleChange = (e, { value }) => {
    if (/^[\w]*$/.test(value)) {
      this.setState({ value });
    }
  };

  render() {
    const { handleAction } = this.props;
    const { value } = this.state;
    const disabled = value ? false : true;

    return (
      <div>
        <Input
          value={value}
          action={{ content: "Add", onClick: () => handleAction(value), disabled }}
          placeholder="add subreddit"
          onChange={this.handleChange}
          maxLength="50"
          size="mini"
          ref={el => el && el.focus()}
          aria-label="Add Subreddit"
          // fluid
        />
      </div>
    );
  }
}

export default SubsInput;
