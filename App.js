import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from React 18.2.0!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //takes the heading object and converts it to the <h1> tag which the browser can understand
