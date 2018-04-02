import React, { Component } from "react";
import PropTypes from "prop-types";
import { Comment } from "../components/Comment";
import { MainPost } from "../components/MainPost";
import { connect } from "react-redux";
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
    const { data, isLoading } = this.props;

    return (
      <div className="content-block">
        <Loader active={isLoading} size="big" />
        {data && data.post && <MainPost post={data.post} />}
        {data &&
          data.comments &&
          data.comments.map((level, i) => {
            return (
              <div key={i} className="ui segment">
                {level.map(cmt => <Comment key={cmt.id} cmt={cmt} />)}
              </div>
            );
          })}
      </div>
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
    isLoading: state.fetch.isLoading
  };
};

export default connect(mapState)(Comments);
