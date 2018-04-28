import React from "react";
import PropTypes from "prop-types";
import "./Nav.css";

export const Nav = ({ items, active, handleClick, handleKeyPress }) => (
  <nav>
    <ul className="nice-menu" role="menu">
      {items.map(item => (
        <li
          key={item.name}
          tabIndex={item.name === active ? -1 : 0}
          className={item.name === active ? "active" : ""}
          onClick={() => handleClick(item.name)}
          onKeyPress={e => handleKeyPress(e, item.name)}
          role="menuitem"
          aria-label={item.name}
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
