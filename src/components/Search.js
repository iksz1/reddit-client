import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "semantic-ui-react/dist/es/elements/Input";
import { withRouter } from "react-router-dom";
import "./Search.css";

class CustomSearch extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  state = {
    results: [],
    isLoading: false
  };

  timeout = null;

  handleInput = (e, { value }) => {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => this.getSubreddits(value), 1000);
    this.setState({ isLoading: true, results: [] });
  };

  resultSelect = item => {
    const { history } = this.props;
    history.push(`/r/${item}`);
  };

  getSubreddits = async value => {
    if (!value) return;

    const response = await fetch(
      `https://www.reddit.com/api/search_reddit_names.json?query=${value}`
    );
    const { names } = await response.json();
    this.setState({ isLoading: false, results: names });
  };

  render() {
    const { results, isLoading } = this.state;

    return (
      <div>
        <Input
          onChange={this.handleInput}
          loading={isLoading}
          placeholder="search for subreddit"
          icon="search"
          size="mini"
          maxLength="50"
        />
        <ul className="search-results">
          {results.map((item, i) => (
            <li key={i} onClick={() => this.resultSelect(item)} className="search-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(CustomSearch);
