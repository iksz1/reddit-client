import React from "react";
import PropTypes from "prop-types";
import "./Comment.css";
// import Icon from "semantic-ui-react/dist/es/elements/Icon"

export const Comment = ({ cmt }) => {
  // const point = cmt.score.endsWith("1") && !cmt.score.endsWith("11")
  return (
    <div className="comment" style={{ marginLeft: `${cmt.depth}rem` }}>
      {/* <div className="comment"> */}
      <div>
        <strong>{cmt.author}</strong>
        <span className="post-score">{cmt.score}</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: cmt.body_html }} />
      {/* </div> */}
    </div>
  );
};

Comment.propTypes = {
  cmt: PropTypes.object.isRequired
};
