import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "semantic-ui-react/dist/es/elements/Icon";
import timeago from "timeago.js";

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    showComments: PropTypes.func.isRequired
  };

  state = {
    expanded: false
  };

  toggleExpanded = e => {
    const { post } = this.props;
    if (post.is_self) {
      e.preventDefault();
      this.setState(prevState => ({ expanded: !prevState.expanded }));
    }
  };

  render() {
    const { post, showComments } = this.props;
    const { expanded } = this.state;
    const time = timeago().format(post.created_utc * 1000);

    return (
      <div className="post">
        <h4 className="post-title">
          <a href={post.url} target="_blank" onClick={this.toggleExpanded}>
            {post.title}
          </a>
        </h4>
        <div
          dangerouslySetInnerHTML={{ __html: post.selftext_html }}
          style={{ display: expanded ? "block" : "none" }}
        />
        <div className="post-info">
          {post.score} <Icon name="thumbs outline up" /> by <strong>{post.author}</strong> {time}
          <a href={post.permalink} onClick={showComments} aria-label="Comments">
            &nbsp;&nbsp;{post.num_comments || ""} <Icon name="comment outline" />
          </a>
        </div>
      </div>
    );
  }
}

export default Post;
