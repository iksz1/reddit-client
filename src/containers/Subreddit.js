import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Post from "../components/Post/Post";
import Icon from "semantic-ui-react/dist/es/elements/Icon";
import { FetchError } from "../components/FetchError/FetchError";
import { Placeholder } from "../components/Placeholder/Placeholder";
import { fetchPosts } from "../actions";

class Subreddit extends Component {
  static propTypes = {
    posts: PropTypes.array,
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

  fetchData(subreddit) {
    const { dispatch } = this.props;
    dispatch(fetchPosts(subreddit));
  }

  showComments = (e, url) => {
    e.preventDefault();
    this.props.history.push(url);
  };

  render() {
    const { posts, isLoading, match, error } = this.props;

    return (
      <Fragment>
        <div className="ui attached secondary segment">
          <h4>
            {match.params.subreddit.toUpperCase()}&nbsp;
            {isLoading && <Icon name="circle notched" loading />}
          </h4>
        </div>
        <div className="ui attached segment">
          {isLoading && <Placeholder />}
          {error && <FetchError error={error} />}
          {posts &&
            posts.map(post => (
              <Post
                key={post.id}
                post={post}
                showComments={e => this.showComments(e, post.permalink)}
              />
            ))}
        </div>
      </Fragment>
    );
  }
}

const mapState = state => ({
  posts: state.posts.data.posts,
  error: state.posts.error,
  isLoading: state.posts.isLoading
});

export default connect(mapState)(Subreddit);
