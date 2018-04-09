console.log('App is alive!');

// JSX - Javascript XML
var template = <p>This is JSX rendered from React app</p>;

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
