import React from 'react'
import NavBar from './NavBar'
import { NavLink } from 'react-router-dom'
import { FaQuestionCircle, FaBookReader, FaReadme, FaReceipt } from "react-icons/fa";

export default function MainPlanner() {
    return (
        <>
            <NavBar />
            <div className="container text-center">
                <h4 className="mt-2 pt-5">Choose any of the following ?</h4>
                <div className="row mt-4 justify-content-center">
                    <div className="col-md-3 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <FaQuestionCircle size={50} className="bounce mb-3 mt-3" style={{color:"#0d6efd"}}/>
                                <h5 className="card-title mb-5 fw-bold">Quiz Generator</h5>
                                <p className="card-text mt-5 mb-5">Create tailored, interactive quizzes effortlessly with our Quiz Generator.</p>
                                <hr/>
                                <NavLink className="btn btn-outline-primary" to="/quiz-generator">
                                    Go to Quiz Generator
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <FaBookReader size={50} className="bounce mb-3 mt-3" style={{color:"#198754"}}/>
                                <h5 className="card-title mb-5 fw-bold">Lesson Planner</h5>
                                <p className="card-text mb-5">Organize and plan your lessons effectively with our Lesson Planner.</p>
                                <hr/>
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
                                <hr/>
                                <NavLink className="btn btn-outline-dark" to="/workbook">
                                    Go to Workbook Planner
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <FaReceipt size={50} className="bounce mb-3 mt-3"style={{color:"#dc3545"}}/>
                                <h5 className="card-title mb-5 fw-bold">Worksheet Planner</h5>
                                <p className="card-text mb-5">Easily create and customize worksheets for your students with our Worksheet Planner.</p>
                                <hr/>
                                <NavLink className="btn btn-outline-danger" to="/worksheet">
                                    Go to Worksheet Planner
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
