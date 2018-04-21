import React from "react";
import renderer from "react-test-renderer";
import { Nav } from "./Nav";

const items = [
  { name: "javascript", text: "J" },
  { name: "reactjs", text: "R" },
  { name: "webdev", text: "W" }
];

it("renders correctly", () => {
  const tree = renderer
    .create(<Nav items={items} active={items[0].name} handleClick={jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
