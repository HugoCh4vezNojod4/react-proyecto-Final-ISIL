import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import PreFooter from './common/PreFooter';
import Pedidos from './lista/Pedidos';

ReactDOM.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/react-proyecto-Final-ISIL' element={<App/>}/>
      <Route path='/list' element={<Pedidos/>}/>
    </Routes>
    <PreFooter/>
    <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
