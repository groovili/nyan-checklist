"use strict";

console.log('App is alive!');

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "React Checklist"
  ),
  React.createElement(
    "p",
    null,
    "Simple app for task manager"
  ),
  React.createElement(
    "ul",
    null,
    React.createElement(
      "li",
      null,
      "Task 1"
    ),
    React.createElement(
      "li",
      null,
      "Some more"
    ),
    React.createElement(
      "li",
      null,
      "And the last one"
    )
  )
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
