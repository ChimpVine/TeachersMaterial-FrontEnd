import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaQuestionCircle, FaBookReader, FaReadme, FaReceipt } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './NavBar';

export default function MainPlanner() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const mystyle = { color: 'red' };
    const btnStyle = { backgroundColor: '#FF683B', color: 'white' };
    const txtStyle = { color: "#5928E5" };

    // Check authentication status on component mount
    useEffect(() => {
        const authStatus = localStorage.getItem('isAuthenticated');
        if (authStatus === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    const authenticateUser = (e) => {
        e.preventDefault();

        // Simple validation for empty fields
        if (username.trim() === '' || password.trim() === '') {
            toast.error('Username and password cannot be empty.');
            return;
        }

        // Authentication logic
        if (username === 'buzzfond' && password === '9u2OkgnU7PjDIAP') {
            localStorage.setItem('isAuthenticated', 'true'); // Save login state
            setIsAuthenticated(true);
        } else {
            toast.error('Failed credentials. Please try again.');
        }
    };

    const handleCancel = () => {
        // Clear the username and password fields
        setUsername('');
        setPassword('');
    };

    return (
        <div>
            {!isAuthenticated ? (
                <>
                    <NavBar />
                    <div className="container mt-5">
                        <div className="row justify-content-center">
                            <div className="col-md-5 border border-4 rounded-3 pt-4 pb-3 ps-5 pe-5 shadow p-3 bg-body rounded">
                                <h4 className="text-center mb-4 mt-3" style={txtStyle}>ChimpVine Teacher Materials</h4>
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Username <span style={mystyle}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                        <label className="form-label">Password <span style={mystyle}>*</span></label>
                                        <input
                                            type="password"
                                            className="form-control form-control-sm"
                                            value={password}
                                            autoComplete="off"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </form>
                                <div className="d-flex justify-content-between mb-4">
                                    <button
                                        className="btn btn-sm"
                                        onClick={authenticateUser}
                                        style={btnStyle}
                                    >
                                        Log In
                                    </button>
                                    <button
                                        className="btn btn-sm"
                                        onClick={handleCancel}
                                        style={btnStyle}
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ToastContainer position="top-right" autoClose={1500} />
                    </div>
                </>
            ) : (
                <>
                    <NavBar />
                    <div className="container text-center">
                        <h4 className="mt-2 pt-5">Choose any of the following ?</h4>
                        <div className="row mt-4 justify-content-center">
                            <div className="col-md-3 mt-3">
                                <div className="card">
                                    <div className="card-body">
                                        <FaQuestionCircle size={50} className="bounce mb-3 mt-3" style={{ color: "#0d6efd" }} />
                                        <h5 className="card-title mb-5 fw-bold">Quiz Generator</h5>
                                        <p className="card-text mt-5 mb-5">Effortlessly create customized and interactive quizzes with our easy-to-use Quiz Generator.</p>
                                        <hr />
                                        <NavLink className="btn btn-outline-primary" to="/quiz-generator">
                                            Go to Quiz Generator
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-3">
                                <div className="card">
                                    <div className="card-body">
                                        <FaBookReader size={50} className="bounce mb-3 mt-3" style={{ color: "#198754" }} />
                                        <h5 className="card-title mb-5 fw-bold">Lesson Planner</h5>
                                        <p className="card-text mb-5">Plan and organize your lessons effectively with our easy-to-use Lesson Planner.</p>
                                        <hr />
                                        <NavLink className="btn btn-outline-success" to="/LessonPlanner">
                                            Go to Lesson Planner
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-3">
                                <div className="card">
                                    <div className="card-body">
                                        <FaReadme size={50} className="bounce mb-3 mt-3" />
                                        <h5 className="card-title mb-5 fw-bold">Workbook Planner</h5>
                                        <p className="card-text mb-5">Design comprehensive workbooks for your students with our Workbook Planner.</p>
                                        <hr />
                                        <NavLink className="btn btn-outline-dark" to="/workbook">
                                            Go to Workbook Planner
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-3">
                                <div className="card">
                                    <div className="card-body">
                                        <FaReceipt size={50} className="bounce mb-3 mt-3" style={{ color: "#dc3545" }} />
                                        <h5 className="card-title mb-5 fw-bold">Worksheet Planner</h5>
                                        <p className="card-text mb-5">Easily create and customize worksheets for your students with our Worksheet Planner.</p>
                                        <hr />
                                        <NavLink className="btn btn-outline-danger" to="/worksheet">
                                            Go to Worksheet Planner
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
