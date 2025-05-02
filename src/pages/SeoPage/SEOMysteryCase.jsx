import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from '../../components/NavBar'
import { NavLink } from 'react-router-dom';
import { FaWpforms, FaLightbulb, FaChartLine, FaHandHoldingUsd, FaUsers, FaBrain, FaShareAlt, FaRegClock, FaRocket, FaAdjust, FaUser } from "react-icons/fa";
import logo from '../../assests/img/body-hero-section.png'
import Footer from '../Footer';
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';
import MysteryCase from '../../assests/img/mystery-case.png'

export default function SEOMysteryCase() {
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
            title: 'Engagement Level',
            description: 'High – gamified learning',
        },
        {
            number: 2,
            title: 'Topic Integration',
            description: 'Custom and curriculum-based',
        },
        {
            number: 3,
            title: 'Critical Thinking',
            description: 'Built-in clue analysis',
        },
        {
            number: 4,
            title: 'Prep Time',
            description: 'Instant',
        },
        {
            number: 5,
            title: 'Versatility',
            description: 'Reusable and adjustable',
        }
    ];

    const timelineTeachers = [
        {
            number: 1,
            title: 'Engagement Level',
            description: 'High – gamified learning',
        },
        {
            number: 2,
            title: 'Topic Integration',
            description: 'Custom and curriculum-based',
        },
        {
            number: 3,
            title: 'Critical Thinking',
            description: 'Built-in clue analysis',
        },
        {
            number: 4,
            title: 'Prep Time',
            description: 'Instant',
        },
        {
            number: 5,
            title: 'Versatility',
            description: 'Reusable and adjustable',
        }
    ];

    const AIfeatures = [
        {
            title: 'Interactive Learning',
            desc: 'Makes learning immersive, creative, and challenging.',
            icon: <FaRegClock size={50} style={{ color: '#4CAF50' }} />,
        },
        {
            title: 'Fun Learning',
            desc: ' Turns academic content into interactive stories and puzzles',
            icon: <FaRocket size={50} style={{ color: '#FF9800' }} />,
        },
        {
            title: 'Quick',
            desc: 'Saves time while making your classroom more dynamic',
            icon: <FaAdjust size={50} style={{ color: '#2196F3 ' }} />,
        },
    ];

    const features = [
        {
            title: 'Curriculum-Connected Learning',
            desc: 'Every case is designed around your subject and topic, ensuring it aligns with academic standards while offering a fresh perspective.',
            icon: <FaHandHoldingUsd size={50} style={{ color: '#9747FF' }} />,
        },
        {
            title: 'Tailored Content',
            desc: 'Choose the topic, difficulty level, and number of clues to meet your learners’ needs. The tool adjusts to your goals without extra effort.',
            icon: <FaUsers size={50} style={{ color: '#28A745' }} />,
        },
        {
            title: 'Increases Motivation and Fun',
            desc: 'Learning becomes more exciting when it feels like an adventure. The mystery format naturally encourages curiosity, participation, and creativity.',
            icon: <FaUser size={50} style={{ color: '#28A745' }} />,
        }
    ];

    return (
        <>
            <Helmet>
                <title>About Mystery Case Generator - AI Tools for Teachers</title>
                <meta
                    name="description"
                    content="Ignite curious minds with our AI Mystery Case Generator. Explore a new way of studying through mystery cases. Have mysteries unlock the wonders, try it now!"
                />
                <meta name="keywords" content="mystery case generator, mystery case generator based on plot, mystery case generator free, mystery case generator fantasy, mystery generator wheel, mystery plot ideas
                mystery story ideas with a twist
                " />
            </Helmet>
            <NavBar />
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">Mystery Case Generator</h3>
                <div className="col-md-8 mx-auto">
                    <p className="mt-3 text-muted paraStyle">
                        Turn your classroom into a scene of intrigue with the <span className='fw-bold'>AI Mystery Case Generator</span> — an exciting way to promote critical thinking, teamwork, and deeper understanding through interactive case-solving! This tool instantly builds custom mystery scenarios that connect directly to your subject matter and learning goals.Perfect for teachers, enrichment coordinators, and curious minds who want to bring fun, challenge, and creativity into the learning experience.
                    </p>
                </div>
                <div className="col-md-10 col-lg-8 mx-auto mt-4">
                    <img
                        src={MysteryCase}
                        alt="Mystery-Case"
                        className="image-style img-fluid"
                    />
                </div>
                {user ? (
                    <NavLink
                        className="btn btn-md mt-3 me-2"
                        style={btnStyle}
                        to="/mystery-case"
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
                        <h6 className="step-title mt-3 fw-bold">Customize Bingo</h6>
                        <p className="step-description text-muted">
                            Enter the Case Study topic, select difficulty and number of clues.
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
                        <h6 className="step-title mt-3 fw-bold">Generate Bingo</h6>
                        <p className="step-description text-muted">
                            Click 'Generate' to receive a short backstory or scenario based on your preferences.
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
                        <h6 className="step-title mt-3 fw-bold">View Mystery Case</h6>
                        <p className="step-description text-muted">
                            Print or save the mystery as a handout.
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
                        <h4 className="fw-bold text-danger mb-4">Why Use the Mystery Case Generator?</h4>
                        <div className="timeline-step mb-4">
                            <div className="circle red">1</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Deep Engagement</h5>
                                <p className="text-muted">Students become detectives as they analyze clues, connect ideas, and draw conclusions — all while learning your target topic.</p>
                            </div>
                        </div>

                        <div className="timeline-step mb-4">
                            <div className="circle orange">2</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Curriculum-Connected</h5>
                                <p className="text-muted">
                                    Each case is grounded in your subject area and designed to reinforce key concepts in a fun, applied way.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-step">
                            <div className="circle purple">3</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Ready in Seconds</h5>
                                <p className="text-muted">Forget long prep times — your mystery case is just a click away!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">Why Teachers and Parents Use the Mystery Case Generator?</h3>
                <div className="col-md-8 mx-auto mb-4">
                    <p className="mt-3 text-muted paraStyle">
                        Teachers and parents choose the <span className='fw-bold'>AI Mystery Case Generator</span>because it transforms ordinary lessons into engaging, story-driven challenges. It’s a powerful way to help students dive deeper into academic content while developing essential skills like reasoning, collaboration, and critical thinking.<span className='fw-bold'>Teachers</span> use it to energize their lessons, introduce complex topics in a memorable way, or reinforce learning through interactive review. It’s ideal for sparking classroom discussions, encouraging group work, or offering a fun twist on traditional assessments.<span className='fw-bold'>Parents</span> use it at home to create meaningful learning experiences beyond textbooks or screens. Whether it's for weekend learning, homework support, or educational playtime, the mystery format keeps kids interested and motivated to solve and learn.
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
                <h3 className="fw-bold mb-5 text-center">How Does Mystery Case Generator Compare ?</h3>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="timeline-step d-flex align-items-center mb-5">
                            <div className="circle blue me-3 d-flex align-items-center justify-content-center">
                                <FaBrain size={25} />
                            </div>
                            <div className="timeline-content">
                                <h4 className="fw-bold mb-1">Mystery Case Generator</h4>
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
                <h3 className="mb-3 fw-bold">Why Choose the Mystery Case Generator?</h3>
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
                    Whether students are solving a mystery about food chains or uncovering a grammar glitch in a fictional town — the <span className='fw-bold'>Mystery Case Generator</span></p>
            </div>
            <Footer />
        </>
    )
}
