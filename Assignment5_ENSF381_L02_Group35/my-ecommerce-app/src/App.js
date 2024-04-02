// <!-- 
// ======================================================================
// Assignment: ENSF 381 -Assignment 5
// Created By Muhammad Ahmed UCID: 10190776, Petr Dubovsky UCID: 30171229
// Submission: Tue Apr 2, 2024
// ======================================================================
// -->

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import LoginPage from './components/LoginPage';
window.loggedIn = false;
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Productpage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
