import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Nav.css";

const Nav = ({ items, active, history }) => (
  <div style={{ display: "flex", alignItems: "flex-end" }}>
    <ul className="nice-menu">
      {items.map(item => (
        <li
          key={item.name}
          className={`nice-item ${item.name === active ? "active" : ""}`}
          onClick={() => history.push(`/r/${item.name}`)} //multiple procs
        >
          {item.text}
        </li>
      ))}
    </ul>
  </div>
);

Nav.propTypes = {
  items: PropTypes.array.isRequired,
  active: PropTypes.string
};

const mapState = state => ({
  items: state.subs.items,
  active: state.nav
});

export default withRouter(connect(mapState)(Nav));
