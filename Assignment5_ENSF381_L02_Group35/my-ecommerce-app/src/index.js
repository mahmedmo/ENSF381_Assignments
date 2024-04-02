// <!-- 
// ======================================================================
// Assignment: ENSF 381 -Assignment 5
// Created By Muhammad Ahmed UCID: 10190776, Petr Dubovsky UCID: 30171229
// Submission: Tue Apr 2, 2024
// ======================================================================
// -->

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
console.log('Initial local storage:', localStorage.getItem('cartItems'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
