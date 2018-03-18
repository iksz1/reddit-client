import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchInput from "semantic-ui-react/dist/es/modules/Search";
import { withRouter } from "react-router-dom";

class Search extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  state = {
    value: "",
    results: [],
    isLoading: false
  };

  handleInput = (e, { value }) => {
    const { timeout } = this.state;
    if (timeout) {
      clearTimeout(timeout);
    }
    const newTimeout = setTimeout(() => this.getSubreddits(value), 1000);
    this.setState({ value, timeout: newTimeout, results: [] });
  };

  getSubreddits = async value => {
    if (!value) return;
    this.setState({ ...this.state, isLoading: true });
    const response = await fetch(
      `https://www.reddit.com/api/search_reddit_names.json?query=${value}`
    );
    const { names } = await response.json();
    const results = names.map(title => ({ title }));
    this.setState({ ...this.state, results, isLoading: false });
  };

  resultRenderer = ({ title }) => {
    return <div>{title}</div>;
  };

  resultSelect = (e, { result }) => {
    this.setState({ value: "" });
    this.props.history.push(`/r/${result.title}`);
  };

  render() {
    const { value, results, isLoading } = this.state; //use api.open to show results
    return (
      <SearchInput
        value={value}
        results={results}
        resultRenderer={this.resultRenderer}
        loading={isLoading}
        onSearchChange={this.handleInput}
        onResultSelect={this.resultSelect}
        placeholder="search for subreddit"
        size="mini"
        // minCharacters={2}
        aligned="right"
        maxLength="50"
      />
    );
  }
}

export default withRouter(Search);
