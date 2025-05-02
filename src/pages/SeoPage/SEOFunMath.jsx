import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from '../../components/NavBar'
import { NavLink } from 'react-router-dom';
import { FaWpforms, FaLightbulb, FaChartLine, FaHandHoldingUsd, FaUsers, FaBrain, FaShareAlt, FaRegClock, FaRocket, FaAdjust, FaUser } from "react-icons/fa";
import logo from '../../assests/img/body-hero-section.png'
import Footer from '../Footer';
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';
import FunMath from '../../assests/img/fun-math.png'

export default function SEOFunMath() {
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
            description: 'High – based on student interests',
        },
        {
            number: 2,
            title: 'Personalization',
            description: 'Fully tailored to your class',
        },
        {
            number: 3,
            title: 'Curriculum Integration',
            description: 'Built-in math standards',
        },
        {
            number: 4,
            title: 'Time Investment',
            description: 'Instant generation',
        },
        {
            number: 5,
            title: 'Creativity Boost',
            description: 'Yes! Imaginative & interactive',
        }
    ];

    const timelineTeachers = [
        {
            number: 1,
            title: 'Engagement Level',
            description: 'Often repetitive and generic',
        },
        {
            number: 2,
            title: 'Personalization',
            description: 'One-size-fits-all',
        },
        {
            number: 3,
            title: 'Curriculum Integration',
            description: 'May require manual alignment',
        },
        {
            number: 4,
            title: 'Time Investment',
            description: 'Prep-heavy',
        },
        {
            number: 5,
            title: 'Creativity Boost',
            description: 'Limited to printed content',
        }
    ];

    const AIfeatures = [
        {
            title: 'Engagement',
            desc: 'Makes math fun by tying lessons to student interests.',
            icon: <FaRegClock size={50} style={{ color: '#4CAF50' }} />,
        },
        {
            title: 'Smart Teaching',
            desc: 'Boosts lesson engagement without adding planning stress.',
            icon: <FaRocket size={50} style={{ color: '#FF9800' }} />,
        },
        {
            title: 'Clear and Simple',
            desc: 'Helps students understand math through real-world and imaginative scenarios.',
            icon: <FaAdjust size={50} style={{ color: '#2196F3 ' }} />,
        },
    ];

    const features = [
        {
            title: 'Saves Time',
            desc: 'Teachers and parents no longer need to spend hours searching for creative activities. The generator provides new, exciting activity ideas instantly, making lesson planning faster and easier.',
            icon: <FaHandHoldingUsd size={50} style={{ color: '#9747FF' }} />,
        },
        {
            title: 'Personalized Learning',
            desc: 'Every activity is tailored to match students unique interests, which makes the content more relatable and engaging, helping them connect emotionally with math.',
            icon: <FaUsers size={50} style={{ color: '#28A745' }} />,
        },
        {
            title: 'Easy to Use',
            desc: 'It’s simple to generate activities in seconds, without needing to manually design or align content to meet the curriculum requirements. Teachers and parents can spend more time teaching and less time planning.',
            icon: <FaUser size={50} style={{ color: '#28A745' }} />,
        }
    ];

    return (
        <>
            <Helmet>
                <title>About Fun Math Generator - AI Tools for Teachers</title>
                <meta
                    name="description"
                    content="Make students fall in love with math with our AI Fun Math Activities Generator! Create fun math activities for classroom to help students enjoy learning math."
                />
                <meta name="keywords" content="fun math activities generator, fun math activities generator free, fun math activities generator pdf, fun math activities generator for adults, math worksheet generator, math worksheet generator ai, math worksheet generator free,, math worksheets grade 5, math worksheets grade 4 
                " />
            </Helmet>
            <NavBar />
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">Fun Math Generator</h3>
                <div className="col-md-8 mx-auto">
                    <p className="mt-3 text-muted paraStyle">
                        Make math exciting and relatable with the <span className='fw-bold'>AI Fun Math Generator</span> — a creative tool designed to blend curriculum topics with your students’ personal interests. Generate engaging, age-appropriate math activities in seconds that spark curiosity and boost understanding.Perfect for teachers, homeschoolers, tutors, and parents who want to make math feel more like play — and less like a chore.
                    </p>
                </div>
                <div className="col-md-10 col-lg-8 mx-auto mt-4">
                    <img
                        src={FunMath}
                        alt="Fun-Math"
                        className="image-style img-fluid"
                    />
                </div>
                {user ? (
                    <NavLink
                        className="btn btn-md mt-3 me-2"
                        style={btnStyle}
                        to="/fun-maths"
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
                        <h6 className="step-title mt-3 fw-bold">Customize Fun Math</h6>
                        <p className="step-description text-muted">
                            Choose a grade, enter a math topic, and interest.
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
                        <h6 className="step-title mt-3 fw-bold">Generate Fun Math</h6>
                        <p className="step-description text-muted">
                            Click 'Generate' to create a customized, interest-based math activity based on your preferences.
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
                        <h6 className="step-title mt-3 fw-bold">View Fun Math</h6>
                        <p className="step-description text-muted">
                            Print or save the activity for your Fun Math.
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
                                <h5 className="fw-bold mb-1">Personalized Learning</h5>
                                <p className="text-muted">Every activity is based on your students’ interests, helping them connect emotionally with math concepts.</p>
                            </div>
                        </div>

                        <div className="timeline-step mb-4">
                            <div className="circle orange">2</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Curriculum-Aligned</h5>
                                <p className="text-muted">All activities are designed to reinforce grade-level standards and math objectives — while keeping things exciting.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-step">
                            <div className="circle purple">3</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Versatile Use</h5>
                                <p className="text-muted">Perfect for warm-ups, centers, homework, rainy day math fun, or even enrichment time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">Why Teachers and Parents Use the Fun Math Generator?</h3>
                <div className="col-md-8 mx-auto mb-4">
                    <p className="mt-3 text-muted paraStyle">
                        Teachers and parents use the <span className='fw-bold'>AI Fun Math Generator</span> because it transforms traditional math lessons into interactive, engaging experiences that students actually look forward to. Teachers love how easy it is to create personalized, curriculum-aligned activities that connect with their students’ interests. This approach makes learning math feel less like a task and more like a fun challenge.Parents also use the generator to supplement learning at home, creating enjoyable math activities that reinforce school concepts in ways their children find exciting. The ability to integrate interests like sports, music, or video games into math lessons helps keep kids motivated and makes learning feel relevant to their everyday lives.
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
                <h3 className="fw-bold mb-5 text-center">How Does Fun Math Generator Compare ?</h3>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="timeline-step d-flex align-items-center mb-5">
                            <div className="circle blue me-3 d-flex align-items-center justify-content-center">
                                <FaBrain size={25} />
                            </div>
                            <div className="timeline-content">
                                <h4 className="fw-bold mb-1">Fun Math Generator</h4>
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
                <h3 className="mb-3 fw-bold">Why Choose the Fun Math Activities Generator?</h3>
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
