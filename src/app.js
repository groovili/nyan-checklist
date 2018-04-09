// import Favicon from 'react-favicon';

function App (name, subtitle){
  this.name = name;
  this.subtitle = subtitle;
  this.ReactDOM = ReactDOM;
};

App.prototype.render = function (template , id) {
  let element = document.getElementById(id);
  this.ReactDOM.render(template, element);
}

const app = new App('React Checklist', 'Simple app for task management.');

const template = (
  <div>
    <h1>{app.name}</h1>
    <p>{app.subtitle}</p>
  </div>
);

app.render(template, 'app');
