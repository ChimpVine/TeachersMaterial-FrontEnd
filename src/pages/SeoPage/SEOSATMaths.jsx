import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from '../../components/NavBar'
import { NavLink } from 'react-router-dom';
import { FaWpforms, FaLightbulb, FaChartLine, FaHandHoldingUsd, FaUsers, FaBrain, FaShareAlt, FaRegClock, FaRocket, FaAdjust, FaUser } from "react-icons/fa";
import logo from '../../assests/img/body-hero-section.png'
import Footer from '../Footer';
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';
import SATMaths from '../../assests/img/sat-maths.png'

export default function SEOSATMaths() {
    const { user } = useContext(UserContext);

    const handleAIToolsClick = () => {
        if (!user) {
            toast.warning("Login to access AI Tools");
        }
    };

    const btnStyle = {
        backgroundColor: '#FF683B',
        color: 'white',
    };

    const boxStyle = {
        backgroundColor: '#F5F5F5',
        boxShadow: '0 4.87px 4.87px rgba(0, 0, 0, 0.25)'
    };

    const mainStyle = {
        backgroundColor: '#8F47D7',
        boxShadow: '0 4.87px 4.87px rgba(0, 0, 0, 0.25)'
    }

    const timelineFeatures = [
        {
            number: 1,
            title: 'Speed',
            description: 'Instant generation',
        },
        {
            number: 2,
            title: 'Topic Targeting',
            description: 'Specific to user input',
        },
        {
            number: 3,
            title: 'Format Options',
            description: 'Matches SAT structure',
        },
        {
            number: 4,
            title: 'Difficulty Levels',
            description: 'Easy, Medium, or Hard',
        },
        {
            number: 5,
            title: 'Ideal For',
            description: 'Students, tutors, and teachers',
        }
    ];

    const timelineTeachers = [
        {
            number: 1,
            title: 'Speed',
            description: 'Time-consuming',
        },
        {
            number: 2,
            title: 'Topic Targeting',
            description: 'Requires research',
        },
        {
            number: 3,
            title: 'Format Options',
            description: 'Must format manually',
        },
        {
            number: 4,
            title: 'Difficulty Levels',
            description: 'Requires additional planning',
        },
        {
            number: 5,
            title: 'Ideal For',
            description: 'Advanced users only',
        }
    ];

    const AIfeatures = [
        {
            title: 'SAT-centered',
            desc: 'Focused SAT-style questions in seconds.',
            icon: <FaRegClock size={50} style={{ color: '#4CAF50' }} />,
        },
        {
            title: 'Flexible',
            desc: 'Customizable format, topic, and difficulty.',
            icon: <FaRocket size={50} style={{ color: '#FF9800' }} />,
        },
        {
            title: 'Efficient',
            desc: 'Saves time for both students and educators.',
            icon: <FaAdjust size={50} style={{ color: '#2196F3 ' }} />,
        },
    ];

    const features = [
        {
            title: 'Customizable Practice',
            desc: ' Tailor your practice sessions by selecting specific topics (e.g., algebra, geometry, word problems) and adjusting difficulty to suit the students needs.',
            icon: <FaHandHoldingUsd size={50} style={{ color: '#9747FF' }} />,
        },
        {
            title: 'Realistic Test Format',
            desc: 'The questions are formatted exactly like the SAT—both in terms of question types and the structure (multiple choice and open response, with and without calculators)—so students become familiar with the actual exam experience.',
            icon: <FaUsers size={50} style={{ color: '#28A745' }} />,
        },
        {
            title: 'Instant Access',
            desc: 'No need to search through textbooks or websites—generate math practice questions in seconds, right when you need them.',
            icon: <FaUser size={50} style={{ color: '#28A745' }} />,
        }
    ];

    return (
        <>
            <Helmet>
                <title>About SAT Math Generator - AI Tools for Teachers</title>
                <meta
                    name="description"
                    content=" Want unlimited SAT Maths Practice Questions? Worry no more! With our AI SAT Math Question Generator, access various practice questions for SATs to help students prepare for their SAT!"
                />
                <meta name="keywords" content="SAT Math Question generator, sat math question generator with answers, sat math question generator free, math problem generator with answers, sat math question bank pdf, sat math practice test pdf with answers, math question generator ai, 100 random math questions, math problem generator free, sat practice online questions, sat practice test math, math sat practice test, math worksheet generator" />
            </Helmet>
            <NavBar />
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">SAT Math Generator</h3>
                <div className="col-md-8 mx-auto">
                    <p className="mt-3 text-muted paraStyle">
                        Sharpen your skills and master the SAT with the <span className='fw-bold'>AI SAT Math Question Generator</span> — the ultimate tool for students and educators who want focused, custom math practice that mirrors the real test format. Whether you're prepping for a big test day or building skills over time, this generator creates targeted SAT-style questions tailored to your needs.
                        Perfect for students, tutors, teachers, and test prep centers aiming to build math confidence through personalized, exam-ready practice.
                    </p>
                </div>
                <div className="col-md-10 col-lg-8 mx-auto mt-4">
                    <img
                        src={SATMaths}
                        alt="Sat-Maths"
                        className="image-style img-fluid"
                    />
                </div>
                {user ? (
                    <NavLink
                        className="btn btn-md mt-3 me-2"
                        style={btnStyle}
                        to="/sat-maths"
                    >
                        Generate Now
                    </NavLink>
                ) : (
                    <button
                        className="btn btn-md mt-3 me-2"
                        style={btnStyle}
                        onClick={handleAIToolsClick}
                    >
                        Generate Now
                    </button>
                )}
            </div>
            <hr className="styled-hr" />
            <div className="container mt-5 text-center">
                <h3 className="fw-bold mb-4">How to Use?</h3>
                <div className="step-wrapper">
                    {/* Step 1 */}
                    <div className="step-box">
                        <div className="step-icon" style={boxStyle}>
                            <FaWpforms size={40} className="text-dark" />
                        </div>
                        <h6 className="step-title mt-3 fw-bold">Customize SAT Maths</h6>
                        <p className="step-description text-muted">
                            Enter a math topic, choose a difficulty, select question types, and set the number for each.
                        </p>
                    </div>
                    {/* Connector */}
                    <div className="step-connector d-none d-md-block">
                        <svg width="100" height="30" viewBox="0 0 100 30" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#8f44fd" />
                                    <stop offset="100%" stopColor="#c083ff" />
                                </linearGradient>
                            </defs>
                            <path d="M0,20 Q50,0 100,20" fill="transparent" stroke="url(#lineGradient1)" strokeWidth="3" strokeDasharray="6,6" />
                        </svg>
                    </div>
                    {/* Step 2 */}
                    <div className="step-box">
                        <div className="step-icon" style={mainStyle}>
                            <FaLightbulb size={40} className="text-light" />
                        </div>
                        <h6 className="step-title mt-3 fw-bold">Generate SAT Maths</h6>
                        <p className="step-description text-muted">
                            Click 'Generate' to create math questions based on your preferences.
                        </p>
                    </div>
                    {/* Connector */}
                    <div className="step-connector d-none d-md-block">
                        <svg width="100" height="30" viewBox="0 0 100 30" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#8f44fd" />
                                    <stop offset="100%" stopColor="#c083ff" />
                                </linearGradient>
                            </defs>
                            <path d="M0,10 Q50,30 100,10" fill="transparent" stroke="url(#lineGradient2)" strokeWidth="3" strokeDasharray="6,6" />
                        </svg>
                    </div>
                    {/* Step 3 */}
                    <div className="step-box">
                        <div className="step-icon" style={boxStyle}>
                            <FaChartLine size={40} className="text-dark" />
                        </div>
                        <h6 className="step-title mt-3 fw-bold">View SAT Maths</h6>
                        <p className="step-description text-muted">
                            Print or save for test prep sessions.
                        </p>
                    </div>
                </div>
            </div>
            <hr className="styled-hr" />
            <div className="container mt-5">
                <div className="row align-items-start">
                    {/* Left Side Image */}
                    <div className="col-md-6 d-flex justify-content-center align-items-start">
                        <img src={logo} alt="AI Tools" className="img-fluid w-75" />
                    </div>

                    {/* Right Side Timeline */}
                    <div className="col-md-6 mt-4 mt-md-0">
                        <h4 className="fw-bold text-danger mb-4">Why Use the SAT Math Generator?</h4>
                        <div className="timeline-step mb-4">
                            <div className="circle red">1</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Test-Like Practice</h5>
                                <p className="text-muted">Questions follow the structure and tone of official SAT questions, helping you build familiarity and confidence.</p>
                            </div>
                        </div>

                        <div className="timeline-step mb-4">
                            <div className="circle orange">2</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Targeted Prep</h5>
                                <p className="text-muted">Choose the exact topic and difficulty you want — no need to waste time on questions that don’t match your focus.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-step">
                            <div className="circle purple">3</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Perfect for Class or Home</h5>
                                <p className="text-muted">Teachers can instantly generate questions for warm-ups, homework, or assessments. Students can practice exactly what they need, anytime.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">Why Teachers and Parents Use the SAT Math Generator?</h3>
                <div className="col-md-8 mx-auto mb-4">
                    <p className="mt-3 text-muted paraStyle">
                    The SAT can be a daunting exam for students, but with the right practice, it’s entirely manageable. Teachers and parents rely on the AI SAT Math Question Generator to provide their students with targeted, relevant practice questions that mirror the real SAT math test. This tool allows educators to instantly generate custom questions based on specific topics and difficulty levels, saving time and ensuring that every practice session counts. Whether you're a teacher prepping your class for the SAT or a parent guiding your child through math practice, this tool ensures that learning is focused, efficient, and stress-free.Parents and teachers appreciate the flexibility to select exactly what their students need—whether it's for homework, practice tests, or in-class activities. With this tool, they can ensure that students have the right resources to sharpen their skills, build confidence, and perform their best on test day.
                    </p>
                </div>
                <hr className="styled-hr" />
                <div className="row justify-content-center">
                    {features.map((feature, idx) => (
                        <div key={idx} className="col-md-4 mb-4">
                            <div
                                className="card text-center p-4 feature-card w-100"
                                style={{ backgroundColor: feature.bgColor, height: "100%" }}
                            >
                                <div className="card-body">
                                    <div className="icon-circle mb-3">
                                        {feature.icon}
                                    </div>
                                    <h5 className="card-title fw-bold">{feature.title}</h5>
                                    <p className="card-text text-secondary">{feature.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr className="styled-hr" />
            <div className="container">
                <h3 className="fw-bold mb-5 text-center">How Does SAT Math Generator Compare ?</h3>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="timeline-step d-flex align-items-center mb-5">
                            <div className="circle blue me-3 d-flex align-items-center justify-content-center">
                                <FaBrain size={25} />
                            </div>
                            <div className="timeline-content">
                                <h4 className="fw-bold mb-1">SAT Math Generator</h4>
                            </div>
                        </div>
                        {timelineFeatures.map((feature, idx) => (
                            <div className="timeline-step mb-4 d-flex align-items-start" key={idx}>
                                <div className="circle blue me-3">{feature.number}</div>
                                <div className="timeline-content text-start">
                                    <h5 className="fw-bold mb-1">{feature.title}</h5>
                                    <p className="text-muted">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-4">
                        <div className="timeline-step d-flex align-items-center mb-5">
                            <div className="circle green me-3 d-flex align-items-center justify-content-center">
                                <FaShareAlt size={25} />
                            </div>
                            <div className="timeline-content">
                                <h4 className="fw-bold mb-1">Traditional Methods</h4>
                            </div>
                        </div>
                        {timelineTeachers.map((feature, idx) => (
                            <div className="timeline-step mb-4 d-flex align-items-start" key={idx}>
                                <div className="circle green me-3">{feature.number}</div>
                                <div className="timeline-content text-start">
                                    <h5 className="fw-bold mb-1">{feature.title}</h5>
                                    <p className="text-muted">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <hr className="styled-hr" />
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">Why Choose the SAT Math Generator?</h3>
                <div className="row justify-content-center">
                    {AIfeatures.map((feature, idx) => (
                        <div key={idx} className="col-md-4 mb-4">
                            <div
                                className="card text-center p-4 feature-card w-100"
                                style={{ backgroundColor: feature.bgColor, height: "100%" }}
                            >
                                <div className="card-body">
                                    <div className="icon-circle mb-3">
                                        {feature.icon}
                                    </div>
                                    <h5 className="card-title fw-bold">{feature.title}</h5>
                                    <p className="card-text text-secondary">{feature.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr className="styled-hr" />
            <div className="col-md-10 mx-auto">
                <p className="text-muted paraStyle p-2">
                From practicing linear equations without a calculator to tackling challenging functions with one — <span className='fw-bold'>the SAT Math Question Generator</span> is your secret weapon for scoring higher and studying smarter.
                </p>
            </div>
            <Footer />
        </>
    )
}
