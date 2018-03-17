import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Nav.css";

const Nav = ({ items, active, history }) => (
  <ul className="nice-menu">
    {items.map(item => (
      <li
        key={item.name}
        className={`nice-item ${item.name === active ? "active" : ""}`}
        onClick={() => history.push(`/r/${item.name}`)} //prevent repeating
      >
        {item.text}
      </li>
    ))}
  </ul>
);

Nav.propTypes = {
  items: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  active: PropTypes.string
};

const mapState = state => ({
  items: state.subs.items,
  active: state.nav.active
});

export default connect(mapState)(Nav);
