import React, { useState } from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
// import { logout } from '../Redux/store';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    // const { token, role } = useSelector((state) => state.auth);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const token =localStorage.getItem('authToken') || null;

    const handleToggle = () => {
        setIsMobile(!isMobile);
    };

    const handleCloseMenu = () => {
        if (isMobile) {
            setIsMobile(false);
        }
    };

    // const handleLogout = () => {
    //     dispatch(logout());
    //     handleCloseMenu();
    //     navigate('/');
    // };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#" className="navbar-logo" width={10}>
                    <img src={"LOGO.png"}  height={10} alt="Logo" />
                </a>
                <div className="menu-icon" onClick={handleToggle}>
                    {isMobile ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={isMobile ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className={(e) => e.isActive ? "red nav-links" : "nav-links"}
                            onClick={handleCloseMenu}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/steps"
                            className={(e) => e.isActive ? "red nav-links" : "nav-links"}
                            onClick={handleCloseMenu}
                        >
                            Guidelines
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/candidate"
                            className={(e) => e.isActive ? "red nav-links" : "nav-links"}
                            onClick={handleCloseMenu}
                        >
                            Candidates
                        </NavLink>
                    </li>
                    {token ? (
                        role === 'admin' ? (
                            <>
                            <li className="nav-item">
                            <NavLink
                                to="/profile"
                                className={(e) => e.isActive ? "red nav-links" : "nav-links"}
                                onClick={handleCloseMenu}
                            >
                                Profile
                            </NavLink>
                        </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/admin-panel"
                                    className={(e) => e.isActive ? "red nav-links" : "nav-links"}
                                    onClick={handleCloseMenu}>
                                        <button className="Nav-blue-button"> Admin Panel</button>
                                   
                                </NavLink>
                            </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <NavLink
                                    to="/profile"
                                    className={(e) => e.isActive ? "red nav-links" : "nav-links"}
                                    onClick={handleCloseMenu}
                                >
                                    <button className="Nav-blue-button">Profile</button>
                                </NavLink>
                            </li>
                        )
                    ) : (
                        <li className="nav-item">
                            <NavLink
                                to="/Login"
                                className={(e) => e.isActive ? "red nav-links" : "nav-links"}
                                onClick={handleCloseMenu}
                            >
                                <button className="Nav-blue-button">Login</button>
                            </NavLink>
                        </li>
                    )}
                    {/* {token && (
                        <li className="nav-item">
                            <button className="Nav-blue-button" id='nav-btn-color' onClick={handleLogout}>Logout</button>
                        </li>
                    )} */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
