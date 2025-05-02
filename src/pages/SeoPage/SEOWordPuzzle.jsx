import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from '../../components/NavBar'
import { NavLink } from 'react-router-dom';
import { FaWpforms, FaLightbulb, FaChartLine, FaHandHoldingUsd, FaUsers, FaBrain, FaShareAlt, FaRegClock, FaRocket, FaAdjust, FaUser } from "react-icons/fa";
import logo from '../../assests/img/body-hero-section.png'
import Footer from '../Footer';
import Puzzle from '../../assests/img/word-puzzle.png'
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';

export default function SEOWordPuzzle() {

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
            title: 'Contextual Hints',
            description: 'Built-in',
        },
        {
            number: 3,
            title: 'Download Format',
            description: 'Integrated into content',
        },
        {
            number: 4,
            title: 'Customization',
            description: 'Ready-to-use PDF/PPT',
        },
        {
            number: 5,
            title: 'Game-Based Learning',
            description: 'Fully editable',
        }
    ];

    const timelineTeachers = [
        {
            number: 1,
            title: 'Speed',
            description: 'Time-intensive process',
        },
        {
            number: 2,
            title: 'Contextual Hints',
            description: 'Must be researched manually',
        },
        {
            number: 3,
            title: 'Download Format',
            description: 'Needs formatting work',
        },
        {
            number: 4,
            title: 'Customization',
            description: 'Requires rewriting manually',
        },
        {
            number: 5,
            title: 'Game-Based Learning',
            description: 'Often static and text-heavy',
        }
    ];

    const AIfeatures = [
        {
            title: 'Gamify your lessons',
            desc: 'Gamify your lessons with challenging and fun puzzle content.',
            icon: <FaRegClock size={50} style={{ color: '#4CAF50' }} />,
        },
        {
            title: 'Integrates seamlessly',
            desc: 'Integrates seamlessly into vocabulary, history, science, and grammar topics.',
            icon: <FaRocket size={50} style={{ color: '#FF9800' }} />,
        },
        {
            title: 'Downloadable in seconds',
            desc: 'Downloadable in seconds, ready for class or homework.',
            icon: <FaAdjust size={50} style={{ color: '#2196F3 ' }} />,
        },
    ];

    const features = [
        {
            title: 'Instant Puzzle Generation',
            desc: 'Creating word puzzles manually can be time-consuming. With our AI, you get professionally structured, topic-based puzzles in seconds—complete with contextual hints and answer keys.',
            icon: <FaHandHoldingUsd size={50} style={{ color: '#9747FF' }} />,
        },
        {
            title: 'Boosts Vocabulary & Comprehension',
            desc: 'Students build vocabulary through themed clues and missing-letter word challenges, which reinforce both word recognition and conceptual understanding.',
            icon: <FaUsers size={50} style={{ color: '#28A745' }} />,
        },
        {
            title: 'Print-Ready for Class & Homework',
            desc: 'Download the puzzle questions and answer keys as separate, ready-to-print PDFs—perfect for worksheets, homework assignments, or collaborative classroom games. Convenient and easy to use!',
            icon: <FaUser size={50} style={{ color: '#28A745' }} />,
        }
    ];

    return (
        <>
            <Helmet>
                <title>About Word Puzzle Generator - AI Tools for Teachers</title>
                <meta
                    name="description"
                    content="Engage students to expand their vocabulary using our AI Word Puzzle Generator! Transform boring classrooms with fun activities to make learning exciting with our word puzzle maker."
                />
                <meta name="keywords" content="word puzzle generator, ai word puzzle generator, word puzzle generator free
                word search maker, word search maker free, word search maker free printable, word search puzzle, word search maker with answer key, word puzzle generator for kidsword puzzle generator pdf, find the word puzzle maker, word generator puzzle, word search puzzle generator algorithm, word puzzles creator, word finder puzzle makerd" />
            </Helmet>
            <NavBar />
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">Word Puzzle Generator</h3>
                <div className="col-md-8 mx-auto">
                    <p className="mt-3 text-muted paraStyle">
                        The <span className='fw-bold'>AI Word Puzzle Generator</span> transforms learning into a fun and brain-stimulating activity! Generate topic-specific word puzzles where students complete missing letters using hints. This tool enhances vocabulary, memory, and contextual understanding — all while making the classroom experience more enjoyable and engaging.
                        Best for teachers, parents, and content creators looking to gamify learning through language!
                        Generate puzzles instantly and boost curiosity in every subject!
                    </p>
                </div>
                <div className="col-md-10 col-lg-8 mx-auto mt-4">
                    <img
                        src={Puzzle}
                        alt="word-puzzle-generator"
                        className="image-style img-fluid"
                    />
                </div>
                {user ? (
                    <NavLink
                        className="btn btn-md mt-3 me-2"
                        style={btnStyle}
                        to="/word-puzzle"
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
                        <h6 className="step-title mt-3 fw-bold">Customize Word Puzzle</h6>
                        <p className="step-description text-muted">
                            Enter a topic, then select the word count and difficulty level.
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
                        <h6 className="step-title mt-3 fw-bold">Generate Word Puzzle</h6>
                        <p className="step-description text-muted">
                            Click 'Generate' to create a word puzzle based on your preferences.
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
                        <h6 className="step-title mt-3 fw-bold">Download Puzzle</h6>
                        <p className="step-description text-muted">
                            Click 'Download' to save the word puzzle as a PDF.
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
                        <h4 className="fw-bold text-danger mb-4">Why Our Word Puzzle Generator?</h4>
                        <div className="timeline-step mb-4">
                            <div className="circle red">1</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Editable Content</h5>
                                <p className="text-muted">
                                    The generated words and hints can be edited before sharing to align more closely with your lesson objectives.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-step mb-4">
                            <div className="circle orange">2</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Skill Boost</h5>
                                <p className="text-muted">
                                    Encourages students to apply critical thinking, pattern recognition, and vocabulary recall.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-step">
                            <div className="circle purple">3</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Ready for Class</h5>
                                <p className="text-muted">
                                    Download both questions and answers as separate, print-ready PDFs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">Why Should Teachers and Parents Use Our Word Puzzle Generator?</h3>
                <div className="col-md-8 mx-auto mb-4">
                    <p className="mt-3 text-muted paraStyle">
                        Keeping students engaged while boosting their vocabulary and critical thinking can be a challenge—especially with traditional methods. That’s where our AI Word Puzzle Generator comes in. Designed to turn ordinary lessons into interactive games, this tool empowers teachers and parents to deliver curriculum-aligned word puzzles that are both educational and entertaining.
                        Whether you're teaching science, history, or grammar, the word puzzle generator enhances understanding by encouraging students to decode clues, recognize patterns, and apply knowledge—all while having fun. It’s a perfect blend of cognitive development and classroom engagement.
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
                <h3 className="fw-bold mb-5 text-center">How Does the Word Puzzle Generator Compare?</h3>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="timeline-step d-flex align-items-center mb-5">
                            <div className="circle blue me-3 d-flex align-items-center justify-content-center">
                                <FaBrain size={25} />
                            </div>
                            <div className="timeline-content">
                                <h4 className="fw-bold mb-1">Word Puzzle Generator</h4>
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
                <h3 className="mb-3 fw-bold">Why Choose the Word Puzzle Generator?</h3>
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
                    From filling in blanks about Egyptian gods to decoding science terms with context clues — this tool makes vocabulary learning <span className='fw-bold'>fun, focused, and frustration-free.</span>
                </p>
            </div>
            <Footer />
        </>
    )
}