// //Create a react app from scratch.
// const React = require("react");
// const ReactDom = require("react-dom");

import React from "react";
import ReactDom from "react-dom";
ReactDom.render(
  <div>
    <h1>Hello</h1>
    <ul>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ul>
  </div>,
  document.getElementById("root")
);
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
