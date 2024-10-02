import React from 'react'
import logo from "../assests/img/ChimpVine_Logo.png";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary no-print">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="ChimpVineLogo" width="185" height="56" className='img-fluid'/>
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-5">
                            <li className="nav-item">
                                <NavLink className="nav-link-home me-5" to="/MainPlanner">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link-contact me-5" to="/RequestForm">Request for Tools</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


