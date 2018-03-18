import React from "react";
import PropTypes from "prop-types";
// import { connect } from "react-redux";
import "./Nav.css";

export const Nav = ({ items, active, handleClick }) => (
  <ul className="nice-menu">
    {items.map(item => (
      <li
        key={item.name}
        className={`nice-item ${item.name === active ? "active" : ""}`}
        onClick={() => handleClick(item.name)}
      >
        {item.text}
      </li>
    ))}
  </ul>
);

Nav.propTypes = {
  items: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.string
};
