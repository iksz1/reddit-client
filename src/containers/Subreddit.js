import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Post from "../components/Post";
import Icon from "semantic-ui-react/dist/es/elements/Icon";

class Subreddit extends Component {
  static propTypes = {
    data: PropTypes.object,
    isLoading: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.fetchData(this.props.match.params.subreddit);
  }

  componentDidUpdate(prevProps, prevState) {
    const subreddit = this.props.match.params.subreddit;
    if (subreddit !== prevProps.match.params.subreddit) {
      this.fetchData(subreddit);
    }
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({ type: "SET_ACTIVE_REDDIT", item: "" });
  }

  fetchData(subreddit) {
    const { dispatch } = this.props;
    dispatch({ type: "SET_ACTIVE_REDDIT", item: subreddit });
    const url = `/r/${subreddit}.json`;
    dispatch({ type: "FETCH", url });
  }

  showComments = (e, url) => {
    e.preventDefault();
    this.props.history.push(url);
  };

  render() {
    const { data, isLoading, match } = this.props;

    return (
      <div className="content-block">
        <div className="ui attached secondary segment">
          <h4>
            {match.params.subreddit.toUpperCase()}&nbsp;
            {isLoading && <Icon name="circle notched" loading />}
          </h4>
        </div>
        <div className="ui attached segment">
          {data &&
            data.posts &&
            data.posts.map(post => (
              <Post
                key={post.id}
                post={post}
                showComments={e => this.showComments(e, post.permalink)}
              />
            ))}
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    data: state.fetch.data,
    isLoading: state.fetch.isLoading
  };
};

export default connect(mapState)(Subreddit);
