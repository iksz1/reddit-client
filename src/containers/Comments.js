import React, { Component } from "react";
import PropTypes from "prop-types";
import { Comment } from "../components/Comment/Comment";
import { MainPost } from "../components/MainPost/MainPost";
import { connect } from "react-redux";
import { FetchError } from "../components/FetchError/FetchError";
import Loader from "semantic-ui-react/dist/es/elements/Loader";
import { selectMainPost } from "../selectors";
import { fetchComments } from "../actions";

class Comments extends Component {
  static propTypes = {
    post: PropTypes.object,
    comments: PropTypes.array,
    isLoading: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { post, comments, isLoading, error } = this.props;

    return (
      <div className="m-box">
        <Loader active={isLoading} size="big" />
        {post && <MainPost post={post} />}
        {error && <FetchError error={error} />}
        {comments &&
          comments.map((level, i) => {
            return (
              <div key={i} className="comment-block">
                {level.map(cmt => <Comment key={cmt.id} cmt={cmt} />)}
              </div>
            );
          })}
      </div>
    );
  }

  fetchData() {
    const { dispatch, match } = this.props;
    const { subreddit, postId } = match.params;
    dispatch(fetchComments(subreddit, postId));
  }
}

const mapState = (state, { match }) => {
  return {
    post: selectMainPost(state, match.params),
    comments: state.comments.data.comments,
    error: state.comments.error,
    isLoading: state.comments.isLoading
  };
};

export default connect(mapState)(Comments);
