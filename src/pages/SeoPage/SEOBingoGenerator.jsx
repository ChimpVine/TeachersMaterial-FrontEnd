import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from '../../components/NavBar'
import { NavLink } from 'react-router-dom';
import { FaWpforms, FaLightbulb, FaChartLine, FaHandHoldingUsd, FaUsers, FaBrain, FaShareAlt, FaRegClock, FaRocket, FaAdjust, FaUser } from "react-icons/fa";
import logo from '../../assests/img/body-hero-section.png'
import Footer from '../Footer';
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';
import BingoGenerator from '../../assests/img/bingo-generator.png'

export default function SEOBingoGenerator() {
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
            title: 'Time to Create',
            description: 'Instant',
        },
        {
            number: 2,
            title: 'Customization',
            description: 'Topic-based, auto-filled',
        },
        {
            number: 3,
            title: 'Number of Cards',
            description: 'Auto-matched to class size',
        },
        {
            number: 4,
            title: 'Content Focus',
            description: 'Curriculum-aligned',
        },
        {
            number: 5,
            title: 'Ease of Use',
            description: 'One-click setup',
        }
    ];

    const timelineTeachers = [
        {
            number: 1,
            title: 'Time to Create',
            description: 'Time-consuming',
        },
        {
            number: 2,
            title: 'Customization',
            description: 'Manual entry required',
        },
        {
            number: 3,
            title: 'Number of Cards',
            description: 'Must be created one by one',
        },
        {
            number: 4,
            title: 'Content Focus',
            description: 'Depends on manual input',
        },
        {
            number: 5,
            title: 'Ease of Use',
            description: 'High prep load',
        }
    ];

    const AIfeatures = [
        {
            title: 'Time Saving',
            desc: 'Saves hours of manual work and card formatting',
            icon: <FaRegClock size={50} style={{ color: '#4CAF50' }} />,
        },
        {
            title: 'Swift Generation',
            desc: 'Generates unique bingo cards for your entire class in seconds.',
            icon: <FaRocket size={50} style={{ color: '#FF9800' }} />,
        },
        {
            title: 'Versatile',
            desc: 'Great for all ages, subjects, and classroom formats.',
            icon: <FaAdjust size={50} style={{ color: '#2196F3 ' }} />,
        },
    ];

    const features = [
        {
            title: 'Instantly Generated Cards',
            desc: 'With just a few clicks, teachers can create bingo cards tailored to any topic and suitable for the number of students in the class. This eliminates the time-consuming task of making cards manually.',
            icon: <FaHandHoldingUsd size={50} style={{ color: '#9747FF' }} />,
        },
        {
            title: 'Curriculum-Aligned',
            desc: 'The generator creates bingo cards that are specifically focused on the subject or topic you’re teaching. Whether it’s vocabulary, historical events, or math formulas, you can create cards that align perfectly with your lesson plans.',
            icon: <FaUsers size={50} style={{ color: '#28A745' }} />,
        },
        {
            title: 'Ready-to-Use Printable PDFs',
            desc: 'Once the bingo cards are generated, they are ready to be printed or used digitally. You can download and distribute the materials immediately — no additional formatting required.',
            icon: <FaUser size={50} style={{ color: '#28A745' }} />,
        }
    ];

    return (
        <>
            <Helmet>
                <title>About Bingo Generator - AI Tools for Teachers</title>
                <meta
                    name="description"
                    content="Create Bingo Cards for Classroom to get students excited to learn as they play the game. With our AI Bingo Generator, form bingo cards for any topic instantly."
                />
                <meta name="keywords" content="bingo generator, random word bingo generator, bingo generator free, free unlimited bingo card generator, classroom bingo generator, classroom bingo generator free, free printable classroom bingo generator, bingo card generator, free unlimited bingo card generator, classroom bingo generator online, classroom bingo generator printable, bingo generator free, classroom bingo generator pdf
                " />
            </Helmet>
            <NavBar />
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">Bingo Generator</h3>
                <div className="col-md-8 mx-auto">
                    <p className="mt-3 text-muted paraStyle">
                        Bring fun and focus to your lessons with the <span className='fw-bold'>AI Bingo Generator</span> — a playful, interactive way to review any topic while keeping students fully engaged. This tool instantly creates customized bingo cards based on your input, making it perfect for games, reviews, and icebreakers across any subject.Ideal for teachers, activity coordinators, and parents looking to blend learning with movement and excitement — without spending hours designing materials.
                    </p>
                </div>
                <div className="col-md-10 col-lg-8 mx-auto mt-4">
                    <img
                        src={BingoGenerator}
                        alt="Bingo-Generator"
                        className="image-style img-fluid"
                    />
                </div>
                {user ? (
                    <NavLink
                        className="btn btn-md mt-3 me-2"
                        style={btnStyle}
                        to="/bingo-generator"
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
                            Enter the topic add the number of students.
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
                            Click 'Generate' to receive an instant bingo cards based on your preferences.
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
                        <h6 className="step-title mt-3 fw-bold">View Bingo</h6>
                        <p className="step-description text-muted">
                            Download a fresh set with different arrangements anytime.
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
                        <h4 className="fw-bold text-danger mb-4">Why Use the Fun Math Generator?</h4>
                        <div className="timeline-step mb-4">
                            <div className="circle red">1</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Topic-Focused</h5>
                                <p className="text-muted">Every card is built around the topic you enter, making it perfect for content reviews, subject games, or themed learning events.</p>
                            </div>
                        </div>

                        <div className="timeline-step mb-4">
                            <div className="circle orange">2</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Student-Friendly</h5>
                                <p className="text-muted">
                                    With unique cards for each student, gameplay stays engaging, fair, and fun — no repeats or confusion.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-step">
                            <div className="circle purple">3</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Versatile</h5>
                                <p className="text-muted">Use it for review sessions, test prep, celebrations, group activities, or even as a reward-day bonus!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">Why Teachers and Parents Use the Bingo Generator?</h3>
                <div className="col-md-8 mx-auto mb-4">
                    <p className="mt-3 text-muted paraStyle">
                        Teachers and parents love the <span className='fw-bold'>AI Bingo Generator</span> for its ability to transform traditional learning into an interactive, engaging game. Teachers use it to review any subject in a fun, energetic way that grabs students' attention and keeps them focused. Whether it’s for a vocabulary review, a history quiz, or a math challenge, the generator helps teachers create custom bingo cards that are perfectly aligned with their curriculum. This not only makes learning more exciting but also encourages active participation.Parents also use the generator for at-home learning, turning educational concepts into fun activities that children enjoy. It’s a great tool for reinforcing what kids are learning in school, helping them grasp important topics while having fun.
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
                <h3 className="fw-bold mb-5 text-center">How Does Bingo Generator Compare ?</h3>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="timeline-step d-flex align-items-center mb-5">
                            <div className="circle blue me-3 d-flex align-items-center justify-content-center">
                                <FaBrain size={25} />
                            </div>
                            <div className="timeline-content">
                                <h4 className="fw-bold mb-1">Bingo Generator</h4>
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
                <h3 className="mb-3 fw-bold">Why Choose the Bingo Generator?</h3>
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
                    Whether you’re turning geometry into a soccer challenge or using pizza slices to teach fractions — <span className='fw-bold'>the Fun Math Activities Generator</span> transforms traditional math into meaningful fun.
                </p>
            </div>
            <Footer />
        </>
    )
}