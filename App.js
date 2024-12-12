import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="heading" tabIndex={5}>
    Namaste React using JSX
  </h1>
);

const HeadingComponent = () => (
  <div className="container">
    <Title/>
    <h1 className="heading">Namste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
