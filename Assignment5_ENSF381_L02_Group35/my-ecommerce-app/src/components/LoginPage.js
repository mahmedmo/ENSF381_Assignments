// <!-- 
// ======================================================================
// Assignment: ENSF 381 -Assignment 5
// Created By Muhammad Ahmed UCID: 10190776, Petr Dubovsky UCID: 30171229
// Submission: Tue Apr 2, 2024
// ======================================================================
// -->
import React, { useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

import Footer from './Footer';
const LoginPage = () => {
    const [login, setLogin] = useState(true);
    const handleSwitchForm = () => {
        setLogin(!login);
    };
    return (
        <div className="login-page">
            <Header />
            {login ? <LoginForm handleSwitchForm={handleSwitchForm} /> : <SignupForm handleSwitchForm={handleSwitchForm} />}
            <Footer />
        </div>
    );
};

export default LoginPage;

