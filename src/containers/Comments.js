import React, { Component } from "react";
import PropTypes from "prop-types";
import { Comment } from "../components/Comment/Comment";
import { MainPost } from "../components/MainPost";
import { connect } from "react-redux";
import { FetchError } from "../components/FetchError";
import Loader from "semantic-ui-react/dist/es/elements/Loader";

class Comments extends Component {
  static propTypes = {
    data: PropTypes.object,
    isLoading: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { data, isLoading, error } = this.props;

    return (
      <React.Fragment>
        <Loader active={isLoading} size="big" />
        {error && <FetchError error={error} />}
        {data.post && <MainPost post={data.post} />}
        {data.comments &&
          data.comments.map((level, i) => {
            return (
              <div key={i} className="ui segment">
                {level.map(cmt => <Comment key={cmt.id} cmt={cmt} />)}
              </div>
            );
          })}
      </React.Fragment>
    );
  }

  fetchData() {
    const { dispatch, location } = this.props;
    const url = `${location.pathname}.json${location.search}`;
    dispatch({ type: "FETCH", url });
  }
}

const mapState = state => {
  return {
    data: state.fetch.data,
    error: state.fetch.error,
    isLoading: state.fetch.isLoading
  };
};

export default connect(mapState)(Comments);
