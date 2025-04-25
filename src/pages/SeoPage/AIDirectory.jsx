import React, { useEffect, useState } from 'react';
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

export default function AIDirectory() {
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
            description: 'Quickly create fun and interactive challenges with our Make the Word Generator.',
            link: '/make-the-word',
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
            link: '/sat-maths',
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
            link: '/yt-summarizer',
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
            description: 'Create fun, engaging math activities that captivate and simplify complex concepts.',
            link: '/fun-maths',
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
            link: '/bingo-generator',
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
            link: '/mystery-case',
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
            link: '/teacher-joke',
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
            description: 'Easily create and customize worksheets for your students with our Worksheet Planner.',
            link: '/worksheet-planner',
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
            link: '/tongue-twister',
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
            link: '/word-puzzle',
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
            link: '/slide-generator',
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
            link: '/text-summarizer',
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
            link: '/sel-generator',
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
                return (
                    <div className="mt-3 text-muted">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr className="table-info">
                                        <th>AI Tool</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="fw-bold">Lesson Planner</td>
                                        <td>Plan and organize lessons easily with our intuitive and efficient Lesson Planner.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Workbook Planner</td>
                                        <td>Design comprehensive workbooks for your students with our Workbook Planner.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Worksheet Planner</td>
                                        <td>Easily create and customize worksheets for your students with our Worksheet Planner.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Vocabulary Builder</td>
                                        <td>Easily craft personalized and dynamic vocabulary lists with our intuitive Vocabulary Builder.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Tongue Twister</td>
                                        <td>Easily craft personalized and challenging tongue twisters with our intuitive Tongue Twister.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Word Puzzle</td>
                                        <td>Easily create engaging and interactive word puzzles with our intuitive Word Puzzle.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Slide Generator</td>
                                        <td>Create stunning, engaging slides that captivate and deliver your message clearly.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Group Work</td>
                                        <td>Effortlessly collaborate and manage tasks with ease using our Group Work Organizer.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Quiz Generator</td>
                                        <td>Effortlessly create customized and interactive quizzes with our easy-to-use Quiz Generator.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Social Story</td>
                                        <td>Create engaging, personalized stories for “special” students with our intuitive tool.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Text Summarizer</td>
                                        <td>Effortlessly produce clear and concise text summaries with our Text Summarizer.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">SEL Generator</td>
                                        <td>Masterfully curate holistic and engaging SEL content for deep, meaningful learning.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Make the Word</td>
                                        <td>Quickly create fun and interactive challenges with our Make the Word Generator.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">SAT Maths</td>
                                        <td>Master math concepts with clear, engaging lessons to boost your SAT score.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">YouTube Summarizer</td>
                                        <td>Effortlessly create clear and concise video summaries with our YouTube Summarizer.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Fun Math</td>
                                        <td>Create fun, engaging math activities that captivate and simplify complex concepts.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Bingo Card</td>
                                        <td>Effortlessly design fun and interactive custom games with our Bingo Card Generator.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Mystery Case</td>
                                        <td>Create intriguing mystery cases that captivate and challenge your investigative skills.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Teacher Joke</td>
                                        <td>Effortlessly craft clever teacher jokes that spark laughter and make learning fun.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Rubric Generator</td>
                                        <td>Easily design personalized and detailed rubrics with our intuitive Rubric Generator.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Comprehension</td>
                                        <td>Easily design personalized and detailed assessments with our intuitive Comprehension.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Cross Word Puzzle</td>
                                        <td>Create engaging crossword puzzles that challenge and sharpen your mind.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">SAT English</td>
                                        <td>Create clear, engaging SAT English lessons that captivate and boost performance.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">YouTube Q&amp;A</td>
                                        <td>Effortlessly craft dynamic and custom assessments with our YouTube Q&amp;A Generator.</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">PDF Summarizer</td>
                                        <td>Effortlessly create clear and concise document summaries with our PDF Summarizer.</td>
                                    </tr>

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
                        <NavLink to="/ai-tools-for-teachers">
                            <button className="btn btn-md mt-3 me-2" style={btnStyle}>
                                Go to AI Tools
                            </button>
                        </NavLink>
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

