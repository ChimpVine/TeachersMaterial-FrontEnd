import React, { useState, useEffect, useContext, useCallback } from 'react';
import NavBar from './NavBar';
import { NavLink, useSearchParams } from 'react-router-dom';
import Footer from '../pages/Footer.jsx';
import HeroSection from '../pages/HeroSection.jsx';
import { UserContext } from '../context/UserContext';


const TypingEffect = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(150);
    const toRotate = ["Assessment", "Summarizer", "Gamification", "Planner", "Learning", "Special Needs"];
    const period = 2000;

    const tick = useCallback(() => {
        const i = loopNum % toRotate.length;
        const fullTxt = toRotate[i];

        if (isDeleting) {
            setText(prev => fullTxt.substring(0, prev.length - 1));
            setDelta(100);
        } else {
            setText(prev => fullTxt.substring(0, prev.length + 1));
            setDelta(150);
        }

        if (!isDeleting && text === fullTxt) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setLoopNum(prev => prev + 1);
            setDelta(300);
        }
    }, [isDeleting, loopNum, text, toRotate]);

    useEffect(() => {
        const ticker = setTimeout(tick, delta);
        return () => clearTimeout(ticker);
    }, [text, delta, tick]);

    return (
        <h1>
            <NavLink to="/" className="unique-typewrite" aria-label="Navigate to homepage">
                <span className="wrap">{text}</span>
            </NavLink>
        </h1>
    );
};

const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    } else {
        console.error(`Element with id ${targetId} not found.`);
    }
};

const GetStarted = () => {

    const { login, user } = useContext(UserContext);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const token = searchParams.get('token');
        if (token && typeof login === 'function') {
            login(token);
            console.log("Token found and processed:", token);
            window.history.replaceState(null, '', window.location.origin + window.location.pathname);
        } else if (!login) {
            console.warn("Login function not available in UserContext.");
        }
    }, [searchParams, login]);


    const textStyle = {
        color: '#8F47D7',
        backgroundImage: 'linear-gradient(179deg, #FF683B 0%, #fba11a 50%, transparent 54%, transparent 100%)',
        fontWeight: 700,
        marginBottom: '3.5rem',
        backgroundSize: '100% 15%',
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'left 0% bottom 10%',
        paddingBottom: '7px'
    };

    const fontStyle = {
        color: '#dc3545',
        fontWeight: 700
    }

    return (
        <>
            <NavBar />
            <div className="unique-get-started-container mb-5">
                <div className="container center-text mt-5">
                    <section className="py-4">
                        <div className="d-flex justify-content-center align-items-center flex-column text-center w-100">
                            <h2 className="display-4 fw-bold mb-4">
                                <span style={textStyle}>AI Tools</span> For Teachers
                            </h2>
                            <div>
                                <h6 className="display-6 fw-bold mb-4">
                                    <span className="me-2" style={{ fontSize: "2rem" }}>2 months</span>
                                    <span className="display-5" style={fontStyle}>FREE</span>
                                    <span className="ms-2" style={{ fontSize: "1.2rem" }}>if you sign up today !</span>
                                </h6>
                                <div className='mb-4'>
                                    <span className="ms-2" style={{ fontSize: "1.4rem" }}> 
                                        (No Credit Card Required)
                                    </span>
                                </div>
                                <TypingEffect />
                                {user ? (
                                    <NavLink to="/MainPlanner">
                                        <button className="unique-button mt-5 mb-4" aria-label="Go to AI Tools">
                                            <span>Go AI Tools</span>
                                        </button>
                                    </NavLink>
                                ) : (
                                    <NavLink to="/MainPlanner">
                                        <button className="unique-button mt-5 mb-4" aria-label="Start Planning">
                                            <span>Sign In Now</span>
                                        </button>
                                    </NavLink>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
                <div id="target-section" className="target-section">
                    <HeroSection />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default GetStarted;
