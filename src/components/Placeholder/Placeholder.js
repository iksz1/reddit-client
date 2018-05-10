import React, { Fragment } from "react";
import "./Placeholder.css";

const count = 15;

const Block = () => (
  <Fragment>
    <div className="ph-line" />
    <div className="ph-line" />
  </Fragment>
);

export const Placeholder = () => {
  const blocks = [];

  for (let i = 0; i < count; i++) {
    blocks.push(<Block key={i} />);
  }

  return <div className="m-placeholder">{blocks}</div>;
};