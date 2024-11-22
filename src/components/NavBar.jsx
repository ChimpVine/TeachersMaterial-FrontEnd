import React, { useContext, useState } from 'react';
import logo from "../assests/img/ChimpVine_Logo.png";
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext.jsx';

export default function NavBar() {
    const { user, logout } = useContext(UserContext);
    const userName = user?.display_name;
    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        setLoading(true);
        await logout();
        setLoading(false);
    };

    const btnStyle = {
        backgroundColor: '#FF683B',
        color: 'white',
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary no-print">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img
                            src={logo}
                            alt="ChimpVine Logo"
                            width="185"
                            height="56"
                            className="img-fluid"
                        />
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto me-5">
                            <li className="nav-item mt-2 p-2">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "nav-link-home me-5 active-link" : "nav-link-home me-5"
                                    }
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item mt-2 p-2">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "nav-link-home me-5 active-link" : "nav-link-home me-5"
                                    }
                                    to="/MainPlanner"
                                >
                                    AI Tools
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown mt-2">
                                <NavLink
                                    className="nav-link dropdown-toggle text-light me-5 ms-2"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Resources
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <NavLink
                                            className="nav-link-splitter p-2"
                                            to="/PdfSplitter"
                                        >
                                            PDF Splitter
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item mt-2 p-2">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "nav-link-navigate me-5 text-light active-link" : "nav-link-navigate me-5 text-light"
                                    }
                                    to="/RequestForm"
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            {user ? (
                                <li className="nav-item text-white mt-1 p-2">
                                    Welcome, {userName}
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
                                        <button className="btn btn-outline-light btn-sm mt-2 ms-2 me-2">
                                            Login
                                        </button>
                                    </NavLink>
                                    <NavLink to="https://site.chimpvine.com/test161803/register/subscription-free-for-2-months/">
                                        <button
                                            className="btn btn-sm mt-2 ms-2"
                                            style={btnStyle}
                                        >
                                            Register
                                        </button>
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
