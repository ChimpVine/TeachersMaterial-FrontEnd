import React, { useContext, useState } from 'react';
import logo from "../assests/img/ChimpVine_Logo.png";
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext.jsx';

export default function NavBar() {
    const { user, logout } = useContext(UserContext);
    const userEmail = user ? user.user_email : null;
    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        setLoading(true); 
        await logout();    
        setLoading(false); 
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary no-print">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="ChimpVine Logo" width="185" height="56" className='img-fluid' />
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto me-5">
                            <li className="nav-item mt-2">
                                <NavLink className="nav-link-home me-5" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item mt-2">
                                <NavLink className="nav-link-home me-5" to="/Aboutus">About Us</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle text-light me-4" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Resources
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <NavLink
                                            className="nav-link-splitter p-2"
                                            to="/PdfSplitter">PDF Splitter
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle text-light me-4" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Support
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                    <li>
                                        <NavLink
                                            className="nav-link-navigate p-2"
                                            to="/RequestForm">
                                            Contact Us
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            {user ? (
                                <li className="nav-item text-white mt-1">
                                    Welcome, {userEmail} 
                                    <button
                                        onClick={handleLogout}
                                        className="btn btn-outline-light btn-sm ms-2"
                                        disabled={loading} 
                                    >
                                        {loading ? "Logging out..." : "Logout"}
                                    </button>
                                </li>
                            ) : (
                                <>
                                    <NavLink to="/Login">
                                        <button className='btn btn-outline-light btn-sm mt-1 me-2'>Login</button>
                                    </NavLink>
                                    <NavLink to="https://site.chimpvine.com/register/chimpvine-membership/" target='_blank'>
                                        <button className='btn btn-outline-light btn-sm mt-1'>Register</button>
                                    </NavLink>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
