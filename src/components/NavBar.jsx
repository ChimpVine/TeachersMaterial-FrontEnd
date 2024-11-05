import React from 'react';
import logo from "../assests/img/ChimpVine_Logo.png";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
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
                                            Request for Tools
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
