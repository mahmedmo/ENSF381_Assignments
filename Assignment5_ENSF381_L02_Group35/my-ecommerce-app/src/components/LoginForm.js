// <!-- 
// ======================================================================
// Assignment: ENSF 381 -Assignment 5
// Created By Muhammad Ahmed UCID: 10190776, Petr Dubovsky UCID: 30171229
// Submission: Tue Apr 2, 2024
// ======================================================================
// -->
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./LoginForm.css"
const LoginForm = ({ handleSwitchForm }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [submissionState, setSubmissionState] = useState({
        message: '',
        msgColor: '',
    });
    const navigate = useNavigate();
    const handleSwitchClick = () => {
        handleSwitchForm();
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "username") setUsername(value);
        else if (name === "password") setPassword(value);

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            setSubmissionState({ message: 'All fields are required!', msgColor: 'red' });
            return;
        }
        const accountDetails = {
            "username": username,
            "password": password,

        };

        try {
            const response = await axios.post('http://127.0.0.1:5000/authAccount', accountDetails);
            console.log(accountDetails)
            console.log(response.data);
            if (response.status === 200) {
                window.loggedIn = true;
                navigate('/products');
            }
        } catch (error) {
            let message = 'An error occurred during login. Please try again.';
            if (error.response && error.response.data.message === "Invalid username or password") {
                message = 'Invalid username or password!';
            }
            setSubmissionState({ message: message, msgColor: 'red' });
        }
    };
    return (
        <div className="login">
            <h1>Login</h1>
            <br />
            <p style={{ color: submissionState.msgColor }}>{submissionState.message}</p>
            <br />
            <form className="login-form" onSubmit={handleSubmit}>
                <label>Username:</label><input name="username" onChange={handleInputChange} type="text" placeholder="Enter your username" />
                <br />

                <label>Password:</label><input name="password" onChange={handleInputChange} type="password" placeholder="Enter your password" />
                <br />
                <button type="submit">Login</button>
                <br />

                <button className="link-button" onClick={handleSwitchClick}>Switch to Signup</button>
            </form>
        </div>
    );
};

export default LoginForm;

