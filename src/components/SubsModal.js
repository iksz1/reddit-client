import React from "react";
import PropTypes from "prop-types";
import Modal from "semantic-ui-react/dist/es/modules/Modal";
import Icon from "semantic-ui-react/dist/es/elements/Icon";
import Label from "semantic-ui-react/dist/es/elements/Label";
// import Segment from "semantic-ui-react/dist/es/elements/Segment";
import SubsInput from "./SubsInput";
// import Input from "semantic-ui-react/dist/es/elements/Input";

const trigger = (
  <div className="settings-btn">
    <Icon size="large" name="ellipsis horizontal" fitted />
  </div>
);

const SubsModal = ({ items, handleAction }) => (
  <Modal
    trigger={trigger}
    // header="Add Subreddit"
    content={
      <div style={{ padding: "1em" }}>
        <SubsInput handleAction={handleAction} />
        <div className="ui divider" />
        <ul style={{ listStyle: "none", display: "flex", flexFlow: "row wrap", padding: 0 }}>
          {items.map(item => (
            <li style={{ margin: "0.5em 0.2em" }}>
              <Label content={item.name} onRemove={() => handleAction(item.name)} />
            </li>
          ))}
        </ul>
      </div>
    }
    closeIcon={true}
    // actions={["Cancel", { key: "ok", content: "OK", positive: true }]}
    // onActionClick={(e, data) => console.log(data)}
    size="mini"
  />
);

SubsModal.propTypes = {
  items: PropTypes.array.isRequired,
  handleAction: PropTypes.func.isRequired
};

export default SubsModal;
