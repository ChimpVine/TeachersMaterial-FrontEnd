import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaQuestionCircle, FaBookReader, FaReadme, FaReceipt } from "react-icons/fa";
import NavBar from './NavBar';
import ReactGA from 'react-ga4';

export default function MainPlanner() {

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

    return (
        <div>
            <NavBar />
            <div className="container text-center">
                <h4 className="mt-2 pt-5">Choose any of the following?</h4>
                <div className="row mt-4 justify-content-center">
                    {/* Quiz Generator Card */}
                    <div className="col-md-3 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <FaQuestionCircle size={50} className="bounce mb-3 mt-3" style={{ color: "#0d6efd" }} />
                                <h5 className="card-title mb-5 fw-bold">Quiz Generator</h5>
                                <p className="card-text mt-5 mb-5">Effortlessly create customized and interactive quizzes with our easy-to-use Quiz Generator.</p>
                                <hr />
                                <NavLink className="btn btn-outline-primary" to="/quiz-generator" onClick={() => trackButtonClick('Quiz Generator')}>
                                    Go to Quiz Generator
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    
                    {/* Lesson Planner Card */}
                    <div className="col-md-3 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <FaBookReader size={50} className="bounce mb-3 mt-3" style={{ color: "#198754" }} />
                                <h5 className="card-title mb-5 fw-bold">Lesson Planner</h5>
                                <p className="card-text mb-5">Plan and organize your lessons effectively with our easy-to-use Lesson Planner.</p>
                                <hr />
                                <NavLink className="btn btn-outline-success" to="/LessonPlanner" onClick={() => trackButtonClick('Lesson Planner')}>
                                    Go to Lesson Planner
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    {/* Workbook Planner Card */}
                    <div className="col-md-3 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <FaReadme size={50} className="bounce mb-3 mt-3" />
                                <h5 className="card-title mb-5 fw-bold">Workbook Planner</h5>
                                <p className="card-text mb-5">Design comprehensive workbooks for your students with our Workbook Planner.</p>
                                <hr />
                                <NavLink className="btn btn-outline-dark" to="/workbook" onClick={() => trackButtonClick('Workbook Planner')}>
                                    Go to Workbook Planner
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    {/* Worksheet Planner Card */}
                    <div className="col-md-3 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <FaReceipt size={50} className="bounce mb-3 mt-3" style={{ color: "#dc3545" }} />
                                <h5 className="card-title mb-5 fw-bold">Worksheet Planner</h5>
                                <p className="card-text mb-5">Easily create and customize worksheets for your students with our Worksheet Planner.</p>
                                <hr />
                                <NavLink className="btn btn-outline-danger" to="/worksheet" onClick={() => trackButtonClick('Worksheet Planner')}>
                                    Go to Worksheet Planner
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
