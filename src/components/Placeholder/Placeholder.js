import React, { Fragment } from "react";
import "./Placeholder.css";

const blockCount = 15;

const Block = () => (
  <Fragment>
    <div className="placeholder__line" />
    <div className="placeholder__line" />
  </Fragment>
);

export const Placeholder = () => {
  const blocks = [];

  for (let i = 0; i < blockCount; i++) {
    blocks.push(<Block key={i} />);
  }

  return <div className="placeholder">{blocks}</div>;
};
