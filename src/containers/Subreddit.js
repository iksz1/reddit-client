import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Post from "../components/Post";
import { SubHeader } from "../components/SubHeader";
import Search from "./Search";
// import Icon from "semantic-ui-react/dist/es/elements/Icon";

class Subreddit extends Component {
  static propTypes = {
    data: PropTypes.object,
    isLoading: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  };

  componentWillMount() {
    const subreddit = this.props.match.params.subreddit;
    this.fetchData(subreddit);
  }

  componentWillReceiveProps(nextProps) {
    const subreddit = nextProps.match.params.subreddit;
    if (subreddit !== this.props.match.params.subreddit) {
      this.fetchData(subreddit);
    }
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({ type: "SET_ACTIVE_REDDIT", item: "" });
  }

  fetchData(subreddit) {
    const { dispatch } = this.props;
    dispatch({ type: "SET_ACTIVE_REDDIT", item: subreddit });
    const url = `/r/${subreddit}.json`;
    dispatch({ type: "FETCH", url });
  }

  toggleSubs = () => {
    const { match, dispatch } = this.props;
    dispatch({ type: "TOGGLE_SUBS", subreddit: match.params.subreddit });
  };

  showComments = (e, url) => {
    e.preventDefault();
    this.props.history.push(url);
  };

  render() {
    const { data, isLoading, match } = this.props;
    return (
      <div style={{ marginTop: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Search />
        </div>
        <SubHeader
          name={match.params.subreddit.toUpperCase()}
          loading={isLoading}
          onSubClick={this.toggleSubs}
        />
        <div className="ui attached segment">
          {data &&
            data.posts &&
            data.posts.map(post => (
              <Post
                key={post.id}
                post={post}
                onClickComments={e => this.showComments(e, post.permalink)}
              />
            ))}
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    data: state.fetch.data,
    isLoading: state.fetch.isLoading
  };
};

export default connect(mapState)(Subreddit);
