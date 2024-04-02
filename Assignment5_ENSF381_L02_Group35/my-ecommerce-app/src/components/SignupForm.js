// <!-- 
// ======================================================================
// Assignment: ENSF 381 -Assignment 5
// Created By Muhammad Ahmed UCID: 10190776, Petr Dubovsky UCID: 30171229
// Submission: Tue Apr 2, 2024
// ======================================================================
// -->
import React, { useState } from 'react';
import './SignupForm.css';
import axios from 'axios';

const SignupForm = ({ handleSwitchForm }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [submissionState, setSubmissionState] = useState({
        message: '',
        msgColor: '',
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "username") setUsername(value);
        else if (name === "password") setPassword(value);
        else if (name === "confirmPassword") setConfirmPassword(value);
        else if (name === "email") setEmail(value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionState({ message: '', msgColor: '' });

        if (!username || !password || !confirmPassword || !email) {
            setSubmissionState({ message: 'All fields are required!', msgColor: 'red' });
            return;
        }

        if (password !== confirmPassword) {
            setSubmissionState({ message: 'Passwords do not match', msgColor: 'red' });
            return;
        }

        try {
            await axios.post('http://127.0.0.1:5000/createAccount', { username, password, email });
            setSubmissionState({ message: 'User signed up successfully!', msgColor: 'green' });
        } catch (error) {
            let message = 'An error occurred during sign up. Please try again.';
            if (error.response && error.response.data.message === "Username already exists") {
                message = 'Username is already taken!';
            }
            setSubmissionState({ message: message, msgColor: 'red' });
        }
    };



    const handleSwitchClick = () => {
        handleSwitchForm();
    };

    return (
        <div className="signup">
            <h1>Signup</h1>
            <br />
            <p style={{ color: submissionState.msgColor }}>{submissionState.message}</p>
            <br />
            <form className="signup-form" onSubmit={handleSubmit}>
                <label>Username:</label><input name="username" type="text" placeholder="Enter your username" onChange={handleInputChange} /><br />
                <label>Password:</label><input name="password" type="password" placeholder="Enter your password" onChange={handleInputChange} /><br />
                <label>Confirm Password:</label><input name="confirmPassword" type="password" placeholder="Confirm your password" onChange={handleInputChange} /><br />
                <label>Email:</label><input name="email" type="email" placeholder="Enter your email" onChange={handleInputChange} /><br />
                <button type="submit">Signup</button><br />
                <button className="link-button" onClick={handleSwitchClick}>Switch to Login</button>
            </form>
        </div>
    );
};

export default SignupForm;
