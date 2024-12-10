const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from React!"
);

console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(heading); //takes the heading object and converts it to the <h1> tag which the browser can understand
