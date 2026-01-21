import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './apps/Welcome';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./output.css";
import "./apps/assets/global.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User_login from './apps/modules/users/auth/User_login';
import User_registor from './apps/modules/users/auth/User_registor';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='usermanagement' element={<User_login/>}></Route>
          <Route path='usermanagement/registor' element={<User_registor/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
