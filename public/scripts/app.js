'use strict';

// import Favicon from 'react-favicon';

function App(name, subtitle) {
  this.name = name;
  this.subtitle = subtitle;
};

App.prototype.count = 0;

App.prototype.render = function (template, id) {
  var rootElement = document.getElementById(id);
  ReactDOM.render(template, rootElement);
};

App.prototype.addCount = function () {
  this.count++;
  renderCounterApp();
};

var app = new App('React Checklist', 'Simple app for task management.');

var renderCounterApp = function renderCounterApp() {
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
      'p',
      null,
      'While app is in development, you can play with counter.'
    ),
    React.createElement(
      'p',
      null,
      'Count is ',
      app.count
    ),
    React.createElement(
      'p',
      null,
      React.createElement(
        'button',
        { onClick: function onClick() {
            app.addCount();
          } },
        'Increase count'
      )
    )
  );

  app.render(template, 'app');
};

renderCounterApp();
