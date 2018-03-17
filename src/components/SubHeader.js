import React from "react";
import PropTypes from "prop-types";
import Icon from "semantic-ui-react/dist/es/elements/Icon";

export const SubHeader = ({ name, loading, onSubClick }) => {
  return (
    <div className="ui attached secondary segment" style={style}>
      <div>
        <h4>
          {name}&nbsp;
          {loading && <Icon name="circle notched" loading />}
        </h4>
      </div>
      <div>
        <h4>
          <Icon name="empty star" onClick={onSubClick} />
        </h4>
      </div>
    </div>
  );
};

SubHeader.propTypes = {
  name: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onSubClick: PropTypes.func.isRequired
};

const style = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start"
};
