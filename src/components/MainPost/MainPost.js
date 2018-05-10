import React from "react";
import PropTypes from "prop-types";
import timeago from "timeago.js";

export const MainPost = ({ post }) => {
  const time = timeago().format(post.created_utc * 1000);

  return (
    <div className="main-post">
      <h3 className="post-title">
        <a href={post.url} target="_blank" rel="noopener">
          {post.title}
        </a>
      </h3>
      <div className="post-info">
        by <strong>{post.author}</strong> {time}
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.selftext_html }} />
      {post.media_embed && <div dangerouslySetInnerHTML={{ __html: post.media_embed.content }} />}
    </div>
  );
};

MainPost.propTypes = {
  post: PropTypes.object.isRequired
};
