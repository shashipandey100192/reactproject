import React from 'react';
import ReactDOM from 'react-dom/client';
import Xyz, {Mypage} from './About';
import "./style.css";
import Service from './Service';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<Xyz></Xyz>
<Mypage></Mypage>
<Service></Service>

  </React.StrictMode>
);
