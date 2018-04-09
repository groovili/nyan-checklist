console.log('App is alive!');

var template = (
  <div>
    <h1>React Checklist</h1>
    <p>Simple app for task manager</p>
    <ul>
      <li>Task 1</li>
      <li>Some more</li>
      <li>And the last one</li>
    </ul>
  </div>
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
