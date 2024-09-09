import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowRight, FaCloudDownloadAlt, FaFilePdf, FaEdit } from "react-icons/fa";
import Spinner from '../spinner/Spinner';
import MCQSingle from '../pages/MCQSingle';
import MCQMultiple from '../pages/MCQMultiple';
import TFSimple from '../pages/TFSimple';
import FIBSingle from '../pages/FIBSingle';
import FIBMultiple from '../pages/FIBMultiple';
import MatchTermDef from '../pages/MatchTermDef';

export default function WorkSheet() {
    const [selectedQuestionType, setSelectedQuestionType] = useState('');
    const [subOptions, setSubOptions] = useState([]);
    const [formData, setFormData] = useState({
        subject: '',
        grade: '',
        number: '',
        questionType: '',
        subQuestionType: '',
        topic: '',
        pdfFile: null,
    });
    const [apiResponse, setApiResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formVisible, setFormVisible] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    const subjects = [
        { value: "", label: "Choose Subject" },
        { value: "english", label: "English" },
        { value: "math", label: "Math" },
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

    const numbers = [
        { value: "", label: "Choose Number of Questions" },
        { value: "5", label: "5" },
        { value: "10", label: "10" }
    ];

    const questionTypes = [
        { value: "", label: "Choose Question Type" },
        { value: "MCQ", label: "MCQ" },
        { value: "TF_Simple", label: "True and False Statements" },
        { value: "Fill-in-the-Blanks", label: "Fill in the Blanks" },
        { value: "Match_Term_Def", label: "Matching Term and Definition" },
        { value: "Q&A", label: "Question and Answer" },
        { value: "Sequencing", label: "Sequencing" },
        { value: "Problem_Solving", label: "Problem Solving" }
    ];

    const subQuestionTypes = {
        MCQ: [
            { value: "", label: "Choose Sub Question Type" },
            { value: "MCQ_Single", label: "Single Correct Answer" },
            { value: "MCQ_Multiple", label: "Multiple Correct Answer" }
        ],
        "Fill-in-the-Blanks": [
            { value: "", label: "Choose Sub Question Type" },
            { value: "FIB_Single", label: "Single Blank" },
            { value: "FIB_Multiple", label: "Multiple Blank" }
        ],
        "Q&A": [
            { value: "", label: "Choose Sub Question Type" },
            { value: "Short_Answer_List", label: "Short Answer List" },
            { value: "Short_Answer_Explain", label: "Short Answer Brief Explanation" },
            { value: "Long_Answer_Explain", label: "Long Answer Brief Explanation" }
        ]
    };

    const handleQuestionTypeChange = (e) => {
        const selectedType = e.target.value;
        setSelectedQuestionType(selectedType);
        setSubOptions(subQuestionTypes[selectedType] || []);
        setFormData({
            ...formData,
            questionType: selectedType,
            subQuestionType: ''
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            pdfFile: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setFormVisible(false);
        setApiResponse(null);
        setError(null);

        const formPayload = new FormData();
        formPayload.append('subject', formData.subject);
        formPayload.append('grade', formData.grade);
        formPayload.append('number', formData.number);
        formPayload.append('question-type', formData.questionType);
        formPayload.append('sub-question-type', formData.subQuestionType);
        formPayload.append('textarea', formData.topic);
        if (formData.pdfFile) {
            formPayload.append('pdf_file', formData.pdfFile);
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/generate`, formPayload);
            setApiResponse(response.data);
            localStorage.setItem("worksheet", JSON.stringify(response.data));
            toast.success('Worksheet generated successfully!');
            setLoading(false);
        } catch (err) {
            setError('Failed to generate worksheet. Please try again.');
            toast.error('Failed to generate worksheet!');
            setLoading(false);
            setFormVisible(true);
        }
    };

    useEffect(() => {
        const savedWorksheet = localStorage.getItem("worksheet");
        if (savedWorksheet) {
            setApiResponse(JSON.parse(savedWorksheet));
        }
    }, []);

    const handleReset = () => {
        setFormData({
            subject: '',
            grade: '',
            number: '',
            questionType: '',
            subQuestionType: '',
            topic: '',
            pdfFile: null,
        });
        setSubOptions([]);
        setApiResponse(null);
        setError(null);
        setFormVisible(true);
        localStorage.removeItem("worksheet");
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

    const handleEditButtonClick = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleUpdate = () => {
        localStorage.setItem("worksheet", JSON.stringify(apiResponse));
        toast.success('Worksheet updated successfully!');
        closeModal();
    };


    const btnStyle = {
        backgroundColor: '#FF683B',
        color: 'white'
    };

    const gapStyle = {
        marginBottom: '100px',
    };

    const lineStyle = {
        display: "inline-block",
        width: "500px",
        height: "1px",
        backgroundColor: "black",
        borderBottom: "1px solid black",
    };

    const AdditionalStyle = {
        display: "inline-block",
        width: "570px",
        height: "1px",
        backgroundColor: "black",
        borderBottom: "1px solid black",
    };

    return (
        <>
            <NavBar />
            <ToastContainer position="top-right" autoClose={1500} />
            <div className="container-fluid">
                <div className="row justify-content-center mt-3">
                    {loading ? (
                        <div className="col-md-5 text-center">
                            <Spinner />
                        </div>
                    ) : formVisible ? (
                        <div className="col-md-5 border border-4 rounded-3 pt-4 pb-3 ps-5 pe-5 shadow p-3 bg-body rounded">
                            <form onSubmit={handleSubmit}>
                                <h4 className="text-center mb-3">WorkSheet Planner</h4>
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
                                    >
                                        {grades.map((grade, index) => (
                                            <option key={index} value={grade.value}>
                                                {grade.label}
                                            </option>
                                        ))}
                                    </select>

                                    <label htmlFor="number" className="form-label">
                                        Number of Questions <span style={{ color: 'red' }}>*</span>
                                    </label>
                                    <select
                                        className="form-select form-select-sm mb-3"
                                        id="number"
                                        name="number"
                                        value={formData.number}
                                        onChange={handleChange}
                                    >
                                        {numbers.map((number, index) => (
                                            <option key={index} value={number.value}>
                                                {number.label}
                                            </option>
                                        ))}
                                    </select>

                                    <label htmlFor="question-type" className="form-label">
                                        Question Type <span style={{ color: 'red' }}>*</span>
                                    </label>
                                    <select
                                        className="form-select form-select-sm mb-3"
                                        id="question-type"
                                        name="questionType"
                                        value={formData.questionType}
                                        onChange={handleQuestionTypeChange}
                                    >
                                        {questionTypes.map((element, index) => (
                                            <option key={index} value={element.value}>
                                                {element.label}
                                            </option>
                                        ))}
                                    </select>

                                    {subOptions.length > 0 && (
                                        <>
                                            <label htmlFor="sub-question-type" className="form-label">
                                                Sub Question Type <span style={{ color: 'red' }}>*</span>
                                            </label>
                                            <select
                                                className="form-select form-select-sm mb-3"
                                                id="sub-question-type"
                                                name="subQuestionType"
                                                value={formData.subQuestionType}
                                                onChange={handleChange}
                                            >
                                                {subOptions.map((element, index) => (
                                                    <option key={index} value={element.value}>
                                                        {element.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </>
                                    )}

                                    <label htmlFor="textarea" className="form-label">
                                        Your Topic <span style={{ color: 'red' }}>*</span>
                                    </label>
                                    <textarea
                                        type="text"
                                        className="form-control form-control-sm mb-2"
                                        placeholder="Eg. Arithmetic, History, or Lesson number 2"
                                        id="textarea"
                                        name="topic"
                                        value={formData.topic}
                                        onChange={handleChange}
                                    />

                                    <label htmlFor="pdf_file" className="form-label">
                                        File Upload <span style={{ color: 'red' }}>*</span>
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control form-control-sm mb-2"
                                        id="pdf_file"
                                        name="pdf_file"
                                        accept="application/pdf"
                                        onChange={handleFileChange}
                                    />
                                    <p className='text-center' style={{ fontSize: '14px' }}>
                                        <span className='fw-bold' style={{ color: 'red' }}>Note: *</span> For better results, please upload a <label style={{ color: 'red' }}>Workbook</label> PDF.
                                    </p>
                                </div>

                                <div className="d-flex justify-content-between mt-3">
                                    <button
                                        type="submit"
                                        className="btn btn-sm"
                                        style={{ backgroundColor: '#FF683B', color: 'white' }}
                                        disabled={loading}
                                    >
                                        {loading ? 'Generating...' : 'Generate'} <FaArrowRight />
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-sm"
                                        style={{ backgroundColor: '#FF683B', color: 'white' }}
                                        onClick={handleReset}
                                    >
                                        Reset
                                    </button>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className="container-fluid ps-4 pe-4">
                            <div id="headerContent" className='mb-4 mt-3'>
                                <h2 className='text-center'>Your High School Name</h2>
                                <div className="d-flex justify-content-between mt-5 mb-4">
                                    <h5>Name: <span style={{ display: "inline-block", width: "150px", height: "1px", backgroundColor: "black", borderBottom: "1px solid black" }}></span></h5>
                                    <h5>Date: <span style={{ display: "inline-block", width: "150px", height: "1px", backgroundColor: "black", borderBottom: "1px solid black" }}></span></h5>
                                </div>
                                <h5 className='mb-3'>Assigned By: <span style={{ display: "inline-block", width: "150px", height: "1px", backgroundColor: "black", borderBottom: "1px solid black" }}></span></h5>
                            </div>
                            {
                                apiResponse && apiResponse.worksheet && formData.questionType === 'MCQ' && formData.subQuestionType === 'MCQ_Single' && (
                                    <MCQSingle
                                        worksheet={apiResponse.worksheet}
                                        answers={apiResponse.answers}
                                        modalVisible={modalVisible}
                                        handleUpdate={handleUpdate}
                                        setApiResponse={setApiResponse}
                                    />
                                )
                            }
                            {
                                apiResponse && apiResponse.worksheet && formData.questionType === 'MCQ' && formData.subQuestionType === 'MCQ_Multiple' && (
                                    <MCQMultiple
                                        worksheet={apiResponse.worksheet}
                                        answers={apiResponse.answers}
                                        modalVisible={modalVisible}
                                        handleUpdate={handleUpdate}
                                        setApiResponse={setApiResponse}
                                    />
                                )
                            }
                            {
                                apiResponse && apiResponse.worksheet && formData.questionType === 'TF_Simple' && (
                                    <TFSimple
                                        worksheet={apiResponse.worksheet}
                                        answers={apiResponse.answers}
                                        modalVisible={modalVisible}
                                        handleUpdate={handleUpdate}
                                        setApiResponse={setApiResponse}
                                    />
                                )
                            }
                            {
                                apiResponse && apiResponse.worksheet && formData.questionType === 'Fill-in-the-Blanks' && formData.subQuestionType === 'FIB_Single' && (
                                    <FIBSingle
                                        worksheet={apiResponse.worksheet}
                                        answers={apiResponse.worksheet.answers}
                                        modalVisible={modalVisible}
                                        handleUpdate={handleUpdate}
                                        setApiResponse={setApiResponse}
                                    />
                                )
                            }
                            {
                                apiResponse && apiResponse.worksheet && formData.questionType === 'Fill-in-the-Blanks' && formData.subQuestionType === 'FIB_Multiple' && (
                                    <FIBMultiple
                                        worksheet={apiResponse.worksheet}
                                        answers={apiResponse.worksheet.answers}
                                        modalVisible={modalVisible}
                                        handleUpdate={handleUpdate}
                                        setApiResponse={setApiResponse}
                                    />
                                )
                            }
                            {
                                apiResponse && apiResponse.worksheet && formData.questionType === 'Match_Term_Def' && (
                                    <MatchTermDef
                                        worksheet={apiResponse.worksheet}
                                        answers={apiResponse.answers}
                                        modalVisible={modalVisible}
                                        handleUpdate={handleUpdate}
                                        setApiResponse={setApiResponse}
                                    />
                                )
                            }
                            {/* {
                                apiResponse &&
                                apiResponse.worksheet &&
                                formData.questionType === 'Q&A' &&
                                formData.subQuestionType === 'Short_Answer_List' && (
                                    <ShortAnswerList
                                        worksheet={apiResponse.worksheet}
                                        answers={apiResponse.answers}
                                        modalVisible={modalVisible}
                                        handleUpdate={handleUpdate}
                                        setApiResponse={setApiResponse}
                                    />
                                )
                            } */}

                            {/* {apiResponse && apiResponse.worksheet && formData.questionType === 'Q&A' && formData.subQuestionType === 'Short_Answer_List' && (
                                <div>
                                    <h4 className='mb-3'><strong>Short Answer List</strong></h4>
                                    {apiResponse.worksheet.map((item, index) => (
                                        <div className='mb-4' key={index}>
                                            <p className='mb-5'><strong>Question {index + 1}:</strong> {item.question}</p>
                                            <div className='short-answers'>
                                                <label className='mb-5'>
                                                    <strong>
                                                        Answer:
                                                        <span className="ms-2" style={lineStyle}></span>
                                                    </strong>
                                                </label>
                                            </div>
                                            <div className='short-answers-second mb-5'>
                                                <span style={AdditionalStyle}></span>
                                            </div>
                                            <div className='short-answers-third mb-5'>
                                                <span style={AdditionalStyle}></span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )} */}
                            {apiResponse && apiResponse.worksheet && formData.questionType === 'Q&A' && formData.subQuestionType === 'Short_Answer_Explain' && (
                                <div>
                                    <h4 className='mb-5'><strong>Short Answer Explaination</strong></h4>
                                    {apiResponse.worksheet.map((item, index) => (
                                        <div className='mb-4' key={index}>
                                            <p className='mb-5'><strong>Question {index + 1}:</strong> {item.question}</p>
                                            <div className='short-answers'>
                                                <label className='mb-5'>
                                                    <strong>
                                                        Answer:
                                                        <span className="ms-2" style={lineStyle}></span>
                                                    </strong>
                                                </label>
                                            </div>
                                            <div className='short-answers-second mb-5'>
                                                <span style={AdditionalStyle}></span>
                                            </div>
                                            <div className='short-answers-third mb-5'>
                                                <span style={AdditionalStyle}></span>
                                            </div>
                                            <div className='short-answers-fourth mb-5'>
                                                <span style={AdditionalStyle}></span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {apiResponse && apiResponse.worksheet && formData.questionType === 'Q&A' && formData.subQuestionType === 'Long_Answer_Explain' && (
                                <div>
                                    <h4 className='mb-5'><strong>Long Answer Explaination</strong></h4>
                                    {apiResponse.worksheet.map((item, index) => (
                                        <div className='mb-4' key={index}>
                                            <p className='mb-5'><strong>Question {index + 1}:</strong> {item.question}</p>
                                            <div className='short-answers'>
                                                <label className='mb-5'>
                                                    <strong>
                                                        Answer:
                                                        <span className="ms-2" style={lineStyle}></span>
                                                    </strong>
                                                </label>
                                            </div>
                                            <div className='short-answers-second mb-5'>
                                                <span style={AdditionalStyle}></span>
                                            </div>
                                            <div className='short-answers-third mb-5'>
                                                <span style={AdditionalStyle}></span>
                                            </div>
                                            <div className='short-answers-fourth mb-5'>
                                                <span style={AdditionalStyle}></span>
                                            </div>
                                            <div className='short-answers-fifth mb-5'>
                                                <span style={AdditionalStyle}></span>
                                            </div>
                                            <div className='short-answers-six mb-5'>
                                                <span style={AdditionalStyle}></span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {apiResponse && apiResponse.worksheet && formData.questionType === 'Sequencing' && formData.subQuestionType === 'Seq_Events' && (
                                <div className='mb-5'>
                                    <h4 className='mb-2'><strong>Sequence Events Order</strong></h4>
                                    {apiResponse.worksheet.map((worksheetItem, index) => (
                                        <div key={index} className='mb-5'>
                                            <p><strong>Question {index + 1}:</strong> {worksheetItem.question}</p>
                                            <div className='mb-5 options'>
                                                <p><strong>Options:</strong></p>
                                                {Object.keys(worksheetItem.options).map((optionKey) => (
                                                    <div key={optionKey}>
                                                        <span><strong>{optionKey}.</strong> {worksheetItem.options[optionKey]}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className='mb-5'>
                                                <strong>Answers:</strong>
                                            </div>
                                            <p className='answer mb-5'>
                                                <strong>Correct Answers:</strong>
                                                {apiResponse.answers[index].map((answer, answerIndex) => (
                                                    <span key={answerIndex} className='mb-5 ms-2'>
                                                        {answer}
                                                    </span>
                                                ))}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {apiResponse && apiResponse.worksheet && formData.questionType === 'Problem_Solving' && formData.subQuestionType === 'PS_Math' && (
                                <div className='mb-5'>
                                    <h4 className='mb-2'><strong>Mathematical Problems</strong></h4>
                                    {apiResponse.worksheet.map((item, index) => (
                                        <div key={index}>
                                            <p><strong>Question {index + 1}:</strong> {item.question}</p>
                                            <p className='mb-5' >
                                                <strong className='mb-5'>Answers:</strong>
                                            </p>
                                            <label style={gapStyle}></label>
                                            <p className='answer mb-5'>
                                                <strong>Correct Answer:</strong> {apiResponse.answers[index]}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <div className="d-flex justify-content-center">
                                <button
                                    type="button"
                                    className="btn btn-sm me-3 mb-3 no-print"
                                    style={btnStyle}
                                    onClick={handleReset}>
                                    Generate New Worksheet
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-sm btn-warning me-3 mb-3 no-print"
                                    onClick={handleEditButtonClick}
                                >
                                    <FaEdit /> Edit WorkSheet
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-sm me-3 mb-3 no-print"
                                    style={btnStyle}
                                    onClick={() => generatePdf(false, false)}
                                >
                                    <FaCloudDownloadAlt /> Download Questions
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-sm mb-3 no-print"
                                    style={btnStyle}
                                    onClick={() => generatePdf(true, true)}
                                >
                                    <FaFilePdf /> Download Answers
                                </button>
                            </div>
                        </div>
                    )}
                    {error && (
                        <div className="alert alert-danger mt-3" role="alert">
                            {error}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
