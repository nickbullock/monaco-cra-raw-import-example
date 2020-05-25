import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// eslint-disable-next-line import/no-webpack-loader-syntax
const dogTypings = require('!!raw-loader?esModule=false!./dog.d.ts');
const catTypings = require('../typings/cat.d.ts');

console.log('>>>> dog', dogTypings);
console.log('>>>> cat', catTypings);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
