import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './apps/Welcome';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./apps/assets/global.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Welcome></Welcome>


  </React.StrictMode>
);
