import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handlePasswordReset = (event) => {
        event.preventDefault();
        alert(`Password reset link sent to ${email}`);
    };

    return (
        <div className="forgot-password-container">
            <h2>Forgot Password</h2>
            <form onSubmit={handlePasswordReset}>
                <div className="input-box">
                    <input
                        type="email"
                        placeholder="Enter your registered email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Send Password Reset Link</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
