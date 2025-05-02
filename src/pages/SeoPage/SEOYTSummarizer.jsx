import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from '../../components/NavBar'
import { NavLink } from 'react-router-dom';
import { FaWpforms, FaLightbulb, FaChartLine, FaHandHoldingUsd, FaUsers, FaBrain, FaShareAlt, FaRegClock, FaRocket, FaAdjust, FaUser } from "react-icons/fa";
import logo from '../../assests/img/body-hero-section.png'
import Footer from '../Footer';
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';
import YTSummarizer from '../../assests/img/yt-summarizer.png'

export default function SEOYTSummarizer() {
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
            title: 'Summary Quality',
            description: 'Context-aware and fluent',
        },
        {
            number: 3,
            title: 'Formatting',
            description: 'Auto-formatted, readable',
        },
        {
            number: 4,
            title: 'Ease of Use',
            description: 'Just paste and go',
        },
        {
            number: 5,
            title: 'Ideal For',
            description: 'Study, blogging, quick review',
        }
    ];

    const timelineTeachers = [
        {
            number: 1,
            title: 'Speed',
            description: 'Requires watching the full video',
        },
        {
            number: 2,
            title: 'Summary Quality',
            description: 'Depends on user’s attention',
        },
        {
            number: 3,
            title: 'Formatting',
            description: 'Needs effort to organize',
        },
        {
            number: 4,
            title: 'Ease of Use',
            description: 'Time-consuming and repetitive',
        },
        {
            number: 5,
            title: 'Ideal For',
            description: 'Personal use only',
        }
    ];

    const AIfeatures = [
        {
            title: 'Speed',
            desc: 'Get clear, human-like summaries without watching the full video — just paste the transcript and go!',
            icon: <FaRegClock size={50} style={{ color: '#4CAF50' }} />,
        },
        {
            title: 'Simplicity',
            desc: 'No need to select a format — the summary is neatly organized and ready to read or share.',
            icon: <FaRocket size={50} style={{ color: '#FF9800' }} />,
        },
        {
            title: 'Efficiency',
            desc: 'Avoid hours of rewatching or skimming long videos — get the gist in seconds.',
            icon: <FaAdjust size={50} style={{ color: '#2196F3 ' }} />,
        },
    ];

    const features = [
        {
            title: 'Time-Saving',
            desc: 'No more sitting through hours of videos to understand the content. Teachers and parents can paste a transcript and get the key points in seconds, ensuring they maximize their time for other important tasks.',
            icon: <FaHandHoldingUsd size={50} style={{ color: '#9747FF' }} />,
        },
        {
            title: 'Efficient Learning',
            desc: 'The tool helps teachers and parents provide students with concise summaries of videos, ensuring they absorb the most critical information quickly — perfect for study sessions or prepping for exams.',
            icon: <FaUsers size={50} style={{ color: '#28A745' }} />,
        },
        {
            title: 'Easy to Share',
            desc: 'Once you have your summary, it’s easy to share with students, co-teachers, or other parents — whether digitally or in printed form.',
            icon: <FaUser size={50} style={{ color: '#28A745' }} />,
        }
    ];

    return (
        <>
            <Helmet>
                <title>About YouTube Summarizer - AI Tools for Teachers</title>
                <meta
                    name="description"
                    content="Summarize any YouTube video in just a few clicks with our AI YouTube Video Summarizer. Get key points, along with insights from any youtube video with ease! "
                />
                <meta name="keywords" content="Youtube Video Summarizer, youtube video summarizer free, youtube video summarizer ai, youtube summary with chatgpt, video summary generator free summarize video to text, youtube summarizer without transcript, video summarizer ai free, youtube summarizer 
                " />
            </Helmet>
            <NavBar />
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">YouTube Summarizer</h3>
                <div className="col-md-8 mx-auto">
                    <p className="mt-3 text-muted paraStyle">
                        Cut through the noise and get straight to the key takeaways with the <span className='fw-bold'>AI YouTube Video Summarizer.</span> This tool transforms long video transcripts into clear, concise summaries — helping you save time, study smarter, or repurpose content with ease.
                        Ideal for students, content creators, educators, and professionals who need quick insights from tutorials, lectures, interviews, or reviews without having to rewatch the entire video.
                    </p>
                </div>
                <div className="col-md-10 col-lg-8 mx-auto mt-4">
                    <img
                        src={YTSummarizer}
                        alt="YT-Summarizer"
                        className="image-style img-fluid"
                    />
                </div>
                {user ? (
                    <NavLink
                        className="btn btn-md mt-3 me-2"
                        style={btnStyle}
                        to="/yt-summarizer"
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
                        <h6 className="step-title mt-3 fw-bold">Customize Youtube Transcript </h6>
                        <p className="step-description text-muted">
                            Copy the full transcript of any YouTube video and paste it into the tool.
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
                        <h6 className="step-title mt-3 fw-bold">Summarizer Transcript</h6>
                        <p className="step-description text-muted">
                            Click 'Generate' to create a well-structured summary based on your preferences.
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
                        <h6 className="step-title mt-3 fw-bold">View Youtube Summary</h6>
                        <p className="step-description text-muted">
                            Get a clean, readable summary in natural language.
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
                        <h4 className="fw-bold text-danger mb-4">Why Use the YouTube Summarizer?</h4>
                        <div className="timeline-step mb-4">
                            <div className="circle red">1</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Time-Efficient</h5>
                                <p className="text-muted">Summarizes lengthy videos in seconds so you can focus on what matters.</p>
                            </div>
                        </div>

                        <div className="timeline-step mb-4">
                            <div className="circle orange">2</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Smart & Contextual</h5>
                                <p className="text-muted">Understands the flow of the video to generate meaningful summaries — not just random highlights.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-step">
                            <div className="circle purple">3</div>
                            <div className="timeline-content">
                                <h5 className="fw-bold mb-1">Versatile Applications</h5>
                                <p className="text-muted">Perfect for turning YouTube lectures into study notes, summarizing podcast episodes, or transforming content into blog-friendly text.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 text-center">
                <h3 className="mb-3 fw-bold">Why Teachers and Parents Use the YouTube Summarizer?</h3>
                <div className="col-md-8 mx-auto mb-4">
                    <p className="mt-3 text-muted paraStyle">
                        For teachers and parents, managing time effectively is crucial, especially when it comes to reviewing educational content or helping students study. The <span className='fw-bold'>AI YouTube Summarizer</span> offers a quick solution for both groups, allowing them to extract key points from educational videos without having to watch the entire video. Teachers use this tool to review long tutorial videos, lectures, or educational podcasts, quickly turning them into accessible study materials for their students.Parents, on the other hand, can use the summarizer to assist their children with school projects or learn from instructional videos at home, without the need to sit through long videos. It ensures that both teachers and parents can focus on what matters, making learning and content review more efficient.
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
                <h3 className="fw-bold mb-5 text-center">How Does YouTube Summarizer Compare ?</h3>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="timeline-step d-flex align-items-center mb-5">
                            <div className="circle blue me-3 d-flex align-items-center justify-content-center">
                                <FaBrain size={25} />
                            </div>
                            <div className="timeline-content">
                                <h4 className="fw-bold mb-1">YouTube Summarizer</h4>
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
                <h3 className="mb-3 fw-bold">Why Choose the AI YouTube Summarizer?</h3>
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
                    The <span className='fw-bold'>AI YouTube Video Summarizer</span> is an essential tool for teachers and parents looking to streamline the process of reviewing, teaching, and learning from YouTube content, saving time and enhancing educational outcomes with minimal effort.
                </p>
            </div>
            <Footer />
        </>
    )
}
