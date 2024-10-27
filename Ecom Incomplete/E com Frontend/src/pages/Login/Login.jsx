
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { setToken, setRole } from '../Redux/store';

import './login.css';
// import Loader from '../Signup/Loader'; 
import signInFigure from './login 1.png';

const Signin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            navigate('/profile');
        }
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        let formErrors = {};
        const { email, password } = formData;

        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!emailPattern.test(email)) {
            formErrors.email = "Please enter a valid Gmail address.";
        }

        if (password.length < 8) {
            formErrors.password = "Password must be at least 8 characters long.";
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);

        try {
            const response = await axios.post('https://voting-app-backend-nine.vercel.app/user/login', formData);
            const { token, role } = response.data;

            // dispatch(setToken(token));
            // dispatch(setRole(role));
            localStorage.setItem('authToken', token);

            setMessage({ text: "Login successful!", color: "green" });

            if (role === 'admin') {
                navigate('/admin-panel');
            } else {
                navigate('/profile');
            }
        } catch (error) {
            setMessage({ text: error.response ? error.response.data.error : 'Login failed!', color: "red" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="SignIn-Main-registration-6543">
            <div className="SignIn-svg-wrapper-3124">
                <img src={signInFigure} alt="Signup Figure" />
            </div>
            <div className="SignIn-Main-login-9876">
                <div className="SignIn-login-box-2345">
                    <p className="SignIn-sign-in-heading-8765">Sign In</p>
                    {message && <p className="SignIn-the-Answer-6743" style={{ color: message.color }}>{message.text}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="SignIn-user-box-6587">
                            {errors.email && <p className="SignIn-error-message-2314">{errors.email}</p>}
                            <div className="SignIn-input-wrapper-1254">
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required disabled={loading} />
                                <label>Email</label>
                            </div>
                        </div>
                        <div className="SignIn-user-box-6587">
                            {errors.password && <p className="SignIn-error-message-2314">{errors.password}</p>}
                            <div className="SignIn-input-wrapper-1254">
                                <input type="password" name="password" value={formData.password} onChange={handleChange} required disabled={loading} />
                                <label>Password</label>
                                </div>
                   </div>
                         {loading ? <Loader /> : (
                            <a href="#" onClick={handleSubmit}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Submit
                            </a>
                        )}
                    </form>
                    <p style={{ color: 'white', alignSelf:"center" }}>Don't have an account? 
                    <NavLink to="/signup" className="SignIn-a2-3456">
                    Sign up!
                    </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signin;



