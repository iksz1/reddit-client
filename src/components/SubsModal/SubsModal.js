import React from "react";
import PropTypes from "prop-types";
import Modal from "semantic-ui-react/dist/es/modules/Modal";
import Icon from "semantic-ui-react/dist/es/elements/Icon";
import Label from "semantic-ui-react/dist/es/elements/Label";
import SubsInput from "./SubsInput";
import "./SubsModal.css";

const trigger = (
  <button className="settings-btn" aria-label="Settings" type="button">
    <Icon size="large" name="ellipsis horizontal" fitted />
  </button>
);

const SubsModal = ({ items, handleAction }) => (
  <Modal
    trigger={trigger}
    // header="Add Subreddit"
    content={
      <div className="subs-modal">
        <SubsInput handleAction={handleAction} />
        <div className="ui divider" />
        <ul className="subs-modal__items">
          {items.map(item => (
            <li key={item.name}>
              <Label content={item.name} onRemove={() => handleAction(item.name)} />
            </li>
          ))}
        </ul>
      </div>
    }
    closeIcon={true}
    size="mini"
    role="dialog"
    aria-label="Manage Subreddits"
  />
);

SubsModal.propTypes = {
  items: PropTypes.array.isRequired,
  handleAction: PropTypes.func.isRequired
};

export default SubsModal;
