import React from "react";
import PropTypes from "prop-types";
import "./Comment.css";

export const Comment = ({ cmt }) => {
  return (
    <div className="comment" style={{ marginLeft: `${cmt.depth}rem` }}>
      <div>
        <span className="comment-author">{cmt.author}</span>
        <span className="comment-score">{cmt.score}</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: cmt.body_html }} />
    </div>
  );
};

Comment.propTypes = {
  cmt: PropTypes.object.isRequired
};
