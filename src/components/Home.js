import React from "react";
// import Checkbox from "semantic-ui-react/dist/es/modules/Checkbox";

export const Home = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <div className="ui top attached secondary segment">
        <h4>Quick user guide</h4>
      </div>
      <div className="ui attached segment">
        <p>
          At the top you can see the menu. Each menu item displays first letter of subreddit's name.
          By default you have <b>J</b>avascript, <b>R</b>eactjs and <b>W</b>eb design. You can add
          subreddits by using search (top right corner) and clicking "star" icon once subreddit is
          loaded. To remove from favorites click the icon again.
        </p>
        <p>Thanks for your time.</p>
      </div>
      {/* <div>
        <Checkbox label="don't show again" />
      </div> */}
    </div>
  );
};
