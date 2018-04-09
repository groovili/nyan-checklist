'use strict';

// import Favicon from 'react-favicon';

function App(name, subtitle) {
  this.name = name;
  this.subtitle = subtitle;
  this.ReactDOM = ReactDOM;
};

App.prototype.render = function (template, id) {
  var element = document.getElementById(id);
  this.ReactDOM.render(template, element);
};
var app = new App('React Checklist', 'Simple app for task management.');

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.name
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'ul',
    null,
    React.createElement(
      'li',
      null,
      'Task 1'
    ),
    React.createElement(
      'li',
      null,
      'Some more'
    ),
    React.createElement(
      'li',
      null,
      'And the last one'
    )
  )
);

app.render(template, 'app');
