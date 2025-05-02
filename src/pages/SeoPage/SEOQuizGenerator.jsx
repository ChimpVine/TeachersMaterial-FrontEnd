import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from '../../components/NavBar'
import { NavLink } from 'react-router-dom';
import { FaWpforms, FaLightbulb, FaChartLine, FaHandHoldingUsd, FaUsers, FaBrain, FaShareAlt, FaRegClock, FaRocket, FaAdjust, FaUser } from "react-icons/fa";
import logo from '../../assests/img/body-hero-section.png'
import Footer from '../Footer';
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';
import QuizGenerator from '../../assests/img/quiz-generator.png'

export default function SEOQuizGenerator() {
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
            title: 'Time Efficiency',
            description: 'Automates quiz creation and grading, saving 10+ hours per week for teachers.',
        },
        {
            number: 2,
            title: 'Personalization',
            description: 'Adapts quizzes to student needs in real-time.',
        },
        {
            number: 3,
            title: 'Engagement',
            description: 'Gamified quizzes with interactive questions and instant feedback.',
        },
        {
            number: 4,
            title: 'Analytics',
            description: 'Provides real-time performance insights and trends for parents and teachers.',
        },
        {
            number: 5,
            title: 'Content Library',
            description: 'Extensive, curated question bank aligned with K-12 standards.',
        }
    ];

    const timelineTeachers = [
        {
            number: 1,
            title: 'Time Efficiency',
            description: 'Time-intensive manual creation and grading process.',
        },
        {
            number: 2,
            title: 'Personalization',
            description: 'One-size-fits-all approach with static questions.',
        },
        {
            number: 3,
            title: 'Engagement',
            description: 'Standard, text-based quizzes with delayed feedback.',
        },
        {
            number: 4,
            title: 'Analytics',
            description: 'No analytics or limited manual grade tracking.',
        },
        {
            number: 5,
            title: 'Content Library',
            description: 'Teachers must source or create content manually.',
        }
    ];

    const AIfeatures = [
        {
            title: 'Saves time',
            desc: 'Allowing teachers to focus on teaching.',
            icon: <FaRegClock size={50} style={{ color: '#4CAF50' }} />,
        },
        {
            title: 'Boosts engagement',
            desc: 'Making learning fun and interactive for students.',
            icon: <FaRocket size={50} style={{ color: '#FF9800' }} />,
        },
        {
            title: 'Adaptive Assessments',
            desc: 'The AI generates quizzes suited to different difficulty levels, ensuring fair and effective testing.',
            icon: <FaAdjust size={50} style={{ color: '#2196F3 ' }} />,
        },
    ];

    const features = [
        {
            title: 'Time-Saving Automation',
            desc: 'EOn average, teachers spend 11 hours per week creating quizzes and grading assessments. With our AI Online Quiz Maker, tasks can be automated freeing educators to focus on what matters most—teaching and mentoring.',
            icon: <FaHandHoldingUsd size={50} style={{ color: '#9747FF' }} />,
        },
        {
            title: 'Enhanced Engagement',
            desc: 'Research indicates that interactive and adaptive quizzes boost student retention by 50% compared to traditional methods. Our AI generated quizzes are tailored to engage students with relevant, thought-provoking questions.',
            icon: <FaUsers size={50} style={{ color: '#28A745' }} />,
        },
        {
            title: 'Increased Focus',
            desc: 'With the tedious work taken care of, teachers can get more time to focus on their students. Rather than staying behind the pile of work, teachers can get to understand their students along with their strengths and weaknesses.',
            icon: <FaUser size={50} style={{ color: '#28A745' }} />,
        }
    ];

    return (
        <>
            <Helmet>
                <title>About Quiz Generator - AI Tools for Teachers</title>
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
                <h3 className="mb-3 fw-bold">Quiz Generator</h3>
                <div className="col-md-8 mx-auto">
                    <p className="mt-3 text-muted paraStyle">
                        Our AI Quiz Generator is designed to assist you in formulating quizzes in just a few clicks! Perfect aid to all your assessment needs for any subjects such as English, Maths, Science, and many more. Prepare quizzes for all your course topics and simplify gauging the students’ understanding!
                    </p>
                </div>
                <div className="col-md-10 col-lg-8 mx-auto mt-4">
                    <img
                        src={QuizGenerator}
                        alt="Quiz-Generator"
                        className="image-style img-fluid"
                    />
                </div>
                {user ? (
                    <NavLink
                        className="btn btn-md mt-3 me-2"
                        style={btnStyle}
                        to="/quiz-generator"
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
                        <h6 className="step-title mt-3 fw-bold">Customize Quiz</h6>
                        <p className="step-description text-muted">
                            Enter the subject and topic, then select the difficulty level and language.
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
                        <h6 className="step-title mt-3 fw-bold">Generate Quiz</h6>
                        <p className="step-description text-muted">
                            Click 'Generate' to receive quizzes based on your preferences.
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
                        <h6 className="step-title mt-3 fw-bold">View Quiz</h6>
                        <p className="step-description text-muted">
                            Print or save the quizzes as a handout for easy distribution.
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
                        <h4 className="fw-bold text-danger mb-4">Why our AI Quiz Generator?</h4>
                        <div className="timeline-step mb-4">
                            <div className="circle red">1</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Customizable Quizzes!</h5>
                                <p className="text-muted">Customize the quiz as per your liking. With the features to choose your desired topics, as well as difficulty level, make all kinds of quizzes in seconds for all grades. Whether you are.</p>
                            </div>
                        </div>

                        <div className="timeline-step mb-4">
                            <div className="circle orange">2</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Multi-language Option! </h5>
                                <p className="text-muted">
                                    Looking for AI Tools for multiple languages? You have come to the right place! You can generate quizzes in not just English, but in Spanish, as well as Thai!
                                </p>
                            </div>
                        </div>

                        <div className="timeline-step">
                            <div className="circle purple">3</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Printable and Shareable!</h5>
                                <p className="text-muted">You can download the quizzes with no extra trouble! Just one click and you can have the PDF version of the quiz! It is THAT simple!
                                </p>
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
                <h3 className="fw-bold mb-5 text-center">How Does the Quiz Generator Compare?</h3>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="timeline-step d-flex align-items-center mb-5">
                            <div className="circle blue me-3 d-flex align-items-center justify-content-center">
                                <FaBrain size={25} />
                            </div>
                            <div className="timeline-content">
                                <h4 className="fw-bold mb-1">Quiz Generator</h4>
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
                <h3 className="mb-3 fw-bold">Why Choose the Quiz Generator?</h3>
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
                    Our <span className='fw-bold'>AI-Powered Quiz Generator</span> is the perfect solution for modern educators looking to enhance their teaching experience. With its intuitive features and smart AI assistance, creating quizzes has never been easier. Teachers can save time, improve student engagement, and ensure high-quality assessments with just a few clicks.
                    No more struggling with quiz creation—let AI handle the hard work while you focus on teaching!

                </p>
            </div>
            <Footer />
        </>
    )
}

