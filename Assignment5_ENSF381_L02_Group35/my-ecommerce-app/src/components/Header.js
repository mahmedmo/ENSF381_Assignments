// <!-- 
// ======================================================================
// Assignment: ENSF 381 -Assignment 4
// Created By Muhammad Ahmed UCID: 10190776, Petr Dubovsky UCID: 30171229
// Submission: Mon Mar 25, 2024
// ======================================================================
// -->

import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
const Header = () => {
    return (
        <header className="header">
            <div className="row1">
                <img src="/images/logo.png" alt="Logo" width="50px" />
                <div className="company-name">Company Name</div>
            </div>

            <nav className="nav-bar">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    );
};

export default Header;