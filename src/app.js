// import Favicon from 'react-favicon';

function App (name, subtitle){
  this.name = name;
  this.subtitle = subtitle;
};

App.prototype.count = 0;

App.prototype.render = function (template, id) {
  let rootElement = document.getElementById(id);
  ReactDOM.render(template, rootElement);
};

App.prototype.addCount = function() {
    this.count++;
    renderCounterApp();
};

const app = new App('React Checklist', 'Simple app for task management.');

const renderCounterApp = () => {
  const template = (
    <div>
      <h1>{app.name}</h1>
      <p>{app.subtitle}</p>
      <p>While app is in development, you can play with counter.</p>
      <p>Count is {app.count}</p>
      <p><button onClick={()=> {app.addCount()}}>Increase count</button></p>
    </div>
  );
  
  app.render(template, 'app');
}

renderCounterApp();
