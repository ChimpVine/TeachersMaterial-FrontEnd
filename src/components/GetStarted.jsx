import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { NavLink } from 'react-router-dom';
import Footer from '../pages/Footer.jsx'

// Custom Typing Effect using React Hooks with smoother erasing
const TypingEffect = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(150); // Typing speed
    const toRotate = ["Quiz Generator.", "Lesson Planner.", "Workbook Planner.", "Worksheet Planner.", "Vocabulary Generator."];
    const period = 2000; // Period after full text typed

    useEffect(() => {
        const ticker = setTimeout(() => {
            tick();
        }, delta);

        return () => clearTimeout(ticker);
    }, [text, delta]);

    const tick = () => {
        const i = loopNum % toRotate.length;
        const fullTxt = toRotate[i];

        if (isDeleting) {
            setText(fullTxt.substring(0, text.length - 1));
        } else {
            setText(fullTxt.substring(0, text.length + 1));
        }

        // Smooth erasing by adjusting speed
        setDelta(isDeleting ? 100 : 150); // Faster erase, slower typing

        if (!isDeleting && text === fullTxt) {
            setIsDeleting(true);
            setDelta(period); // Pause before starting to erase
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300); // Small pause before starting to type
        }
    };

    return (
        <h1>
            <a href="/" className="unique-typewrite">
                <span className="wrap">{text}</span>
            </a>
        </h1>
    );
};

// Main Component
const GetStarted = () => {
    return (
        <>
            <NavBar />
            <div className="unique-get-started-container">
                <div className="container center-text mt-5">
                    <section className="py-4">
                        <div className="d-flex justify-content-center 
                            align-items-center flex-column 
                            text-center w-100">
                            <div className="w-50 mt-5">
                                <p className="display-5 fw-bold">Unlock the Ultimate Teaching Toolkit:</p>
                            </div>
                            <div>
                                <TypingEffect />
                                <NavLink to="/MainPlanner">
                                    <button className="unique-button mt-5"><span>Get Started</span></button>
                                </NavLink>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default GetStarted;
