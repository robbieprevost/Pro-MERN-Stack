var contentNode = document.getElementById('contents');
var component = React.createElement(
  "h1",
  { className: "red" },
  "Hello World!"
); // a simple JSX Component
ReactDOM.render(component, contentNode); // render the component inside the content Node