import React from "react";
import PropTypes from "prop-types";
import "./Nav.css";

export const Nav = ({ items, active, handleClick }) => (
  <nav>
    <ul className="nice-menu">
      {items.map(item => (
        <li
          key={item.name}
          className={item.name === active ? "active" : ""}
          onClick={() => handleClick(item.name)}
        >
          {item.text}
        </li>
      ))}
    </ul>
  </nav>
);

Nav.propTypes = {
  items: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.string
};
