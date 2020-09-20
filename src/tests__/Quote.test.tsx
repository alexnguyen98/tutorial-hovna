import React from "react";
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import axios from "axios";
import Quote from "../components/Quote";

jest.mock("axios");
let container;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  jest.clearAllMocks();
  container.remove();
  container = null;
});

it("Renders Quote component with quote from the mocked api", async () => {
  // arrange
  const quote = "iam the best rapper";
  const res = { data: { quote } };
  //@ts-ignore
  axios.get.mockImplementationOnce(() => Promise.resolve(res));

  // act
  await act(async () => {
    render(<Quote />, container);
  });

  // assert
  expect(container.textContent).toBe("Quote of the day" + quote);
});
