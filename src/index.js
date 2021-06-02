import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from "./components/counters";

ReactDOM.render(
  <React.StrictMode>
    <Counters />
  </React.StrictMode>,
  document.getElementById('root')
);