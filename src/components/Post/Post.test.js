import React from "react";
import ReactDOM from "react-dom";
// jest.mock("semantic-ui-react/dist/es/elements/Icon", () => "Icon"); // need this because jest doesn't understand es6 imports
import Post from "./Post";

const post = {
  created_utc: 123123821382,
  title: "title",
  author: "author",
  selftext_html: "<p>some content</p>",
  score: 55,
  num_comments: 25
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Post post={post} showComments={jest.fn()} />, div);
});
