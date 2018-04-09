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
  )
);

app.render(template, 'app');
