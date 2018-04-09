"use strict";

console.log('App is alive!');

// JSX - Javascript XML
var template = React.createElement(
  "p",
  null,
  "This is JSX rendered from React app"
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
