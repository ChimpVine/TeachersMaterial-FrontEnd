import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from '../../components/NavBar'
import { NavLink } from 'react-router-dom';
import { FaWpforms, FaLightbulb, FaChartLine, FaHandHoldingUsd, FaUsers, FaBrain, FaShareAlt, FaRegClock, FaRocket, FaAdjust, FaUser } from "react-icons/fa";
import logo from '../../assests/img/body-hero-section.png'
import Footer from '../Footer';
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';
import TongueTwister from '../../assests/img/tongue-twister.png'

export default function SEOTongueTwister() {

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
            title: 'Educational Value',
            description: 'Contextualized and topic-based',
        },
        {
            number: 3,
            title: 'Creativity & Variety',
            description: 'Generates multiple fresh versions',
        },
        {
            number: 4,
            title: 'Phonetic Focus',
            description: 'Alliteration and rhythm included',
        },
        {
            number: 5,
            title: 'Output Format',
            description: 'Downloadable PDF',
        }
    ];

    const timelineTeachers = [
        {
            number: 1,
            title: 'Speed',
            description: 'Time-consuming writing process',
        },
        {
            number: 2,
            title: 'Educational Value',
            description: 'May lack subject relevance',
        },
        {
            number: 3,
            title: 'Creativity & Variety',
            description: 'Requires creative effort',
        },
        {
            number: 4,
            title: 'Phonetic Focus',
            description: 'Needs deliberate wordplay',
        },
        {
            number: 5,
            title: 'Output Format',
            description: 'Usually typed or handwritten',
        }
    ];

    const AIfeatures = [
        {
            title: 'Custom-built',
            desc: 'Custom-built for any topic or subject area.',
            icon: <FaRegClock size={50} style={{ color: '#4CAF50' }} />,
        },
        {
            title: 'Improves pronunciation',
            desc: 'Improves pronunciation, fluency, and confidence in speaking.',
            icon: <FaRocket size={50} style={{ color: '#FF9800' }} />,
        },
        {
            title: 'Encourages student participation',
            desc: 'Encourages student participation through fun challenges.',
            icon: <FaAdjust size={50} style={{ color: '#2196F3 ' }} />,
        },
    ];

    const features = [
        {
            title: 'Phonemic Practice Made Fun',
            desc: 'Tongue twisters are a proven method to improve pronunciation and articulation. This tool combines phonetic repetition with academic vocabulary, helping students strengthen their speech skills in a lively and engaging way.',
            icon: <FaHandHoldingUsd size={50} style={{ color: '#9747FF' }} />,
        },
        {
            title: 'Instant Engagement',
            desc: 'Laughter is a powerful learning motivator. Our generator creates funny, topic-based twisters that serve as excellent warm-ups, energizers, or end-of-class rewards—turning every subject into a game students love.',
            icon: <FaUsers size={50} style={{ color: '#28A745' }} />,
        },
        {
            title: 'Creative Learning Support',
            desc: 'From ESL learners to young readers, the tool supports creative expression while building language fluency. Its unique, subject-themed twist encourages both linguistic and cognitive development.',
            icon: <FaUser size={50} style={{ color: '#28A745' }} />,
        }
    ];

    return (
        <>
            <Helmet>
                <title>About Tongue Twister Generator - AI Tools for Teachers</title>
                <meta
                    name="description"
                    content="Unleash gamified education with AI Tongue Twister Generator. Incorporate tongue twister for students to make learning exciting and interesting in the classroom. Help students practice pronunciation in a fun manner with the AI Tongue Twister."
                />
                <meta name="keywords" content="tongue twister generator, tongue twister generator hard, tongue twister generator for kids, tongue twister generator for students, tongue twister generator funny
                tongue twisters, make your own tongue twister, tongue twister generator for adults, short tongue twister generator, tongue twister generator ai, tongue twister generator for kids
                " />
            </Helmet>
            <NavBar />
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">Tongue Twister Generator</h3>
                <div className="col-md-8 mx-auto">
                    <p className="mt-3 text-muted paraStyle">
                        The <span className='fw-bold'>AI Tongue Twister Generator</span> adds a burst of fun to any lesson! Instantly create engaging, educational tongue twisters based on your chosen topic. This tool blends phonetic repetition with subject-specific vocabulary, making learning playful and memorable — perfect for classroom icebreakers, language drills, or gamified learning. Ideal for teachers, speech therapists, ESL instructors, and anyone looking to spark creativity and laughter in the classroom!
                    </p>
                </div>
                <div className="col-md-10 col-lg-8 mx-auto mt-4">
                    <img
                        src={TongueTwister}
                        alt="tonguetwister-generator"
                        className="image-style img-fluid"
                    />
                </div>
                {user ? (
                    <NavLink
                        className="btn btn-md mt-3 me-2"
                        style={btnStyle}
                        to="/tongue-twister"
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
                        <h6 className="step-title mt-3 fw-bold">Customize Tongue Twister Generator</h6>
                        <p className="step-description text-muted">
                            Enter learning topic and Select the Number of Twisters to generate your Tongue Twister.
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
                        <h6 className="step-title mt-3 fw-bold">Generate Tongue Twister</h6>
                        <p className="step-description text-muted">
                            Click 'generate' to create a Tongue Twister based on your preferences.
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
                        <h6 className="step-title mt-3 fw-bold">View the Tongue Twister</h6>
                        <p className="step-description text-muted">
                            Instantly receive a list of topic-themed tongue twisters.
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
                        <h4 className="fw-bold text-danger mb-4">Why Our Tongue Twister Generator?</h4>
                        <div className="timeline-step mb-4">
                            <div className="circle red">1</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">
                                    Boosts Phonemic Awareness
                                </h5>
                                <p className="text-muted">
                                    Helps students recognize and pronounce sounds clearly while tying them to academic vocabulary.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-step mb-4">
                            <div className="circle orange">2</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Fun & Engaging</h5>
                                <p className="text-muted">
                                    Brings laughter into learning — perfect for classroom energizers, speech warmups, and memory retention.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-step">
                            <div className="circle purple">3</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Editable & Printable</h5>
                                <p className="text-muted">
                                    Once generated, the twisters can be edited before sharing or saved as a printable PDF for students.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">Why Should Teachers and Parents Use Our Tongue Twister Generator?</h3>
                <div className="col-md-8 mx-auto mb-4">
                    <p className="mt-3 text-muted paraStyle">
                        Bringing fun into learning is one of the most effective ways to boost engagement and retention—and our AI Tongue Twister Generator does exactly that. Whether you're a teacher aiming to energize your classroom, a parent looking for interactive language activities, or a speech therapist working on articulation, this tool turns any lesson into a delightful, educational challenge.By transforming complex concepts into playful wordplay, students practice pronunciation, strengthen vocabulary, and develop fluency—all while having fun. The AI Tongue Twister Generator offers a creative, gamified way to reinforce classroom topics and support language development across all age groups.
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
                <h3 className="fw-bold mb-5 text-center">How Does the Tongue Twister Generator Compare?</h3>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="timeline-step d-flex align-items-center mb-5">
                            <div className="circle blue me-3 d-flex align-items-center justify-content-center">
                                <FaBrain size={25} />
                            </div>
                            <div className="timeline-content">
                                <h4 className="fw-bold mb-1">AI Tongue Twister Generator</h4>
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
                <h3 className="mb-3 fw-bold">Why Choose the Tongue Twister Generator?</h3>
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
                <p className="text-muted paraStyle">
                    Whether you're teaching grammar, history, or science, this tool transforms learning into a giggly, educational game your students won’t forget.
                </p>
            </div>
            <Footer />
        </>
    )
}
