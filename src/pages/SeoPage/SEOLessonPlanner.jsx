import React from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from '../../components/NavBar'
import { NavLink } from 'react-router-dom';
import { FaWpforms, FaLightbulb, FaChartLine, FaHandHoldingUsd, FaUsers, FaBrain, FaShareAlt, FaRegClock, FaRocket, FaAdjust, FaUser } from "react-icons/fa";
import logo from '../../assests/img/body-hero-section.png'
import Footer from '../Footer';

export default function SEOLessonPlanner() {
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
            description: 'Generates lesson in seconds',
        },
        {
            number: 2,
            title: 'Structure',
            description: 'Auto-includes best practices',
        },
        {
            number: 3,
            title: 'Flexibility',
            description: 'Edit and customize easily',
        },
        {
            number: 4,
            title: 'Inclusivity',
            description: 'Built-in accommodations',
        },
        {
            number: 5,
            title: 'Presentation',
            description: 'Printable and professional',
        },
        {
            number: 6,
            title: 'Accessibility',
            description: 'Web-based and device-friendly',
        }
    ];

    const timelineTeachers = [
        {
            number: 1,
            title: 'Speed',
            description: 'Takes hours per lesson',
        },
        {
            number: 2,
            title: 'Structure',
            description: 'Risk of missing key elements',
        },
        {
            number: 3,
            title: 'Flexibility',
            description: 'Manual rewriting needed',
        },
        {
            number: 4,
            title: 'Inclusivity',
            description: 'Often overlooked manually',
        },
        {
            number: 5,
            title: 'Presentation',
            description: 'Requires manual formatting',
        },
        {
            number: 6,
            title: 'Accessibility',
            description: 'Often paper-based or local files',
        }
    ];

    const AIfeatures = [
        {
            title: 'Saves time',
            desc: 'Saves hours of lesson prep each week.',
            icon: <FaRegClock size={50} style={{ color: '#4CAF50' }} />,
        },
        {
            title: 'Boosts engagement',
            desc: 'Boosts assessment variety and adaptability.',
            icon: <FaRocket size={50} style={{ color: '#FF9800' }} />,
        },
        {
            title: 'Editable',
            desc: 'Editable to meet your classrooms learning style and student level.',
            icon: <FaAdjust size={50} style={{ color: '#2196F3 ' }} />,
        },
    ];

    const features = [
        {
            title: 'Time Saver',
            desc: 'Generate structured plans in seconds.',
            icon: <FaHandHoldingUsd size={50} style={{ color: '#9747FF' }} />,
        },
        {
            title: 'Engagement-Ready',
            desc: 'Aligned with modern pedagogy to keep students active and curious.',
            icon: <FaUsers size={50} style={{ color: '#28A745' }} />,
        },
        {
            title: 'Consistency',
            desc: 'Ensures every lesson covers core elements required by schools and districts.',
            icon: <FaUser size={50} style={{ color: '#28A745' }} />,
        }
    ];

    return (
        <>
            <Helmet>
                <title>About Lesson Planner - AI Tools for Teachers</title>
                <meta
                    name="description"
                    content="Create Lesson Plan in no time with our AI Lesson Planner, Get the option to customize the lesson planner as per the curriculum and course just with a few clicks. The lesson planner is perfect for teachers to save some of their time. Try it now!"
                />
                <meta name="keywords" content="lesson planner generator free, ai lesson planner, lesson plan generator, lesson plan for pg, ai lesson plan generator free, lesson planner generator pdf, lesson plan maker app, best ai lesson plan generator" />
            </Helmet>
            <NavBar />
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">AI Lesson Planner</h3>
                <div className="col-md-8 mx-auto">
                    <p className="mt-3 text-muted paraStyle">
                        Our AI-powered Lesson Planner is designed to help educators craft comprehensive, ready-to-use lesson plans with ease! Whether you’re planning for Science, Math, English, or other subjects, this tool allows teachers to upload their materials and instantly generate a detailed lesson plan tailored to their topic, grade, and class duration.This tool is Ideal for teachers, homeschooling parents, and educational content creators looking to save time while enhancing lesson structure!
                    </p>
                </div>
                <div className="col-md-10 col-lg-8 mx-auto mt-4">
                    <div className="ratio ratio-16x9">
                        <iframe
                            src="https://www.youtube.com/embed/_Npp65RP7Vw"
                            title="AI Quiz Generator Demo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <NavLink to="/quiz-generator">
                    <button className='btn mt-4' style={btnStyle}>Generate Now</button>
                </NavLink>
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
                        <h6 className="step-title mt-3 fw-bold">Customize Lesson Planner</h6>
                        <p className="step-description text-muted">
                            Select subject, grade, duration and upload PDF file to generate your Lesson Planner.
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
                        <h6 className="step-title mt-3 fw-bold">Generate Lesson Planner</h6>
                        <p className="step-description text-muted">
                            Click 'generate' to create a Lesson Planner based on your preferences
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
                        <h6 className="step-title mt-3 fw-bold">View the Worksheet</h6>
                        <p className="step-description text-muted">
                            Customize the Lesson Planner as needed before sharing it with students.
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
                        <h4 className="fw-bold text-danger mb-4">Why our AI Lesson Planner?</h4>
                        <div className="timeline-step mb-4">
                            <div className="circle red">1</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Quick</h5>
                                <p className="text-muted">
                                    Provides instant, editable lesson plans.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-step mb-4">
                            <div className="circle orange">2</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Top-notch Output</h5>
                                <p className="text-muted">
                                    Ensures quality instruction with scaffolded content.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-step">
                            <div className="circle purple">3</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Time Saving</h5>
                                <p className="text-muted">
                                    Saves time and effort, letting teachers do what they love—teach!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">Why Should Teachers and Parents use our AI Lesson Planner?</h3>
                <div className="col-md-8 mx-auto mb-4">
                    <p className="mt-3 text-muted paraStyle">
                        In today’s fast-paced classrooms, efficient planning is crucial. Studies show that teachers spend an average of 6–10 hours per week planning lessons (EdTech Report 2023). Our Lesson Planner helps streamline this process so teachers can focus on delivery and student engagement.
                    </p>
                </div>
                <hr className="styled-hr" />
                <div className="row justify-content-center">
                    {features.map((feature, idx) => (
                        <div key={idx} className="col-md-4 mb-4">
                            <div
                                className="card text-center p-4 feature-card"
                                style={{ backgroundColor: feature.bgColor }}
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
                <h3 className="fw-bold mb-5 text-center">How Does the AI Worksheet Planner Compare?</h3>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="timeline-step d-flex align-items-center mb-5">
                            <div className="circle blue me-3 d-flex align-items-center justify-content-center">
                                <FaBrain size={25} />
                            </div>
                            <div className="timeline-content">
                                <h4 className="fw-bold mb-1">AI Worksheet Planner</h4>
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
                <h3 className="mb-3 fw-bold">Why Choose the Worksheet Planner?</h3>
                <div className="row justify-content-center">
                    {AIfeatures.map((feature, idx) => (
                        <div key={idx} className="col-md-4 mb-4">
                            <div
                                className="card text-center p-4 feature-card"
                                style={{ backgroundColor: feature.bgColor }}
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
                <p className="text-muted paraStyle">
                    Whether you’re teaching in a classroom, tutoring online, or homeschooling, this tool is your perfect companion for educational excellence!
                </p>
            </div>
            <Footer />
        </>
    )
}
