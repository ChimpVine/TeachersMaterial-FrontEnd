import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PopupWidget  } from "react-calendly";
import {
    FaQuestionCircle,
    FaBookReader,
    FaReadme,
    FaReceipt,
    FaBook,
    FaGrinTongueSquint,
    FaPuzzlePiece,
    FaTasks,
    FaBookOpen,
    FaYoutubeSquare,
    FaUsers,
    FaTenge,
    FaFilePdf,
    FaThLarge,
    FaQuestion,
    FaRegSmileBeam 
} from "react-icons/fa";
import { BiMath } from "react-icons/bi";
import NavBar from './NavBar';
import ReactGA from 'react-ga4';

export default function MainPlanner() {
    const [activeTab, setActiveTab] = useState('All'); // State to track the active tab

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }, []);

    // Function to track button clicks (event tracking)
    const trackButtonClick = (label) => {
        ReactGA.event({
            category: 'Button Click',
            action: 'Click on Planner',
            label: label
        });
    };

    // Function to handle tab click
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const cards = [
        {
            id: 1,
            category: 'Assessment',
            icon: <FaQuestionCircle size={50} style={{ color: "#0d6efd" }} />,
            title: 'Quiz Generator',
            description: 'Effortlessly create customized and interactive quizzes with our easy-to-use Quiz Generator.',
            link: '/Quiz-generator',
            btnColor: 'primary'
        },
        {
            id: 2,
            category: 'Planner',
            icon: <FaBookOpen  size={50} style={{ color: "#198754" }} />,
            title: 'Lesson Planner',
            description: 'Plan and organize your lessons effectively with our easy-to-use Lesson Planner.',
            link: '/LessonPlanner',
            btnColor: 'success'
        },
        {
            id: 3,
            category: 'Assessment',
            icon: <FaReadme size={50} />,
            title: 'Workbook Planner',
            description: 'Design comprehensive workbooks for your students with our Workbook Planner.',
            link: '/Workbook',
            btnColor: 'dark'
        },
        {
            id: 4,
            category: 'Assessment',
            icon: <FaReceipt size={50} style={{ color: "#dc3545" }} />,
            title: 'Worksheet Planner',
            description: 'Easily create and customize worksheets for your students with our Worksheet Planner.',
            link: '/Worksheet',
            btnColor: 'danger'
        },
        {
            id: 5,
            category: 'Learning',
            icon: <FaBook size={50} style={{ color: "#6c757d" }} />,
            title: 'Vocabulary Builder',
            description: 'Easily craft personalized and dynamic vocabulary lists with our intuitive Vocabulary Builder.',
            link: '/Vocabulary',
            btnColor: 'secondary'
        },
        {
            id: 6,
            category: 'Gamification',
            icon: <FaGrinTongueSquint size={50} style={{ color: "#0d6efd" }} />,
            title: 'Tongue Twister',
            description: 'Easily craft personalized and challenging tongue twisters with our intuitive Tongue Twister.',
            link: '/TongueTwister',
            btnColor: 'primary'
        },
        {
            id: 7,
            category: 'Gamification',
            icon: <FaPuzzlePiece size={50} />,
            title: 'Word Puzzle',
            description: 'Easily create engaging and interactive word puzzles with our intuitive Word Puzzle.',
            link: '/WordPuzzle',
            btnColor: 'dark'
        },
        {
            id: 8,
            category: 'Planner',
            icon: <FaTasks size={50} style={{ color: "#dc3545" }}/>,
            title: 'Rubric Generator',
            description: 'Easily design personalized and detailed rubrics with our intuitive Rubric Generator.',
            link: '/Comingsoon',
            btnColor: 'danger'
        },
        {
            id: 9,
            category: 'Assessment',
            icon: <FaBookReader  size={50} style={{ color: "#198754" }} />,
            title: 'Comprehension',
            description: 'Easily design personalized and detailed assessments with our intuitive Comprehension.',
            link: '/Comingsoon',
            btnColor: 'success'
        },
        {
            id: 10,
            category: 'Specialneeds',
            icon: <FaBook size={50} style={{ color: "#198754" }} />,
            title: 'Social Story',
            description: 'Easily design personalized and engaging assessments with our intuitive Social Story.',
            link: '/SocialStory',
            btnColor: 'success'
        },
        {
            id: 11,
            category: 'Summarizer',
            icon: <FaYoutubeSquare size={50} style={{ color: "#dc3545" }} />,
            title: 'YouTube Summarizer',
            description: 'Effortlessly create clear and concise video summaries with our YouTube Summarizer.',
            link: '/YTSummarizer',
            btnColor: 'danger'
        },
        {
            id: 12,
            category: 'Summarizer',
            icon: <FaYoutubeSquare size={50} style={{ color: "#dc3545" }} />,
            title: 'YouTube Q&A',
            description: 'Effortlessly craft dynamic and custom assessments with our YouTube Q&A Generator.',
            link: '/Comingsoon',
            btnColor: 'danger'
        },
        {
            id: 13,
            category: 'Assessment',
            icon: <FaUsers size={50} style={{ color: "#6c757d" }} />,
            title: 'Group Work',
            description: 'Effortlessly create quick and concise video summaries with our YouTube Summarizer.',
            link: '/Comingsoon',
            btnColor: 'secondary'
        },
        {
            id: 14,
            category: 'Summarizer',
            icon: <FaTenge size={50} />,
            title: 'Text Summarizer',
            description: 'Effortlessly produce clear and concise text summaries with our Text Summarizer.',
            link: '/Comingsoon',
            btnColor: 'dark'
        },
        {
            id: 15,
            category: 'Summarizer',
            icon: <FaFilePdf size={50} style={{ color: "#6c757d" }} />,
            title: 'PDF Summarizer',
            description: 'Effortlessly create clear and concise document summaries with our PDF Summarizer.',
            link: '/Comingsoon',
            btnColor: 'secondary'
        },
        {
            id: 16,
            category: 'Gamification',
            icon: <FaThLarge size={50} style={{ color: "#6c757d" }} />,
            title: 'Guess the Word',
            description: 'Quickly create fun and interactive challenges with our Guess the Word Generator.',
            link: '/Comingsoon',
            btnColor: 'secondary'
        },
        {
            id: 17,
            category: 'Gamification',
            icon: <FaQuestion size={50} style={{ color: "#dc3545" }} />,
            title: 'Bingo Card',
            description: 'Effortlessly design fun and interactive custom games with our Bingo Card Generator.',
            link: '/Comingsoon',
            btnColor: 'danger'
        },
        {
            id: 18,
            category: 'Learning',
            icon: <BiMath size={50} />,
            title: 'Vedic Math',
            description: 'Effortlessly create engaging and powerful Vedic Math summaries with precision.',
            link: '/Comingsoon',
            btnColor: 'dark'
        },
        {
            id: 19,
            category: 'Planner',
            icon: <FaRegSmileBeam  size={50} style={{ color: "#0d6efd" }}/>,
            title: 'SEL Generator',
            description: 'Masterfully curate holistic and engaging SEL content for deep, meaningful learning.',
            link: '/SelGenerator',
            btnColor: 'primary'
        }
    ];

    // Filter cards based on the active tab
    const filteredCards = cards.filter(card => activeTab === 'All' || card.category === activeTab);

    return (
        <div>
            <PopupWidget
                url="https://calendly.com/vj--npe0/15min/?month=2024-09"
                rootElement={document.getElementById("root")}
                text="Make an appointment"
                textColor="#ffffff"
                color="#FF683B"
            />
            <NavBar />
            <div className="container py-5">
                {/* Navigation Pills */}
                <div className="d-flex justify-content-center">
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item me-2">
                            <button
                                className={`nav-link ${activeTab === 'All' ? 'active' : ''}`}
                                onClick={() => handleTabClick('All')}
                            >
                                All
                            </button>
                        </li>
                        <li className="nav-item me-2">
                            <button
                                className={`nav-link ${activeTab === 'Assessment' ? 'active' : ''}`}
                                onClick={() => handleTabClick('Assessment')}
                            >
                                Assessment
                            </button>
                        </li>
                        <li className="nav-item me-2">
                            <button
                                className={`nav-link ${activeTab === 'Summarizer' ? 'active' : ''}`}
                                onClick={() => handleTabClick('Summarizer')}
                            >
                                Summarizer
                            </button>
                        </li>
                        <li className="nav-item me-2">
                            <button
                                className={`nav-link ${activeTab === 'Gamification' ? 'active' : ''}`}
                                onClick={() => handleTabClick('Gamification')}
                            >
                                Gamification
                            </button>
                        </li>
                        <li className="nav-item me-2">
                            <button
                                className={`nav-link ${activeTab === 'Planner' ? 'active' : ''}`}
                                onClick={() => handleTabClick('Planner')}
                            >
                                Planner
                            </button>
                        </li>
                        <li className="nav-item me-2">
                            <button
                                className={`nav-link ${activeTab === 'Learning' ? 'active' : ''}`}
                                onClick={() => handleTabClick('Learning')}
                            >
                                Learning
                            </button>
                        </li> <li className="nav-item me-2">
                            <button
                                className={`nav-link ${activeTab === 'Specialneeds' ? 'active' : ''}`}
                                onClick={() => handleTabClick('Specialneeds')}
                            >
                                Special needs
                            </button>
                        </li>
                    </ul>
                </div>
                <hr />
                {/* Card Grid */}
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 py-5">
                    {filteredCards.map((card) => (
                        <div className="col" key={card.id}>
                            <div className="d-flex">
                                <div className='card'>
                                    <div className="card-body text-center">
                                        {card.icon}
                                        <h5 className="fw-bold mt-3 mb-3">{card.title}</h5>
                                        <p className='mb-2'>{card.description}</p>
                                        <hr />
                                        <NavLink className={`btn btn-outline-${card.btnColor}`} to={card.link} onClick={() => trackButtonClick(card.title)}>
                                            Go to {card.title}
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
