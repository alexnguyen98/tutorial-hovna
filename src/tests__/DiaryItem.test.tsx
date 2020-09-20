import React from "react";
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";

import DiaryItem from "../components/DiaryItem";

let container;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Renders DiaryItem component with specific props", () => {
  // arrange
  const day = 1;
  const text = "hello";

  // act
  act(() => {
    render(<DiaryItem day={day} text={text} />, container);
  });

  // assert
  expect(container.textContent).toBe("Day " + day + text);
});
