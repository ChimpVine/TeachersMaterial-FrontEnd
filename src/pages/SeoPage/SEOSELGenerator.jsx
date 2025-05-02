import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from '../../components/NavBar'
import { NavLink } from 'react-router-dom';
import { FaWpforms, FaLightbulb, FaChartLine, FaHandHoldingUsd, FaUsers, FaBrain, FaShareAlt, FaRegClock, FaRocket, FaAdjust, FaUser } from "react-icons/fa";
import logo from '../../assests/img/body-hero-section.png'
import Footer from '../Footer';
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';
import SELGenerator from '../../assests/img/SEL-generator.png'

export default function SEOSELGenerator() {
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
            description: 'Instantly generated',
        },
        {
            number: 2,
            title: 'Customization',
            description: 'Grade, duration, and objective-based',
        },
        {
            number: 3,
            title: 'Structure',
            description: 'Warm-up, main activity, reflection',
        },
        {
            number: 4,
            title: 'Flexibility',
            description: 'Editable & printable',
        },
        {
            number: 5,
            title: 'SEL Alignment',
            description: 'Based on SEL competencies',
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
            title: 'Customization',
            description: 'Needs manual tailoring',
        },
        {
            number: 3,
            title: 'Structure',
            description: 'Must build from scratch',
        },
        {
            number: 4,
            title: 'Flexibility',
            description: 'May require reformatting',
        },
        {
            number: 5,
            title: 'SEL Alignment',
            description: 'Needs additional research',
        }
    ];

    const AIfeatures = [
        {
            title: 'Student Development',
            desc: 'Helps students grow emotionally, socially, and behaviorally.',
            icon: <FaRegClock size={50} style={{ color: '#4CAF50' }} />,
        },
        {
            title: 'Structured Plan',
            desc: 'Fits seamlessly into morning meetings, advisory sessions, or full SEL blocks',
            icon: <FaRocket size={50} style={{ color: '#FF9800' }} />,
        },
        {
            title: 'Competent',
            desc: 'Supports CASEL-aligned competencies with clarity and purpose.',
            icon: <FaAdjust size={50} style={{ color: '#2196F3 ' }} />,
        },
    ];

    const features = [
        {
            title: 'Aligned with SEL Standards',
            desc: 'Built around core competencies like self-awareness, relationship skills, and responsible decision-making.',
            icon: <FaHandHoldingUsd size={50} style={{ color: '#9747FF' }} />,
        },
        {
            title: 'Tailored to Your Classroom',
            desc: 'Plans adjust to grade level, topic, duration, and learning objectives for a better student connection',
            icon: <FaUsers size={50} style={{ color: '#28A745' }} />,
        },
        {
            title: 'Time-Efficient',
            desc: 'Eliminates hours of manual planning so you can focus on what matters: connection, community, and growth.',
            icon: <FaUser size={50} style={{ color: '#28A745' }} />,
        }
    ];

    return (
        <>
            <Helmet>
                <title>About SEL Plan Generator - AI Tools for Teachers</title>
                <meta
                    name="description"
                    content="With ChimpVine’s AI SEL Plan generator, implement SEL strategies in your classroom in an organized and effective manner. Create a SEL plan for students of any grade simply in just a few clicks, that too with the flexibility to focus on specific SEL topics."
                />
                <meta name="keywords" content="ai sel plan generator, ai sel plan generator free, ai sel plan generator online free, ai sel plan generator online" />
            </Helmet>
            <NavBar />
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">SEL Plan Generator</h3>
                <div className="col-md-8 mx-auto">
                    <p className="mt-3 text-muted paraStyle">
                        The Bring heart into your classroom with the  <span className='fw-bold'>AI SEL Plan Generator</span> — your instant tool for creating meaningful, age-appropriate Social-Emotional Learning (SEL) lesson plans. Whether you're focusing on empathy, self-awareness, responsible decision-making, or peer relationships, this tool helps you deliver powerful SEL experiences with ease.Perfect for educators, counselors, and caregivers who want to foster emotional intelligence and a supportive classroom culture — without spending hours planning.
                    </p>
                </div>
                <div className="col-md-10 col-lg-8 mx-auto mt-4">
                    <img
                        src={SELGenerator}
                        alt="SEL-generator"
                        className="image-style img-fluid"
                    />
                </div>
                {user ? (
                    <NavLink
                        className="btn btn-md mt-3 me-2"
                        style={btnStyle}
                        to="/sel-generator"
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
                        <h6 className="step-title mt-3 fw-bold">Customize SEL Plan</h6>
                        <p className="step-description text-muted">
                            Choose the grade level, enter the SEL topic, set the duration, and write a complete learning objective.
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
                        <h6 className="step-title mt-3 fw-bold">Generate SEL Plan</h6>
                        <p className="step-description text-muted">
                            Click 'generate' to create a SEL Plan based on your preferences
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
                        <h6 className="step-title mt-3 fw-bold">View the SEL Plan</h6>
                        <p className="step-description text-muted">
                            Download a print-ready version to bring to class.
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
                        <h4 className="fw-bold text-danger mb-4">Why Teachers Love the SEL Plan Generator?</h4>
                        <div className="timeline-step mb-4">
                            <div className="circle red">1</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Designed for Real Classrooms</h5>
                                <p className="text-muted">Activities are practical, engaging, and easy to implement — even with limited prep time.</p>
                            </div>
                        </div>

                        <div className="timeline-step mb-4">
                            <div className="circle orange">2</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Focused on Student Growth</h5>
                                <p className="text-muted">Plans support core SEL competencies and help build stronger, more connected learners.</p>
                            </div>
                        </div>

                        <div className="timeline-step">
                            <div className="circle purple">3</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Time-Saving & Thoughtful</h5>
                                <p className="text-muted">No more scrambling for activities that “kind of fit.” Get a meaningful SEL plan in minutes, not hours.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">Why Use Our SEL Plan Generator?</h3>
                <div className="col-md-8 mx-auto mb-4">
                    <p className="mt-3 text-muted paraStyle">
                        Social-emotional learning doesn’t have to be overwhelming or time-consuming to plan. The AI SEL Plan Generator gives you everything you need to create powerful, developmentally appropriate SEL lessons — tailored by grade, topic, and learning goals — in just a few clicks.
                        Whether you’re nurturing empathy in early learners or teaching self-regulation to middle schoolers, this tool ensures your classroom becomes a space where emotional intelligence is taught, practiced, and lived. No more scrambling for ideas or activities that barely fit.
                        Empower every student to grow with structure, support, and purpose — one SEL session at a time.
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
                <h3 className="fw-bold mb-5 text-center">How Does the SEL Plan Generator Compare?</h3>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="timeline-step d-flex align-items-center mb-5">
                            <div className="circle blue me-3 d-flex align-items-center justify-content-center">
                                <FaBrain size={25} />
                            </div>
                            <div className="timeline-content">
                                <h4 className="fw-bold mb-1">SEL Plan Generator</h4>
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
                <h3 className="mb-3 fw-bold">Why Choose SEL Plan Generator? </h3>
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
                    From helping little ones recognize feelings to guiding teens through relationship-building — the <span className='fw-bold'>SEL Plan Generator</span> makes it easier than ever to nurture a thriving classroom community.
                </p>
            </div>
            <Footer />
        </>
    )
}
