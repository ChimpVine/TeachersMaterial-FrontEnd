import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from '../../components/NavBar'
import { NavLink } from 'react-router-dom';
import { FaWpforms, FaLightbulb, FaChartLine, FaHandHoldingUsd, FaUsers, FaBrain, FaShareAlt, FaRegClock, FaRocket, FaAdjust, FaUser } from "react-icons/fa";
import logo from '../../assests/img/body-hero-section.png'
import Footer from '../Footer';
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';
import Vocabulary from '../../assests/img/vocabulary.png'

export default function SEOVocabulary() {
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
            description: 'Generates in seconds',
        },
        {
            number: 2,
            title: 'Word Relevance',
            description: 'Topic-specific terms',
        },
        {
            number: 3,
            title: 'Sentence Context',
            description: 'Editable contextual examples',
        },
        {
            number: 4,
            title: 'Customization',
            description: 'Fully editable output',
        },
        {
            number: 5,
            title: 'Download Format',
            description: 'Ready-to-download PDF',
        }
    ];

    const timelineTeachers = [
        {
            number: 1,
            title: 'Speed',
            description: 'Takes hours',
        },
        {
            number: 2,
            title: 'Word Relevance',
            description: 'Often pulled from textbooks',
        },
        {
            number: 3,
            title: 'Sentence Context',
            description: 'Must be written manually',
        },
        {
            number: 4,
            title: 'Customization',
            description: 'Manual editing needed',
        },
        {
            number: 5,
            title: 'Download Format',
            description: 'Requires formatting',
        }
    ];

    const AIfeatures = [
        {
            title: 'Focus on learning',
            desc: ' Focus on learning, not formatting — get definitions and usage in seconds.',
            icon: <FaRegClock size={50} style={{ color: '#4CAF50' }} />,
        },
        {
            title: 'Reinforce comprehension',
            desc: 'Reinforce comprehension through sample sentences.',
            icon: <FaRocket size={50} style={{ color: '#FF9800' }} />,
        },
        {
            title: 'Print-friendly',
            desc: 'Print-friendly design for worksheets, slides, or learning journals.',
            icon: <FaAdjust size={50} style={{ color: '#2196F3 ' }} />,
        },
    ];

    const features = [
        {
            title: 'Time-Efficient Automation',
            desc: 'Manually crafting vocabulary lists with accurate definitions and example sentences can take hours. With our AI Vocabulary Builder, you can generate a complete, editable list in seconds—saving time for teaching and interaction.',
            icon: <FaHandHoldingUsd size={50} style={{ color: '#9747FF' }} />,
        },
        {
            title: 'Enhanced Word Retention',
            desc: 'By combining definitions with editable example sentences, students engage with words in context—leading to better comprehension and long-term retention.',
            icon: <FaUsers size={50} style={{ color: '#28A745' }} />,
        },
        {
            title: 'Curriculum-Aligned Content',
            desc: 'The AI selects topic-relevant vocabulary aligned to the subject and grade level—ensuring the words are meaningful and applicable to what students are learning.',
            icon: <FaUser size={50} style={{ color: '#28A745' }} />,
        }
    ];

    return (
        <>
            <Helmet>
                <title>About Vocabulary Builder - AI Tools for Teachers</title>
                <meta
                    name="description"
                    content="Enhance vocabulary by swiftly creating custom vocabulary lists  with our AI Vocabulary Builder. Simply prepare a vocabulary list for different grades, subjects and topics with varying difficulty levels."
                />
                <meta name="keywords" content="vocabulary builder generator, ai for teachers, ai english vocabulary, ai vocab, ai vocabulary, ai vocabulary builder, ai vocabulary builder free, ai vocabulary builder app, ai vocabulary builder online. vocabulary builder app. best vocabulary apps free" />
            </Helmet>
            <NavBar />
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">Vocabulary Builder</h3>
                <div className="col-md-8 mx-auto">
                    <p className="mt-3 text-muted paraStyle">
                        The <span className='fw-bold'>AI Vocabulary Builder</span> is your go-to assistant for quickly generating age-appropriate vocabulary lists based on any subject or topic! Whether you're teaching Science, English, or Social Studies, this tool helps students master key terms with definitions and example sentences — all in one place.Perfect for teachers, ESL educators, curriculum developers, and parents focused on vocabulary development and reading comprehension.
                    </p>
                </div>
                <div className="col-md-10 col-lg-8 mx-auto mt-4">
                    <img
                        src={Vocabulary}
                        alt="vocabulary"
                        className="image-style img-fluid"
                    />
                </div>
                {user ? (
                    <NavLink
                        className="btn btn-md mt-3 me-2"
                        style={btnStyle}
                        to="/vocabulary-builder"
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
                        <h6 className="step-title mt-3 fw-bold">Customize Vocabulary Builder</h6>
                        <p className="step-description text-muted">
                            Select the subject, grade, difficulty level, word count, and enter the topic.
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
                        <h6 className="step-title mt-3 fw-bold">Generate Vocabulary Builder</h6>
                        <p className="step-description text-muted">
                            Click 'Generate' for a complete, printable vocabulary List with definitions to your preferences.
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
                        <h6 className="step-title mt-3 fw-bold">View Vocabulary Builder</h6>
                        <p className="step-description text-muted">
                            Download or view your customized vocabulary builder.
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
                        <h4 className="fw-bold text-danger mb-4">Why Choose the Vocabulary Builder?</h4>
                        <div className="timeline-step mb-4">
                            <div className="circle red">1</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Word List with Definitions</h5>
                                <p className="text-muted">Each word is paired with a student-friendly definition to build understanding and confidence.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-step mb-4">
                            <div className="circle orange">2</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Sentence Builder</h5>
                                <p className="text-muted">
                                    Along with word definitions, the tool creates editable example sentences so students can see the words in context.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-step">
                            <div className="circle purple">3</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">One-Click Download</h5>
                                <p className="text-muted">
                                    All content is exportable in PDF format for printing or sharing digitally with students.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">Why Should Teachers and Parents Use Our AI Vocabulary Builder?</h3>
                <div className="col-md-8 mx-auto mb-4">
                    <p className="mt-3 text-muted paraStyle">
                        Building a strong vocabulary is foundational for academic success—but manually creating vocabulary lists with definitions and example sentences can be time-consuming and inconsistent. Our AI Vocabulary Builder takes the hassle out of the process by delivering age-appropriate, topic-specific word lists in seconds. Whether you're a teacher looking to reinforce lesson content or a parent supporting at-home learning, this tool is your go-to assistant for vocabulary mastery.Designed with flexibility and personalization in mind, the AI Vocabulary Builder ensures that each list is tailored to your students’ grade level, subject area, and comprehension ability—supporting a deeper understanding of language through clear definitions and context-driven sentences.
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
                <h3 className="fw-bold mb-5 text-center">How Does Vocabulary Builder Compare ?</h3>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="timeline-step d-flex align-items-center mb-5">
                            <div className="circle blue me-3 d-flex align-items-center justify-content-center">
                                <FaBrain size={25} />
                            </div>
                            <div className="timeline-content">
                                <h4 className="fw-bold mb-1">Vocabulary Builder</h4>
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
                <h3 className="mb-3 fw-bold">Why Choose the Vocabulary Builder?</h3>
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
                    From simple science words like Moon and Rocket to subject-rich terms like Orbit and Galaxy, the Vocabulary Builder gives young learners the language tools they need to succeed — all in just a few clicks.
                </p>
            </div>
            <Footer />
        </>
    )
}

