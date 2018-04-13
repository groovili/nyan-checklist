import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import { appName } from './config/config.js';
import { appSubtitle } from './config/config.js';

ReactDOM.render(<App name={appName} subtitle={appSubtitle} />, document.getElementById("app"));
