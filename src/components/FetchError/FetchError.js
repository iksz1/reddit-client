import React from "react";
import PropTypes from "prop-types";
import Message from "semantic-ui-react/dist/es/collections/Message";

export const FetchError = ({ error }) => {
  return (
    <Message
      icon="reddit"
      header={error.message}
      content="If you have tracking protection enabled, consider adding https://www.reddit.com/ to exceptions."
    />
  );
};

FetchError.propTypes = {
  error: PropTypes.object
};
