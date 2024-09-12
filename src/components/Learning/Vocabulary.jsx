import React, { useState, useRef } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';
import { FaArrowRight, FaEraser, FaArrowLeft } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../../spinner/Spinner';

const subjects = [
    { value: "", label: "Choose Subject" },
    { value: "english", label: "English" },
    { value: "mathematics", label: "Mathematics" },
    { value: "science", label: "Science" },
    { value: "social_studies", label: "Social Studies" },
    { value: "reading", label: "Reading" },
    { value: "writing", label: "Writing" },
    { value: "art", label: "Art" },
    { value: "music", label: "Music" },
    { value: "physical_education", label: "Physical Education" },
    { value: "health", label: "Health" },
    { value: "technology", label: "Technology" },
    { value: "library", label: "Library" },
    { value: "foreign_language", label: "Foreign Language" }
];

const grades = [
    { value: "", label: "Choose Grade" },
    { value: "k", label: "Kindergarten" },
    { value: "1", label: "1st Grade" },
    { value: "2", label: "2nd Grade" },
    { value: "3", label: "3rd Grade" },
    { value: "4", label: "4th Grade" },
    { value: "5", label: "5th Grade" },
    { value: "6", label: "6th Grade" },
    { value: "7", label: "7th Grade" },
    { value: "8", label: "8th Grade" },
    { value: "9", label: "9th Grade" },
    { value: "10", label: "10th Grade" },
    { value: "11", label: "11th Grade" },
    { value: "12", label: "12th Grade" }
];

const difficultyLevels = [
    { value: "", label: "Choose Difficulty Level" },
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
];

export default function LessonPlan() {
    const btnStyle = { backgroundColor: '#FF683B', color: 'white' };
    const cancelStyle = { backgroundColor: '#dc3545', color: 'white' };

    const [formData, setFormData] = useState({
        subject: '',
        grade: '',
        difficultyLevel: '',
        topic: '',
        numberOfWords: ''
    });

    const [apiResponse, setApiResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const contentRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { subject, grade, difficultyLevel, topic, numberOfWords } = formData;

        if (!subject || !grade || !difficultyLevel || !topic) {
            toast.error('Please fill in all required fields.');
            return;
        }

        const formDataToSend = {
            subject,
            grade,
            difficultyLevel,
            topic,
            numberOfWords
        };

        setIsLoading(true);

        try {
            const response = await axios.post(`${import.meta.env.VITE_YARN_URL}/generate_lesson_plan`, formDataToSend, {
                headers: { 'Content-Type': 'application/json' },
            });
            setApiResponse(response.data);
            setFormData({
                subject: '',
                grade: '',
                difficultyLevel: '',
                topic: '',
                numberOfWords: ''
            });
            toast.success('Lesson plan generated successfully!');
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to generate the lesson plan. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <NavBar id="main-nav" />
            <ToastContainer position="top-right" autoClose={1500} />
            <div className="container-fluid">
                <div className="row justify-content-center mt-5">
                    {isLoading ? (
                        <div className="col-md-5 text-center">
                            <Spinner />
                        </div>
                    ) : (
                        !apiResponse ? (
                            <div className="col-md-5 border border-4 rounded-3 pt-4 pb-3 ps-5 pe-5 shadow p-3 bg-body rounded no-print">
                                <form onSubmit={handleSubmit}>
                                    <h4 className="text-center mb-3">Vocabulary Generator</h4>
                                    <div className="mb-2">
                                        <label htmlFor="subject" className="form-label">
                                            Subject <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <select
                                            className="form-select form-select-sm mb-3"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                        >
                                            {subjects.map((element, index) => (
                                                <option key={index} value={element.value}>
                                                    {element.label}
                                                </option>
                                            ))}
                                        </select>

                                        <label htmlFor="grade" className="form-label">
                                            Grade <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <select
                                            className="form-select form-select-sm mb-3"
                                            id="grade"
                                            name="grade"
                                            value={formData.grade}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                        >
                                            {grades.map((grade, index) => (
                                                <option key={index} value={grade.value}>
                                                    {grade.label}
                                                </option>
                                            ))}
                                        </select>

                                        <label htmlFor="difficultyLevel" className="form-label">
                                            Difficulty Level <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <select
                                            className="form-select form-select-sm mb-3"
                                            id="difficultyLevel"
                                            name="difficultyLevel"
                                            value={formData.difficultyLevel}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                        >
                                            {difficultyLevels.map((level, index) => (
                                                <option key={index} value={level.value}>
                                                    {level.label}
                                                </option>
                                            ))}
                                        </select>

                                        <label htmlFor="topic" className="form-label">
                                            Topic <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm mb-2"
                                            id="topic"
                                            name="topic"
                                            value={formData.topic}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                            placeholder="Enter Vocabulary Topic"
                                        />

                                        <label htmlFor="numberOfWords" className="form-label">
                                            Number of Words 
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control form-control-sm mb-2"
                                            id="numberOfWords"
                                            name="numberOfWords"
                                            value={formData.numberOfWords}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                            placeholder="E.g. 5"
                                        />
                                    </div>

                                    <div className="d-flex justify-content-between mt-3">
                                        <button type="submit" className="btn btn-sm" style={btnStyle} disabled={isLoading}>
                                            Generate <FaArrowRight />
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-sm"
                                            style={cancelStyle}
                                            onClick={() => setFormData({
                                                subject: '',
                                                grade: '',
                                                difficultyLevel: '',
                                                topic: '',
                                                numberOfWords: ''
                                            })}
                                            disabled={isLoading}
                                        >
                                            <FaEraser /> Reset
                                        </button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="mt-3" ref={contentRef} id="main-btn">
                                {renderLessonPlan(apiResponse)}
                                <button className="btn btn-sm mt-2 mb-3 me-2 no-print" style={btnStyle} onClick={() => setApiResponse(null)}>
                                    <FaArrowLeft /> Generate Another Vocabulary
                                </button>
                                <button className="btn btn-sm mt-2 mb-3 no-print" style={pdfStyle} onClick={handlePrint}>
                                    Download PDF
                                </button>
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    );
}

const renderLessonPlan = (lessonPlan) => {
    return (
        <div className="container-fluid mt-3 mb-2 ps-5 pe-5 print-content">
            <div className='mt-4'>
                <div className="d-flex justify-content-center mt-3">
                    <h2 className='mb-5'>Your High School Name</h2>
                </div>
                <div className="d-flex justify-content-between mt-5 mb-5">
                    <h5>Name : <span style={nameStyle}></span></h5>
                    <h5 className='me-3'>Date :  <span style={dateStyle}></span></h5>
                </div>
            </div>
        </div>
    );
};
