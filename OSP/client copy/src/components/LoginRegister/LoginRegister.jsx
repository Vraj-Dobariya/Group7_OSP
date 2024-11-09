import React, { useState } from 'react';
import './LoginRegister.css';
import logo from '../assets/img.jpeg';
import logodaiict from '../assets/imgdaiict.jpg';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";

const LoginRegister = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [captcha, setCaptcha] = useState(generateCaptcha());
    const [selectedRole, setSelectedRole] = useState('student');
    const [passwordVisible, setPasswordVisible] = useState(false); // New state for password visibility
    const navigate = useNavigate();

    const toggleForm = () => {
        setIsRegistering(!isRegistering);
    };

    const refreshCaptcha = () => {
        setCaptcha(generateCaptcha());
    };

    const handleForgotPassword = () => {
        navigate('/forgot-password');
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        if (selectedRole === 'student') {
            navigate('/student-dashboard');
        } else if (selectedRole === 'admin') {
            navigate('/admin-dashboard');
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
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
                <div className="title-box"></div>

                <div className="form-container">
                    <div className="osp-logo">
                        <div className="osp-logo-o">
                            <img src={logodaiict} alt="DAIICT Logo" className="osp-logo-image" />
                        </div>
                        <span className="osp-logo-text">SP</span>
                    </div>

                    <div className="form-box">
                        {!isRegistering ? (
                            <form className="login-form" onSubmit={handleLoginSubmit}>
                                <h2>Login</h2>
                                <div className="input-box">
                                    <input type="email" placeholder="Email" required />
                                    <FaUser className='icon'/>
                                </div>
                                <div className="input-box">
                                    <input
                                        type={passwordVisible ? "text" : "password"} // Toggle type
                                        placeholder="Password"
                                        required
                                    />
                                    <FaLock className='icon'/>
                                    <span onClick={togglePasswordVisibility} className="password-toggle">
                                        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>

                                <div className="captcha-box">
                                    <span className="captcha-text">{captcha}</span>
                                    <button type="button" className="refresh-captcha" onClick={refreshCaptcha}>🔄</button>
                                    <input type="text" placeholder="Enter CAPTCHA" required />
                                </div>
                                <div className="role-selection">
                                    <div className="input1-box">
                                        <label>
                                            <input
                                                type="radio"
                                                name="role"
                                                value="student"
                                                checked={selectedRole === 'student'}
                                                onChange={() => setSelectedRole('student')}
                                            />
                                            Student
                                        </label>
                                    </div>
                                    <div className="input1-box">
                                        <label>
                                            <input
                                                type="radio"
                                                name="role"
                                                value="admin"
                                                checked={selectedRole === 'admin'}
                                                onChange={() => setSelectedRole('admin')}
                                            />
                                            Admin
                                        </label>
                                    </div>
                                </div>

                                <div className="remember-forgot">
                                    <label><input type="checkbox" /> Remember me</label>
                                    <a href="#" onClick={handleForgotPassword}>Forgot Password?</a>
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
                                    <FaUser className='icon'/>
                                </div>
                                <div className="input-box">
                                    <input type="email" placeholder="Email" required />
                                    <FaEnvelope className='icon'/>
                                </div>
                                <div className="input-box">
                                    <input
                                        type={passwordVisible ? "text" : "password"} // Toggle type
                                        placeholder="Password"
                                        required
                                    />
                                    <FaLock className='icon'/>
                                    <span onClick={togglePasswordVisibility} className="password-toggle">
                                        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                    </span>
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
