import React, { useEffect, useState, useContext } from 'react';
import NavBar from '../../components/NavBar';
import logo from '../../assests/img/ChimpVine-UI.png';
import { NavLink } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { Helmet } from 'react-helmet-async';
import {
    FaReceipt, FaGrinTongueSquint, FaPuzzlePiece,
    FaYoutubeSquare, FaTenge, FaThLarge, FaQuestion,
    FaRegSmileBeam, FaFilePowerpoint
} from "react-icons/fa";
import { FaRegFaceLaughSquint, FaArrowTrendUp } from "react-icons/fa6";
import { TbMathSymbols, TbZoomQuestion } from "react-icons/tb";
import { PiMathOperationsFill } from "react-icons/pi";
import Footer from '../Footer';
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';

export default function AIDirectory() {

    const { user } = useContext(UserContext);

    const handleAIToolsClick = () => {
        if (!user) {
            toast.warning("Login to access AI Tools");
        }
    };

    const [activeTab, setActiveTab] = useState('Popular AI Teacher Tools');

    useEffect(() => {
        ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
    }, []);

    const tabs = [
        'Popular AI Teacher Tools',
        'New AI Teacher Tools',
        'Explore AI Teacher Tools',
    ];

    const textStyle = { color: '#8F47D7' };
    const paraStyle = { textAlign: 'justify' };
    const btnStyle = { backgroundColor: '#FF683B', color: 'white' };

    const cards = [
        {
            id: 1,
            icon: (
                <div className="position-relative">
                    <FaThLarge size={50} style={{ color: "#6c757d" }} />
                    <span className="badge rounded-pill bg-primary position-absolute top-0 end-0">New</span>
                </div>
            ),
            title: 'Make the Word',
            description: 'Quickly create fun and interactive challenges with our Word Generator.',
            link: '/about-make-the-word',
        },
        {
            id: 2,
            icon: (
                <div className="position-relative">
                    <TbMathSymbols size={50} />
                    <span className="badge rounded-pill bg-primary position-absolute top-0 end-0">New</span>
                </div>
            ),
            title: 'SAT Maths',
            description: 'Master math concepts with clear, engaging lessons to boost your SAT score.',
            link: '/about-sat-maths',
        },
        {
            id: 3,
            icon: (
                <div className="position-relative">
                    <FaYoutubeSquare size={50} style={{ color: "#dc3545" }} />
                    <span className="badge rounded-pill bg-primary position-absolute top-0 end-0">New</span>
                </div>
            ),
            title: 'YouTube Summarizer',
            description: 'Effortlessly create clear and concise video summaries with our YouTube Summarizer.',
            link: '/about-yt-summarizer',
        },
        {
            id: 4,
            icon: (
                <div className="position-relative">
                    <PiMathOperationsFill size={50} style={{ color: "#6c757d" }} />
                    <span className="badge rounded-pill bg-primary position-absolute top-0 end-0">New</span>
                </div>
            ),
            title: 'Fun Math',
            description: 'Create fun, engaging math activities that captivate learners and simplify complex concepts.',
            link: '/about-fun-math',
        },
        {
            id: 5,
            icon: (
                <div className="position-relative">
                    <FaQuestion size={50} style={{ color: "#dc3545" }} />
                    <span className="badge rounded-pill bg-primary position-absolute top-0 end-0">New</span>
                </div>
            ),
            title: 'Bingo Card',
            description: 'Effortlessly design fun and interactive custom games with our Bingo Card Generator.',
            link: '/about-bingo-generator',
        },
        {
            id: 6,
            icon: (
                <div className="position-relative">
                    <TbZoomQuestion size={50} />
                    <span className="badge rounded-pill bg-primary position-absolute top-0 end-0">New</span>
                </div>
            ),
            title: 'Mystery Case',
            description: 'Create intriguing mystery cases that captivate and challenge your investigative skills.',
            link: '/about-mystery-case',
        },
        {
            id: 7,
            icon: (
                <div className="position-relative">
                    <FaRegFaceLaughSquint size={50} style={{ color: "#0d6efd" }} />
                    <span className="badge rounded-pill bg-primary position-absolute top-0 end-0">New</span>
                </div>
            ),
            title: 'Teacher Joke',
            description: 'Effortlessly craft clever teacher jokes that spark laughter and make learning fun.',
            link: '/about-teacher-joke',
        }
    ];

    const popular_cards = [
        {
            id: 1,
            icon: (
                <div className="position-relative">
                    <FaReceipt size={50} style={{ color: "#dc3545" }} />
                    <span className="badge rounded-pill bg-success position-absolute top-0 end-0">Popular</span>
                </div>
            ),
            title: 'Worksheet Planner',
            description: 'Easily create and customize engaging worksheets for your students with our Worksheet Planner.',
            link: '/about-worksheet-planner',
        },
        {
            id: 2,
            icon: (
                <div className="position-relative">
                    <FaGrinTongueSquint size={50} style={{ color: "#0d6efd" }} />
                    <span className="badge rounded-pill bg-success position-absolute top-0 end-0">Popular</span>
                </div>
            ),
            title: 'Tongue Twister',
            description: 'Easily craft personalized and challenging tongue twisters with our intuitive Tongue Twister.',
            link: '/about-tongue-twister',
        },
        {
            id: 3,
            icon: (
                <div className="position-relative">
                    <FaPuzzlePiece size={50} />
                    <span className="badge rounded-pill bg-success position-absolute top-0 end-0">Popular</span>
                </div>
            ),
            title: 'Word Puzzle',
            description: 'Easily create engaging and interactive word puzzles with our intuitive Word Puzzle.',
            link: '/about-word-puzzle',
        },
        {
            id: 4,
            icon: (
                <div className="position-relative">
                    <FaFilePowerpoint size={50} style={{ color: "#dc3545" }} />
                    <span className="badge rounded-pill bg-success position-absolute top-0 end-0">Popular</span>
                </div>
            ),
            title: 'Slide Generator',
            description: 'Create stunning, engaging slides that captivate and deliver your message clearly.',
            link: '/about-slide-generator',
        },
        {
            id: 5,
            icon: (
                <div className="position-relative">
                    <FaTenge size={50} />
                    <span className="badge rounded-pill bg-success position-absolute top-0 end-0">Popular</span>
                </div>
            ),
            title: 'Text Summarizer',
            description: 'Effortlessly produce clear and concise text summaries with our Text Summarizer.',
            link: '/about-text-summarizer',
        },
        {
            id: 6,
            icon: (
                <div className="position-relative">
                    <FaRegSmileBeam size={50} style={{ color: "#0d6efd" }} />
                    <span className="badge rounded-pill bg-success position-absolute top-0 end-0">Popular</span>
                </div>
            ),
            title: 'SEL Generator',
            description: 'Masterfully curate holistic and engaging SEL content for deep, meaningful learning.',
            link: '/about-sel-generator',
        }
    ];

    const trackButtonClick = (title) => {
        ReactGA.event({
            category: 'AI Tool',
            action: 'Clicked',
            label: title,
        });
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'New AI Teacher Tools':
                return (
                    <div className="row mt-4">
                        {cards.map((card) => (
                            <div className="col-12 col-md-6 col-lg-4 mb-4" key={card.id}>
                                <div className="card-body d-flex flex-column justify-content-between text-center p-4">
                                    <div>
                                        <div className="mb-3">{card.icon}</div>
                                        <h5 className="fw-bold mb-3">{card.title}</h5>
                                        <p className="text-muted">{card.description}</p>
                                    </div>
                                    <div className="mt-2">
                                        <NavLink
                                            className={`d-flex align-items-center justify-content-center gap-2`}
                                            to={card.link}
                                            onClick={() => trackButtonClick(card.title)}
                                        >
                                            <span>Read More</span>
                                            <FaArrowTrendUp />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'Popular AI Teacher Tools':
                return (
                    <div className="row mt-4">
                        {popular_cards.map((card) => (
                            <div className="col-12 col-md-6 col-lg-4 mb-4" key={card.id}>
                                <div className="">
                                    <div className="card-body d-flex flex-column justify-content-between text-center p-4">
                                        <div>
                                            <div className="mb-3">{card.icon}</div>
                                            <h5 className="fw-bold mb-3">{card.title}</h5>
                                            <p className="text-muted">{card.description}</p>
                                        </div>
                                        <div className="mt-2">
                                            <NavLink
                                                className={`d-flex align-items-center justify-content-center gap-2`}
                                                to={card.link}
                                                onClick={() => trackButtonClick(card.title)}
                                            >
                                                <span>Read More</span>
                                                <FaArrowTrendUp />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'Explore AI Teacher Tools':
                const exploreTools = [

                    // Assessment Tools
                    { category: 'Assessment', title: 'Group Work', description: 'Effortlessly collaborate and manage tasks with ease using our Group Work Organizer.', link: '/about-group-work' },
                    { category: 'Assessment', title: 'Quiz Generator', description: 'Effortlessly create customized and interactive quizzes with our easy-to-use Quiz Generator.', link: '/about-quiz-generator' },
                    { category: 'Assessment', title: 'SAT Maths', description: 'Master math concepts with clear, engaging lessons to boost your SAT score.', link: '/about-sat-maths' },
                    { category: 'Assessment', title: 'Workbook Planner', description: 'Design comprehensive workbooks for your students with our Workbook Planner.', link: '/about-workbook-planner' },
                    { category: 'Assessment', title: 'Worksheet Planner', description: 'Easily create and customize worksheets for your students with our Worksheet Planner.', link: '/about-worksheet-planner' },

                    // Summarizer Tools
                    { category: 'Summarizer', title: 'Text Summarizer', description: 'Effortlessly produce clear and concise text summaries with our Text Summarizer.', link: '/about-text-summarizer' },
                    { category: 'Summarizer', title: 'YouTube Summarizer', description: 'Effortlessly create clear and concise video summaries with our YouTube Summarizer.', link: '/about-yt-summarizer' },

                    // Gamification Tools
                    { category: 'Gamification', title: 'Bingo Card', description: 'Effortlessly design fun and interactive custom games with our Bingo Card Generator.', link: '/about-bingo-generator' },
                    { category: 'Gamification', title: 'Fun Math', description: 'Create fun, engaging math activities that captivate and simplify complex concepts.', link: '/about-fun-math' },
                    { category: 'Gamification', title: 'Make the Word', description: 'Quickly create fun and interactive challenges with our Make the Word Generator.', link: '/about-make-the-word' },
                    { category: 'Gamification', title: 'Mystery Case', description: 'Create intriguing mystery cases that captivate and challenge your investigative skills.', link: '/about-mystery-case' },
                    { category: 'Gamification', title: 'Teacher Joke', description: 'Effortlessly craft clever teacher jokes that spark laughter and make learning fun.', link: '/about-teacher-joke' },
                    { category: 'Gamification', title: 'Tongue Twister', description: 'Easily craft personalized and challenging tongue twisters with our intuitive Tongue Twister.', link: '/about-tongue-twister' },
                    { category: 'Gamification', title: 'Word Puzzle', description: 'Easily create engaging and interactive word puzzles with our intuitive Word Puzzle.', link: '/about-word-puzzle' },

                    // Planner Tools
                    { category: 'Planner', title: 'Lesson Planner', description: 'Plan and organize lessons easily with our intuitive and efficient Lesson Planner.', link: '/about-lesson-planner' },
                    { category: 'Planner', title: 'SEL Generator', description: 'Masterfully curate holistic and engaging SEL content for deep, meaningful learning.', link: '/about-sel-generator' },
                    { category: 'Planner', title: 'Slide Generator', description: 'Create stunning, engaging slides that captivate and deliver your message clearly.', link: '/about-slide-generator' },

                    // Learning Tool
                    { category: 'Learning', title: 'Vocabulary Builder', description: 'Easily craft personalized and dynamic vocabulary lists with our intuitive Vocabulary Builder.', link: '/about-vocabulary-builder' },

                    

                    // Special Needs Tool
                    { category: 'Special Needs', title: 'Social Story', description: 'Create engaging, personalized stories for “special” students with our intuitive tool.', link: '/about-social-story' },
                ];
                return (
                    <div className="mt-3 text-muted">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr className="table-info">
                                        <th>Category</th>
                                        <th>AI Tool</th>
                                        <th>Description</th>
                                        <th>Try It Now</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {exploreTools.map(tool => (
                                        <tr key={tool.title}>
                                            <td className="fw-bold">{tool.category}</td>
                                            <td className="fw-bold">{tool.title}</td>
                                            <td>{tool.description}</td>
                                            <td>
                                                <NavLink
                                                    to={tool.link}
                                                    className="text-decoration-none d-flex align-items-center"
                                                    onClick={() => trackButtonClick(tool.title)}
                                                >
                                                    <span className="me-1">Read More</span>
                                                    <FaArrowTrendUp />
                                                </NavLink>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <Helmet>
                <title>AI Directory - AI Tools for Teachers</title>
                <meta
                    name="description"
                    content="Browse our comprehensive AI Directory for educators. Discover cutting-edge AI tools designed to simplify lesson planning, automate grading, create interactive content, and enhance classroom experiences through personalized learning."
                />
                <meta
                    name="keywords"
                    content="AI teaching tools, AI tools for education, AI for teachers, lesson planning AI, AI grading tools, classroom automation, education technology, teacher productivity AI, interactive learning AI, personalized education tools, AI for schools, AI-powered teaching, digital classroom tools, smart teaching aids, AI directory for educators"
                />
            </Helmet>
            <NavBar />
            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-md-5 mt-4">
                        <header className="header">
                            <h5 className="mb-2 fw-bold" style={textStyle}>AI Directory</h5>
                            <h2 className="fw-bold">Discover AI tools that simplify teaching and boost engagement.</h2>
                        </header>
                        <p className="mt-3 text-muted" style={paraStyle}>
                            Enhance your teaching experience with cutting-edge AI-powered tools that are built to save you time, tailor learning experiences to individual student needs, and keep your classroom more engaged than ever. From instantly grading assignments to generating customized lesson plans and creating interactive, dynamic content—these tools take care of the routine so you can focus on inspiring minds.
                        </p>
                        {user ? (
                            <NavLink
                                className="btn btn-md mt-3 me-2"
                                style={btnStyle}
                                to="/ai-tools-for-teachers"
                            >
                                Go to AI Tools
                            </NavLink>
                        ) : (
                            <button
                                className="btn btn-md mt-3 me-2"
                                style={btnStyle}
                                onClick={handleAIToolsClick}
                            >
                                Go to AI Tools
                            </button>
                        )}
                    </div>
                    <div className="col-md-7 mt-4 d-flex justify-content-center">
                        <img src={logo} alt="AI Tools" className="img-fluid w-50" />
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <ul className="nav mt-4 d-flex justify-content-center justify-content-lg-start flex-wrap">
                    {tabs.map((tab, index) => (
                        <li className="nav-item me-5 mb-3" key={index}>
                            <button
                                className={`btn btn-md btn-tab ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        </li>
                    ))}
                </ul>

                {renderTabContent()}
            </div>
            <Footer />
        </>
    );
}

