import React from "react";
import WithLoader from "./WithLoader";

const Diary = () => (
  <div>
    <ul>
      <li>Day 1: I got up</li>
      <li>Day 2: The wind was cold</li>
    </ul>
  </div>
);

export default WithLoader(Diary);
