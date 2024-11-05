import React, { useState, useEffect, useCallback } from 'react';
import NavBar from './NavBar';
import { NavLink } from 'react-router-dom';
import Footer from '../pages/Footer.jsx';
import HeroSection from '../pages/HeroSection.jsx';

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
    return (
        <>
            <NavBar />
            <div className="unique-get-started-container mb-5">
                <div className="container center-text mt-5">
                    <section className="py-4">
                        <div className="d-flex justify-content-center align-items-center flex-column text-center w-100">
                            <div className="w-50 mt-3">
                                <p className="display-5 fw-bold">Unlock the Ultimate Teaching Toolkit:</p>
                            </div>
                            <div>
                                <TypingEffect />
                                <NavLink to="/MainPlanner">
                                    <button className="unique-button mt-5 mb-4" aria-label="Start Planning">
                                        <span>Get Started</span>
                                    </button>
                                </NavLink>
                            </div>
                            <section id="section07" className="demo">
                                <a href="#target-section" onClick={(e) => scrollToSection(e, '#target-section')} aria-label="Scroll to more information">
                                    <span></span><span></span><span></span>Explore More
                                </a>
                            </section>
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
