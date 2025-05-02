import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from '../../components/NavBar'
import { NavLink } from 'react-router-dom';
import { FaWpforms, FaLightbulb, FaChartLine, FaHandHoldingUsd, FaUsers, FaBrain, FaShareAlt, FaRegClock, FaRocket, FaAdjust, FaUser } from "react-icons/fa";
import logo from '../../assests/img/body-hero-section.png'
import Footer from '../Footer';
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';
import LessonPlanner from '../../assests/img/lessons-planner.png'

export default function SEOLessonPlanner() {
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
            description: 'Instant results',
        },
        {
            number: 2,
            title: 'Structure',
            description: 'Fully tailored to your input',
        },
        {
            number: 3,
            title: 'Flexibility',
            description: 'Built-in classroom filter',
        },
        {
            number: 4,
            title: 'Inclusivity',
            description: 'New jokes each time',
        },
        {
            number: 5,
            title: 'Presentation',
            description: 'Zero prep',
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
            title: 'Quick',
            desc: 'Provides instant, editable lesson plans.',
            icon: <FaRegClock size={50} style={{ color: '#4CAF50' }} />,
        },
        {
            title: 'Top-notch Output',
            desc: 'Ensures quality instruction with scaffolded content.',
            icon: <FaRocket size={50} style={{ color: '#FF9800' }} />,
        },
        {
            title: 'Time Saving',
            desc: 'Saves time and effort, letting teachers do what they love—teach!',
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
            title: 'Instant and Easy',
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
                <h3 className="mb-3 fw-bold">Lesson Planner</h3>
                <div className="col-md-8 mx-auto">
                    <p className="mt-3 text-muted paraStyle">
                        Our <span className='fw-bold'>AI-powered Lesson Planner</span> is designed to help educators craft comprehensive, ready-to-use lesson plans with ease! Whether you’re planning for Science, Math, English, or other subjects, this tool allows teachers to upload their materials and instantly generate a detailed lesson plan tailored to their topic, grade, and class duration.
                        This tool is Ideal for teachers, homeschooling parents, and educational content creators looking to save time while enhancing lesson structure!
                    </p>
                </div>
                <div className="col-md-10 col-lg-8 mx-auto mt-4">
                    <img
                        src={LessonPlanner}
                        alt="Lesson-Planner"
                        className="image-style img-fluid"
                    />
                </div>
                {user ? (
                    <NavLink
                        className="btn btn-md mt-3 me-2"
                        style={btnStyle}
                        to="/lesson-planner"
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
                        <h6 className="step-title mt-3 fw-bold">Customize Lesson Planner</h6>
                        <p className="step-description text-muted">
                            Choose subject, grade, duration, upload file, and add a description.
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
                            Click 'Generate' for a complete lesson plan tailored to your preferences.
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
                        <h6 className="step-title mt-3 fw-bold">View Lesson Planner</h6>
                        <p className="step-description text-muted">
                            Download or view your customized lesson plan.
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
                        <h4 className="fw-bold text-danger mb-4">Why Our Lesson Planner?</h4>
                        <div className="timeline-step mb-4">
                            <div className="circle red">1</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Comprehensive AI-Generated Structure!</h5>
                                <p className="text-muted">Each lesson includes:Learning Objectives, Materials Needed, Step-by-step Procedure (Intro → Practice → Closure), Assessment Techniques, Differentiation & Accommodations, Extension Ideas. Reflection Section, Real-world Importance.Everything a modern lesson plan needs—instantly generated and editable!
                                </p>
                            </div>
                        </div>

                        <div className="timeline-step mb-4">
                            <div className="circle orange">2</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Multi-Subject Support!</h5>
                                <p className="text-muted">
                                    Supports any K–12 subject and automatically adapts the structure to your grade and topic—whether it’s a first-grade science unit on plants or a middle school history review.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-step">
                            <div className="circle purple">3</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Printable & Shareable!</h5>
                                <p className="text-muted">
                                    One-click PDF download lets you print or share the lesson plan with colleagues, parents, or students without any hassle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">Why Should Teachers Use Our Lesson Planner?</h3>
                <div className="col-md-8 mx-auto mb-4">
                    <p className="mt-3 text-muted paraStyle">
                        In today’s fast-paced classrooms, <span className='fw-bold'>efficient planning</span> is crucial. Studies show that teachers spend an average of 6–10 hours per week planning lessons (EdTech Report 2023). Our Lesson Planner helps streamline this process so teachers can focus on delivery and student engagement.
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
                <h3 className="fw-bold mb-5 text-center">How Does Lesson Planner Compare ?</h3>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="timeline-step d-flex align-items-center mb-5">
                            <div className="circle blue me-3 d-flex align-items-center justify-content-center">
                                <FaBrain size={25} />
                            </div>
                            <div className="timeline-content">
                                <h4 className="fw-bold mb-1">Lesson Planner</h4>
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
                <h3 className="mb-3 fw-bold">Why Choose the Lesson Planner?</h3>
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
                    Whether you’re teaching in a classroom, tutoring online, or homeschooling, this tool is your perfect companion for educational excellence!
                </p>
            </div>
            <Footer />
        </>
    )
}