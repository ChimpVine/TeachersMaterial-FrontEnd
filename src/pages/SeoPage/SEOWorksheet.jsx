import React from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from '../../components/NavBar'
import { NavLink } from 'react-router-dom';
import { FaWpforms, FaLightbulb, FaChartLine, FaHandHoldingUsd, FaUsers, FaBrain, FaShareAlt, FaRegClock, FaRocket, FaAdjust,FaUser } from "react-icons/fa";
import logo from '../../assests/img/body-hero-section.png'
import Footer from '../Footer';

export default function SEOWorksheet() {
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
            title: 'Time Efficiency',
            description: 'Ready in seconds',
        },
        {
            number: 2,
            title: 'Personalization',
            description: '7+ formats with sub-types',
        },
        {
            number: 3,
            title: 'Auto Answer Key',
            description: 'Yes, instantly included',
        },
        {
            number: 4,
            title: 'Editability',
            description: 'Yes, fully editable',
        },
        {
            number: 5,
            title: 'Compatibility',
            description: 'Cloud-based, works on any device',
        }
    ];

    const timelineTeachers = [
        {
            number: 1,
            title: 'Time Efficiency',
            description: 'Hours of drafting',
        },
        {
            number: 2,
            title: 'Personalization',
            description: 'Limited by time and effort.',
        },
        {
            number: 3,
            title: 'Auto Answer Key',
            description: 'Must be created manually',
        },
        {
            number: 4,
            title: 'Editability',
            description: 'Yes, but more time-consuming',
        },
        {
            number: 5,
            title: 'Compatibility',
            description: 'Often requires desktop tools',
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
            title: 'Time-Saving Automation',
            desc: 'Educators often spend countless hours creating, formatting, and adjusting worksheets to fit different student levels.Our AI Worksheet Planner simplifies this process automating worksheet creation to save valuable time, allowing teachers and parents to focus more on meaningful interactions with learners. ',
            icon: <FaHandHoldingUsd size={50} style={{ color: '#9747FF' }} />,
        },
        {
            title: 'Improved Learning Outcomes',
            desc: 'Custom-generated worksheets are better aligned with students’ learning paths, reinforcing concepts through repetition and variation. This leads to better understanding and higher retention, compared to traditional, one-size-fits-all worksheets.',
            icon: <FaUsers size={50} style={{ color: '#28A745' }} />,
        },
        {
            title: 'Increased Focus on Students',
            desc: 'By handling the bulk of worksheet planning and content generation, our tool frees up educators to concentrate on student performance, engagement, and well-being—making the learning experience more holistic and effective.',
            icon: <FaUser size={50} style={{ color: '#28A745' }} />,
        }
    ];

    return (
        <>
            <Helmet>
                <title>About Worksheet Planner - AI Tools for Teachers</title>
                <meta
                    name="description"
                    content="Make worksheets as per your requirement in just a few clicks with our AI Worksheet Generator for Teachers! Generate and download limitless worksheets for your class without any hassle in no time!"
                />
                <meta name="keywords" content=" worksheet generator, worksheet generator ai, worksheet generator for teachers, worksheet generator free, worksheet generator maths, ai worksheet generator free,
                worksheet generator pdf, free ai worksheet generator for teachers, worksheet generator ai free
                worksheet generator math, worksheet generator handwriting, worksheet generator multiplication, worksheet generator spelling
                " />
            </Helmet>
            <NavBar />
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">AI Worksheet Planner</h3>
                <div className="col-md-8 mx-auto">
                    <p className="mt-3 text-muted paraStyle">
                        The AI-Powered Worksheet Planner is your all-in-one solution for generating high-quality, topic-based worksheets with just a few clicks! Whether you’re preparing assessments in Science, Math, English, or any subject, this tool lets you choose question types, adjust formats, and instantly receive ready-to-use content — editable and tailored to your students’ needs. Designed for teachers, curriculum creators, and homeschooling parents looking for speed, flexibility, and quality in worksheet creation.
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
                        <h6 className="step-title mt-3 fw-bold">Customize Worksheet</h6>
                        <p className="step-description text-muted">
                            Select subject, grade, question numbers, type, and sub-type to generate your worksheet.
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
                        <h6 className="step-title mt-3 fw-bold">Generate Worksheet</h6>
                        <p className="step-description text-muted">
                            Click 'generate' to create a worksheet based on your preferences
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
                            Customize the Worksheet as needed before sharing it with students.
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
                        <h4 className="fw-bold text-danger mb-4">Why our AI Worksheet Planner?</h4>
                        <div className="timeline-step mb-4">
                            <div className="circle red">1</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Fully Editable Content</h5>
                                <p className="text-muted">All questions generated are 100% editable. Modify text, rephrase questions, or tailor answer options directly to suit your classroom’s learning goals.</p>
                            </div>
                        </div>

                        <div className="timeline-step mb-4">
                            <div className="circle orange">2</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Multiple Question Formats</h5>
                                <p className="text-muted">Choose from 7 types of question layouts for maximum assessment flexibility.</p>
                            </div>
                        </div>

                        <div className="timeline-step">
                            <div className="circle purple">3</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Printable & Shareable</h5>
                                <p className="text-muted">Download your worksheet in PDF format with just one click.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">Why Should Teachers and Parents use our AI Quiz Generator?</h3>
                <div className="col-md-8 mx-auto mb-4">
                    <p className="mt-3 text-muted paraStyle">
                        In today’s fast-paced educational landscape, personalized learning is no longer a luxury but a necessity. Studies show that personalized learning plans can improve student performance by up to 30% (EdTech Trends Report 2023). Our AI Quiz Generator is designed to support this transformation with its data-driven, adaptive assessment tools that cater to every learner’s unique needs.
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
                    Whether you're teaching “Plants and Their Needs” to 1st graders or preparing grammar <span className='fw-bold'>worksheets</span> for middle schoolers, this tool lets you build and edit your assessments with ease, clarity, and professionalism.
                </p>
            </div>
            <Footer />
        </>
    )
}
