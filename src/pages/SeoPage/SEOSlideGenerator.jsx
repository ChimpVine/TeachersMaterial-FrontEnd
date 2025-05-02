import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from '../../components/NavBar'
import { NavLink } from 'react-router-dom';
import { FaWpforms, FaLightbulb, FaChartLine, FaHandHoldingUsd, FaUsers, FaBrain, FaShareAlt, FaRegClock, FaRocket, FaAdjust, FaUser } from "react-icons/fa";
import logo from '../../assests/img/body-hero-section.png'
import Footer from '../Footer';
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';
import SlideGenerator from '../../assests/img/slide-generator.png'

export default function SEOSlideGenerator() {

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
            title: 'Grade-Level Targeting',
            description: 'Built-in',
        },
        {
            number: 3,
            title: 'Learning Objectives',
            description: 'Integrated into content',
        },
        {
            number: 4,
            title: 'Format',
            description: 'Ready-to-use PDF/PPT',
        },
        {
            number: 5,
            title: 'Editability',
            description: 'Fully editable',
        },
        {
            number: 6,
            title: 'Visual Engagement',
            description: 'Structured for clarity',
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
            title: 'Grade-Level Targeting',
            description: 'Requires manual tweaking',
        },
        {
            number: 3,
            title: 'Learning Objectives',
            description: 'Must be crafted manually',
        },
        {
            number: 4,
            title: 'Format',
            description: 'Needs design and layout',
        },
        {
            number: 5,
            title: 'Editability',
            description: 'Must redo or reformat',
        },
        {
            number: 6,
            title: 'Visual Engagement',
            description: 'Varies by creator skills',
        }
    ];

    const AIfeatures = [
        {
            title: 'Enhance Focus',
            desc: 'Designed to encourage student focus, retention, and participation.',
            icon: <FaRegClock size={50} style={{ color: '#4CAF50' }} />,
        },
        {
            title: 'Increase engagement',
            desc: 'Builds engaging, educational content in under a minute.',
            icon: <FaRocket size={50} style={{ color: '#FF9800' }} />,
        },
        {
            title: 'Simplicity',
            desc: 'Makes class presentations easier, smarter, and more effective.',
            icon: <FaAdjust size={50} style={{ color: '#2196F3 ' }} />,
        },
    ];

    const features = [
        {
            title: 'Instant Slide Decks',
            desc: 'Generate professional, structured presentations in seconds—just by entering your topic and objectives. Save hours every week on prep time.',
            icon: <FaHandHoldingUsd size={50} style={{ color: '#9747FF' }} />,
        },
        {
            title: 'Boosts Visual Engagement',
            desc: 'Slides are built for clarity and impact—making it easier for students to follow along, stay focused, and retain information.',
            icon: <FaUsers size={50} style={{ color: '#28A745' }} />,
        },
        {
            title: 'Editable & Downloadable',
            desc: 'Presentations can be easily edited and downloaded as PDF or PowerPoint files, allowing you to personalize the material before sharing or presenting.',
            icon: <FaUser size={50} style={{ color: '#28A745' }} />,
        }
    ];

    return (
        <>
            <Helmet>
                <title>About Slide Generator - AI Tools for Teachers</title>
                <meta
                    name="description"
                    content="Prepare presentation slides for the classroom in just a few minutes for any subject and topic! In the click of a few buttons, have the slides ready for your next class with our AI Presentation Generator!"
                />
                <meta name="keywords" content="slide generator, google slides. slide maker ai, free ai presentation maker, ppt maker ai, ppt maker online free, slides ai, ppt generator, online ppt maker ai, ai slide generator, slideshow generator, side generator for teachers, slide generator from pdf" />
            </Helmet>
            <NavBar />
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">Slide Generator</h3>
                <div className="col-md-8 mx-auto">
                    <p className="mt-3 text-muted paraStyle">
                        Turn your lessons into polished presentations in seconds! The <span className='fw-bold'>AI Slide Generator</span> creates visually engaging, grade-appropriate slide decks based on your input — saving time while enriching student understanding.Just choose the grade, topic, objective, and number of slides — and let the tool do the rest! Perfect for teachers, homeschoolers, and content creators looking to simplify lesson planning and boost visual learning.Create compelling slides that educate, engage, and inspire — all at the click of a button!
                    </p>
                </div>
                <div className="col-md-10 col-lg-8 mx-auto mt-4">
                    <img
                        src={SlideGenerator}
                        alt="Slide-generator"
                        className="image-style img-fluid"
                    />
                </div>
                {user ? (
                    <NavLink
                        className="btn btn-md mt-3 me-2"
                        style={btnStyle}
                        to="/slide-generator"
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
                        <h6 className="step-title mt-3 fw-bold">Customize Slide Generator</h6>
                        <p className="step-description text-muted">
                            Choose grade level, enter slide title, set objective, and select the number of slides.
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
                        <h6 className="step-title mt-3 fw-bold">Generate Slide Generator</h6>
                        <p className="step-description text-muted">
                            Click 'generate' to create a presentation slides based on your preferences.
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
                        <h6 className="step-title mt-3 fw-bold">Download Slides</h6>
                        <p className="step-description text-muted">
                            Use Download Slides to save a presentation-ready file (PDF or PowerPoint format).

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
                        <h4 className="fw-bold text-danger mb-4">Why Our Slide Generator?</h4>
                        <div className="timeline-step mb-4">
                            <div className="circle red">1</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Grade-Specific Content</h5>
                                <p className="text-muted">
                                    Automatically tailors content complexity and tone to the selected educational level.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-step mb-4">
                            <div className="circle orange">2</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Learning-Focused</h5>
                                <p className="text-muted">
                                    Each slide is structured around a clear objective — promoting understanding, not just display.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-step">
                            <div className="circle purple">3</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Time-Saver</h5>
                                <p className="text-muted">
                                    Skip hours of formatting and research — get focused slides instantly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">Why Should Teachers and Parents Use Our Slide Generator?</h3>
                <div className="col-md-8 mx-auto mb-4">
                    <p className="mt-3 text-muted paraStyle">
                        In an age where visual learning and efficient lesson delivery are essential, the AI Slide Generator empowers educators and parents to create impactful presentations in just minutes. Whether you're leading a classroom, supporting homeschooling, or creating educational content online, this tool simplifies the process of slide creation while boosting clarity and engagement.
                        Forget the hours spent tweaking PowerPoint decks or Googling visuals — this smart tool crafts complete, age-appropriate slide presentations based on your topic, grade level, and learning objectives. It’s the fastest way to make classroom-ready content that’s both informative and visually compelling.
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
                <h3 className="fw-bold mb-5 text-center">How Does the Slide Generator Compare?</h3>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="timeline-step d-flex align-items-center mb-5">
                            <div className="circle blue me-3 d-flex align-items-center justify-content-center">
                                <FaBrain size={25} />
                            </div>
                            <div className="timeline-content">
                                <h4 className="fw-bold mb-1">Slide Generator</h4>
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
                <h3 className="mb-3 fw-bold">Why Choose the Slide Generator?</h3>
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
                    From introducing algebraic concepts to exploring ancient civilizations — this tool takes your topic and turns it into an engaging, ready-to-teach slide deck. Less time prepping, more time teaching!
                </p>
            </div>
            <Footer />
        </>
    )
}
