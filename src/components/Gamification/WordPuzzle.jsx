import React, { useState, useRef } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';
import { FaArrowRight, FaEraser, FaArrowLeft, FaCloudDownloadAlt, FaFilePdf } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../../spinner/Spinner';

export default function WordPuzzle() {
    const btnStyle = { backgroundColor: '#FF683B', color: 'white' };
    const cancelStyle = { backgroundColor: '#dc3545', color: 'white' };
    const pdfStyle = { backgroundColor: '#198754', color: 'white' };

    const [formData, setFormData] = useState({ topic: '', numberofword: '', difficulty_level: '' });
    const [apiResponse, setApiResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const contentRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { topic, numberofword, difficulty_level } = formData;

        if (!topic || !numberofword || !difficulty_level) {
            toast.error('Please fill in all required fields.');
            return;
        }

        // Ensure numberofword is between 1 and 10
        if (numberofword < 1 || numberofword > 10) {
            toast.warn('The number of words must be between 1 and 10.');
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('topic', topic);
        formDataToSend.append('numberofword', numberofword);
        formDataToSend.append('difficulty_level', difficulty_level);

        setIsLoading(true);

        try {
            const response = await axios.post('https://teachertools-api.chimpvine.com/word_puzzle', formDataToSend, {
                headers: { 'Content-Type': 'application/json' },
            });
            setApiResponse(response.data);
            setFormData({ topic: '', numberofword: '', difficulty_level: '' });
            toast.success('Word Puzzle generated successfully!');
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to generate the Word Puzzle. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const generatePdf = (showAnswers, showHeader) => {
        const answerDivs = document.querySelectorAll('.answer');
        const headerContent = document.getElementById('headerContent');

        answerDivs.forEach(div => {
            div.style.display = showAnswers ? 'block' : 'none';
        });

        if (headerContent) {
            headerContent.style.display = showHeader ? 'none' : 'block';
        }

        window.print();

        answerDivs.forEach(div => {
            div.style.display = '';
        });

        if (headerContent) {
            headerContent.style.display = '';
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
                                    <h4 className="text-center mb-3">Word Puzzle Generator</h4>
                                    <div className="mb-2">
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
                                            placeholder="Enter Word Puzzle Topic For eg. Animals,Foods"
                                        />

                                        <label htmlFor="numberofword" className="form-label">
                                            Number of Words <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control form-control-sm mb-2"
                                            id="numberofword"
                                            name="numberofword"
                                            value={formData.numberofword}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                            placeholder="For example: 5"
                                        />

                                        <label htmlFor="difficulty_level" className="form-label">
                                            Difficulty Level <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <select
                                            className="form-select form-select-sm mb-2"
                                            id="difficulty_level"
                                            name="difficulty_level"
                                            value={formData.difficulty_level}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                        >
                                            <option value="">Select Difficulty Level</option>
                                            <option value="easy">Easy</option>
                                            <option value="medium">Medium</option>
                                            <option value="hard">Hard</option>
                                        </select>
                                    </div>

                                    <div className="d-flex justify-content-between mt-3">
                                        <button type="submit" className="btn btn-sm" style={btnStyle} disabled={isLoading}>
                                            Generate <FaArrowRight />
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-sm"
                                            style={cancelStyle}
                                            onClick={() => setFormData({ topic: '', numberofword: '', difficulty_level: '' })}
                                            disabled={isLoading}
                                        >
                                            <FaEraser /> Reset
                                        </button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="mt-3 text-center" id="main-btn">
                                {renderWordPuzzle(apiResponse)}
                                <button className="btn btn-sm mt-2 mb-3 me-2 no-print" style={btnStyle} onClick={() => setApiResponse(null)}>
                                    <FaArrowLeft /> Generate Another Word Puzzle
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-sm mt-2 mb-3 me-2 no-print"
                                    style={pdfStyle}
                                    onClick={() => generatePdf(false, false)}
                                >
                                    <FaCloudDownloadAlt /> Download Questions
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-sm mt-2 mb-3 me-2 no-print"
                                    style={pdfStyle}
                                    onClick={() => generatePdf(true, false)}
                                >
                                    <FaFilePdf /> Download Answers
                                </button>
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    );
}

const renderWordPuzzle = (wordPuzzleData) => {
    const nameStyle = {
        display: "inline-block",
        width: "200px",
        height: "1px",
        backgroundColor: "black",
        borderBottom: "1px solid black",
    };

    const dateStyle = {
        display: "inline-block",
        width: "100px",
        height: "1px",
        backgroundColor: "black",
        borderBottom: "1px solid black",
    };

    const hintStyle = { color: "#e91e63" };
    const hintbgStyle = { backgroundColor: "#fff176", padding: "5px", borderRadius: "5px", fontSize: "14px" };
    const wordStyle = { fontSize: "18px", fontWeight: "normal" };
    const headingStyle = { color: '#dc3545' };

    return (
        <div className="container-fluid mt-3 mb-2 ps-5 pe-5 print-content">
            <div id="headerContent" className='mt-4'>
                <div className="d-flex justify-content-center mt-3">
                    <h2 className='mb-5'>Your High School Name</h2>
                </div>
                <div className="d-flex justify-content-between mt-5 mb-5">
                    <h5>Name : <span style={nameStyle}></span></h5>
                    <h5 className='me-3'>Date :  <span style={dateStyle}></span></h5>
                </div>
            </div>
            <h5 style={headingStyle}><strong>Guess the Word Puzzle</strong></h5>
            <section className='mb-5'>
                <div className="row">
                    {wordPuzzleData.map((puzzle, index) => (
                        <div key={index} className="col-md-6 mb-4">
                            <div className="p-3 border rounded">
                                <p className="text-center" style={wordStyle}>{puzzle.word_puzzle}</p>
                                <p style={hintbgStyle}>
                                    <strong style={hintStyle}>Hint: </strong> {puzzle.hint}
                                </p>
                                <p className="answer">Correct Answer: <strong>{puzzle.word}</strong></p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};