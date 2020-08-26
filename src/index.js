import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import './style.scss';
import './_mixin.scss';
import 'font-awesome/css/font-awesome.min.css'; 
import App from './App';
import './nav.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
