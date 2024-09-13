import React from 'react'
import logo from "../assests/img/ChimpVine_Logo.png";
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className="footer mt-5 bg-body-tertiary text-white">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-3">
                            <NavLink className="navbar-brand" to="https://site.chimpvine.com/">
                                <img src={logo} alt="ChimpVineLogo" width="185" height="56" className='mb-3' />
                            </NavLink>
                            <h6>Gamified learning platform to engage young minds.</h6>
                            <div className="d-flex mt-3">
                                <NavLink 
                                className="social-content" 
                                to="https://www.facebook.com/ChimpVineGlobal">
                                    <FaFacebook className="me-3" size={25}/>
                                </NavLink>
                                <NavLink 
                                className="social-content" 
                                to="https://www.linkedin.com/company/chimpvineinternational/">
                                    <FaLinkedin className="me-3" size={25}/>
                                </NavLink>
                                <NavLink 
                                className="social-content" 
                                to="https://www.instagram.com/chimpvine.global/">
                                    <FaInstagramSquare className="me-3" size={25}/>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-3 pt-3">
                            <h5>Our Products</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <NavLink className="content" to="https://site.chimpvine.com/">
                                        Education Games
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="content" to="https://chatbot.chimpvine.com/math-cal">
                                        Math Homework Help
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 pt-3">
                            <h5>Affiliate</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <NavLink
                                        className="content"
                                        to="https://site.chimpvine.com/become-an-affiliate/">
                                        Become an affiliate
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="content"
                                        to="https://site.chimpvine.com/affiliate-terms-conditions/">
                                        Affiliate Terms and Condition
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="content"
                                        to="https://site.chimpvine.com/affiliate-faqs/">
                                        Affiliate FAQ
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 pt-3">
                            <h5>Others</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <NavLink
                                        className="content"
                                        to="https://site.chimpvine.com/policy/">
                                        Privacy Policy
                                    </NavLink>

                                </li>
                                <li>
                                    <NavLink
                                        className="content"
                                        to="https://site.chimpvine.com/faqs/">
                                        FAQ's
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="content"
                                        to="https://site.chimpvine.com/contact-us/">
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 text-center">
                            <p> Copyright &copy; 2024 | Product of ChimpVine</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}
