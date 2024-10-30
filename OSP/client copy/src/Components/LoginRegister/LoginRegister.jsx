import React, { useState } from 'react';
import './LoginRegister.css';
import logo from './assets/img.png';

const LoginRegister = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [captcha, setCaptcha] = useState(generateCaptcha());

    const toggleForm = () => {
        setIsRegistering(!isRegistering);
    };

    const refreshCaptcha = () => {
        setCaptcha(generateCaptcha());
    };

    function generateCaptcha() {
        return Math.floor(1000 + Math.random() * 9000).toString();
    }

    return (
        <div className="login-container">
            <div className="image-side">
                <img src={logo} alt="College Logo" className="logo-background" />
            </div>
            <div className="form-side">
                <div className="form-container">
                    <div className="form-box">
                        {!isRegistering ? (
                            <form className="login-form">
                                <h2>Login</h2>
                                <div className="input-box">
                                    <input type="email" placeholder="Email" required />
                                    <span className="icon">📧</span>
                                </div>
                                <div className="input-box">
                                    <input type="password" placeholder="Password" required />
                                    <span className="icon">🔒</span>
                                </div>
                                <div className="captcha-box">
                                    <span className="captcha-text">{captcha}</span>
                                    <button type="button" className="refresh-captcha" onClick={refreshCaptcha}>🔄</button>
                                    <input type="text" placeholder="Enter CAPTCHA" required />
                                </div>
                                <div className="remember-forgot">
                                    <label><input type="checkbox" /> Remember me</label>
                                    <a href="#">Forgot Password?</a>
                                </div>
                                <button type="submit">Login</button>
                                <div className="toggle-link">
                                    <p>Don't have an account? <span onClick={toggleForm}>Register</span></p>
                                </div>
                            </form>
                        ) : (
                            <form className="register-form">
                                <h2>Sign Up</h2>
                                <div className="input-box">
                                    <input type="text" placeholder="Username" required />
                                    <span className="icon">👤</span>
                                </div>
                                <div className="input-box">
                                    <input type="email" placeholder="Email" required />
                                    <span className="icon">📧</span>
                                </div>
                                <div className="input-box">
                                    <input type="password" placeholder="Password" required />
                                    <span className="icon">🔒</span>
                                </div>
                                <button type="submit">Register</button>
                                <div className="toggle-link">
                                    <p>Already have an account? <span onClick={toggleForm}>Login</span></p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;
