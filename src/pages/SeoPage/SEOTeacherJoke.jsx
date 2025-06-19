import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from '../../components/NavBar'
import { NavLink } from 'react-router-dom';
import { FaWpforms, FaLightbulb, FaChartLine, FaHandHoldingUsd, FaUsers, FaBrain, FaShareAlt, FaRegClock, FaRocket, FaAdjust, FaUser } from "react-icons/fa";
import logo from '../../assests/img/body-hero-section.png'
import Footer from '../Footer';
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';
import TeacherJoke from '../../assests/img/teacher-joke.png'

export default function SEOTeacherJoke() {
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
            title: 'Topic Customization',
            description: 'Fully tailored to your input',
        },
        {
            number: 3,
            title: 'Age Appropriateness',
            description: 'Built-in classroom filter',
        },
        {
            number: 4,
            title: 'Freshness',
            description: 'New jokes each time',
        },
        {
            number: 5,
            title: 'Effort Level',
            description: 'Zero prep',
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
            title: 'Topic Customization',
            description: 'Usually generic or unrelated',
        },
        {
            number: 3,
            title: 'Age Appropriateness',
            description: 'Must screen manually',
        },
        {
            number: 4,
            title: 'Freshness',
            description: 'Often recycled or outdated',
        },
        {
            number: 5,
            title: 'Effort Level',
            description: 'High effort',
        }
    ];

    const AIfeatures = [
        {
            title: 'Engage Students',
            desc: 'Make your classroom more fun, without going off-topic.',
            icon: <FaRegClock size={50} style={{ color: '#4CAF50' }} />,
        },
        {
            title: 'Relevant',
            desc: 'Generate topic-aligned jokes in seconds.',
            icon: <FaRocket size={50} style={{ color: '#FF9800' }} />,
        },
        {
            title: 'Start with a smile',
            desc: 'Bring a smile to both your students and yourself!',
            icon: <FaAdjust size={50} style={{ color: '#2196F3 ' }} />,
        },
    ];

    const features = [
        {
            title: 'Topic-Relevant Humor',
            desc: 'Each joke is custom-generated based on your subject, helping you connect laughter directly to learning goals.',
            icon: <FaHandHoldingUsd size={50} style={{ color: '#9747FF' }} />,
        },
        {
            title: 'Increases Engagement',
            desc: 'Humor can grab attention, reduce stress, and create a more inviting learning environment — especially during transitions or tricky lessons.',
            icon: <FaUsers size={50} style={{ color: '#28A745' }} />,
        },
        {
            title: 'Instant and Easy',
            desc: 'Generate original jokes on demand without having to search the internet or come up with them from scratch.',
            icon: <FaUser size={50} style={{ color: '#28A745' }} />,
        }
    ];

    return (
        <>
            <Helmet>
                <title>About Teacher Joke Generator - AI Tools for Teachers</title>
                <meta
                    name="description"
                    content="Want to make your students cackle? Then we have got you covered! Try our AI Teacher joke generator to become everyone’s favorite teacher with all the witty and clever jokes!"
                />
                <meta name="keywords" content="teacher joke generator, teacher joke generator free, teacher joke generator one liners, funny teacher joke generator, best teacher joke generator, teacher jokes for adults, short jokes for teachers to laugh. teacher jokes for kids, teacher joke of the day" />
            </Helmet>
            <NavBar />
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">Teacher Joke Generator</h3>
                <div className="col-md-8 mx-auto">
                    <p className="mt-3 text-muted paraStyle">
                        Add laughter to learning with the <span className='fw-bold'>AI Teacher Joke Generator</span> — the perfect tool to lighten the mood, energize your classroom, or break the ice during a lesson. Simply enter your teaching topic and get a batch of custom, classroom-friendly jokes that make learning more enjoyable and memorable.Great for teachers, homeschoolers, presenters, and content creators looking to sprinkle in some humor while staying on-topic!
                    </p>
                </div>
                <div className="col-md-10 col-lg-8 mx-auto mt-4">
                    <img
                        src={TeacherJoke}
                        alt="Teacher-Joke"
                        className="image-style img-fluid"
                    />
                </div>
                {user ? (
                    <NavLink
                        className="btn btn-md mt-3 me-2"
                        style={btnStyle}
                        to="/teacher-joke"
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
                        <h6 className="step-title mt-3 fw-bold">Customize Joke</h6>
                        <p className="step-description text-muted">
                            Enter the topic and select number of jokes.
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
                        <h6 className="step-title mt-3 fw-bold">Generate Joke</h6>
                        <p className="step-description text-muted">
                            Click 'Generate' to receive a set of original, light-hearted jokes based on your preferences.
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
                        <h6 className="step-title mt-3 fw-bold">View Joke</h6>
                        <p className="step-description text-muted">
                            Save as a printable set for joke-of-the-day boards.
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
                        <h4 className="fw-bold text-danger mb-4">Why Use the Teacher Joke Generator?</h4>
                        <div className="timeline-step mb-4">
                            <div className="circle red">1</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Boost Engagement</h5>
                                <p className="text-muted">Humor helps students feel at ease and more connected to the material — especially when it’s on-topic.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-step mb-4">
                            <div className="circle orange">2</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Classroom-Ready</h5>
                                <p className="text-muted">
                                    All jokes are filtered for age-appropriateness and crafted to match educational themes.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-step">
                            <div className="circle purple">3</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Easy to Use</h5>
                                <p className="text-muted">
                                    No need to brainstorm or Google — just click and laugh!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">Why Teachers and Parents Use the Teacher Joke Generator?</h3>
                <div className="col-md-8 mx-auto mb-4">
                    <p className="mt-3 text-muted paraStyle">
                        Teachers and parents use the Teacher Joke Generator to make learning more enjoyable and less intimidating. Whether it’s warming up the classroom at the start of a lesson, breaking the ice with new students, or adding levity to complex topics, this tool brings a playful edge to teaching. It delivers on-topic, clean humor instantly — saving time while keeping students engaged and smiling.
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
                <h3 className="fw-bold mb-5 text-center">How Does Teacher Joke Generator Compare ?</h3>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="timeline-step d-flex align-items-center mb-5">
                            <div className="circle blue me-3 d-flex align-items-center justify-content-center">
                                <FaBrain size={25} />
                            </div>
                            <div className="timeline-content">
                                <h4 className="fw-bold mb-1">Teacher Joke Generator</h4>
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
                <h3 className="mb-3 fw-bold">Why Choose the Teacher Joke Generator?</h3>
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
                Whether you’re teaching integers or insects, grammar or gravity — the <span className='fw-bold'>Teacher Joke Generator</span> gives you the perfect one-liners to lighten up the learning.
                </p>       
            </div>
            <Footer />
        </>
    )
}