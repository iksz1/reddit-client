import React from "react";
import ReactDOM from "react-dom";
import { MainPost } from "./MainPost";

const post = {
  created_utc: 123123821382,
  title: "title",
  author: "author",
  selftext_html: "<p>some content</p>"
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MainPost post={post} />, div);
});
