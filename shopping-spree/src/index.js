// Installed Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// Only this .js file uses ReactDOM.render to display components in browser
import ReactDOM from 'react-dom';
// Importing only App component
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
