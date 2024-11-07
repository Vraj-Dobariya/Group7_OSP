import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleResetPassword = (e) => {
        e.preventDefault();
        if (email) {
            setMessage(`A password reset link has been sent to ${email}.`);
            // Simulate sending an email
            console.log(`Sending password reset link to ${email}`);
        } else {
            setMessage('Please enter a valid email address.');
        }
    };

    return (
        <div className="forgot-password-container">
            <h2>Forgot Password</h2>
            <form onSubmit={handleResetPassword}>
                <div className="input-box">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={handleEmailChange} 
                        required 
                    />
                </div>
                <button type="submit">Send Reset Link</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default ForgotPassword;
