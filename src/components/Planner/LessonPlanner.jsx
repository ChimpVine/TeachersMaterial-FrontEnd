import { useState, useRef } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';
import { FaArrowRight, FaRegFilePdf, FaEraser, FaArrowLeft, FaFilePdf, FaEdit, FaCut } from "react-icons/fa";
import { toast } from 'react-toastify';
import Spinner from '../../spinner/Spinner';
import { NavLink } from 'react-router-dom';
import NavBreadcrumb from '../../pages/BreadCrumb/BreadCrumb';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const subjects = [
    { value: "", label: "Choose a Subject" },
    { value: "english", label: "English" },
    { value: "mathematics", label: "Mathematics" },
    { value: "science", label: "Science" },
    { value: "social_studies", label: "Social Studies" },
    { value: "art", label: "Art" },
    { value: "music", label: "Music" },
    { value: "physical_education", label: "Physical Education" },
    { value: "health", label: "Health" },
    { value: "technology", label: "Technology" },
    { value: "language", label: "Language" }
];

const grades = [
    { value: "", label: "Choose a Grade" },
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

const lessonDurations = [
    { value: "", label: "Choose the Duration" },
    { value: "15 minutes", label: "15 minutes" },
    { value: "30 minutes", label: "30 minutes" },
    { value: "45 minutes", label: "45 minutes" },
    { value: "1 hour", label: "1 hour" },
    { value: "1 hour 15 minutes", label: "1 hour 15 minutes" },
    { value: "1 hour 30 minutes", label: "1 hour 30 minutes" },
    { value: "1 hour 45 minutes", label: "1 hour 45 minutes" },
    { value: "2 hours", label: "2 hours" },
    { value: "2 hours 15 minutes", label: "2 hours 15 minutes" },
    { value: "2 hours 30 minutes", label: "2 hours 30 minutes" },
    { value: "2 hours 45 minutes", label: "2 hours 45 minutes" },
    { value: "3 hours", label: "3 hours" }
];

export default function LessonPlan({ BASE_URL }) {

    const navigate = useNavigate();

    const btnStyle = {
        backgroundColor: '#FF683B',
        color: 'white',
    };

    const cancelStyle = {
        backgroundColor: '#dc3545',
        color: 'white',
    }

    const pdfStyle = {
        backgroundColor: '#198754',
        color: 'white',
    }

    const breadcrumbItems = [
        { label: 'Main Panel', href: '/ai-tools-for-teachers', active: false },
        { label: 'Planner', href: '/ai-tools-for-teachers?tab=Planner', active: false },
        { label: 'Lesson Planner', active: true }
    ];

    const [formData, setFormData] = useState({
        subject: '',
        grade: '',
        duration: '',
        textarea: '',
        pdf_file: null,
    });

    const [apiResponse, setApiResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [wordCount, setWordCount] = useState(0);
    const contentRef = useRef();

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'textarea') {
            const words = value.trim().split(/\s+/).filter(word => word !== '');
            setWordCount(words.length);
        }

        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleReset = () => {
        setFormData({
            subject: '',
            grade: '',
            duration: '',
            textarea: '',
            pdf_file: null,
        });
        document.getElementById('pdf_file').value = '';
        document.getElementById('textarea').value = '';
        setWordCount(0);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { subject, grade, duration, textarea, pdf_file } = formData;
        const trimmed = textarea.trim();
        const wordCount = trimmed.trim().split(/\s+/).filter(Boolean).length;
        const isValidObjectives =
            wordCount > 0 &&
            wordCount <= 250 &&
            /^[a-zA-Z0-9.,'"’‘“”!?()\-\s]+$/.test(trimmed);

        if (!subject || !grade || !duration || !textarea || !pdf_file) {
            toast.warning('Please fill in all fields.');
            return;
        }

        if (!isValidObjectives) {
            toast.warning("File Description must be 250 words. Only letters, numbers, spaces, and .,'\"-!?() are allowed.");
            return;
        }

        if (pdf_file && pdf_file.size > 500 * 1024) {
            toast.warning('File size exceeds 500KB. Please upload a smaller file.');
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('subject', subject);
        formDataToSend.append('grade', grade);
        formDataToSend.append('duration', duration);
        formDataToSend.append('command', textarea);
        formDataToSend.append('file', pdf_file);

        // Retrieve cookies for headers
        const authToken = Cookies.get('authToken');
        const siteUrl = Cookies.get('site_url');

        setIsLoading(true);

        try {
            const response = await axios.post(`${BASE_URL}/generate_lesson_plan`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${authToken}`,
                    'X-Site-Url': siteUrl
                },
            });
            setApiResponse(response.data);
            setFormData({
                subject: '',
                grade: '',
                duration: '',
                textarea: '',
                pdf_file: null,
            });
            toast.success('Lesson plan generated successfully!');
        } catch (error) {
            setApiResponse(null);

            if (error.response) {
                const data = error.response.data;
                const backendError = data?.error || data?.message || 'Failed to generate Lesson Planner.';
                toast.error(backendError);

                if (error.response.status === 401) {
                    toast.warning('This email has been used on another device. Redirecting to login...');

                    Cookies.remove('authToken');
                    Cookies.remove('site_url');
                    Cookies.remove('Display_name');
                    Cookies.remove('user_email');
                    localStorage.removeItem('authToken');
                    localStorage.removeItem('authUser');

                    setTimeout(() => {
                        navigate('/login');
                        window.location.reload();
                    }, 2000);
                }

            } else if (error.request) {
                toast.error('No response from server. Please check your network connection.');
            } else {
                toast.error(error.message || 'An unexpected error occurred. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            <NavBar id="main-nav" />
            <div className="container-fluid">
                <div className="row justify-content-center mt-5 mb-4">
                    {isLoading ? (
                        <div className="col-md-5 text-center">
                            <Spinner />
                        </div>
                    ) : (
                        !apiResponse ? (
                            <>
                                <NavBreadcrumb items={breadcrumbItems} />
                                <div className="col-md-5 border border-4 rounded-3 pt-4 pb-3 ps-5 pe-5 shadow p-3 bg-body rounded no-print">
                                    <form onSubmit={handleSubmit}>
                                        <h4 className="text-center mb-3">Lesson Planner</h4>
                                        <div className="mb-2">
                                            <label htmlFor="subject" className="form-label">
                                                Subject<span className="noteStyle">*</span>
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
                                                Grade<span className="noteStyle">*</span>
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

                                            <label htmlFor="duration" className="form-label">
                                                Duration<span className="noteStyle">*</span>
                                            </label>
                                            <select
                                                className="form-select form-select-sm mb-3"
                                                id="duration"
                                                name="duration"
                                                value={formData.duration}
                                                onChange={handleChange}
                                                disabled={isLoading}
                                            >
                                                {lessonDurations.map((duration, index) => (
                                                    <option key={index} value={duration.value}>
                                                        {duration.label}
                                                    </option>
                                                ))}
                                            </select>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <label htmlFor="pdf_file" className="form-label">
                                                    File Upload<span className="noteStyle">*</span>
                                                </label>
                                            </div>
                                            <input
                                                type="file"
                                                className="form-control form-control-sm mb-2"
                                                id="pdf_file"
                                                name="pdf_file"
                                                accept="application/pdf"
                                                onChange={handleChange}
                                                disabled={isLoading}
                                            />

                                            <label htmlFor="textarea" className="form-label">
                                                File Description<span className="noteStyle">*</span>
                                            </label>
                                            <textarea
                                                type="text"
                                                className="form-control form-control-sm mb-2"
                                                placeholder="Briefly describe the file you are uploading (e.g. Chapter 1 - The Solar System Notes, or Midterm Study Guide)"
                                                id="textarea"
                                                name="textarea"
                                                rows={3}
                                                onChange={handleChange}
                                                disabled={isLoading}
                                            />
                                            <div className="d-flex justify-content-end mt-1">
                                                <small className={`${wordCount > 250 ? 'text-danger' : 'text-muted'}`}>
                                                    Word count: {wordCount}/250
                                                </small>
                                            </div>
                                            <div>
                                                <strong className="text-danger d-block mb-1">Note:</strong>
                                                <ul className="text-muted small ps-3 mb-0">
                                                    <li className="mb-1 d-flex align-items-start flex-wrap">
                                                        <FaFilePdf className="me-2 text-danger flex-shrink-0" />
                                                        <span className="fw-bold text-dark">Upload Requirement:</span>
                                                        <span className="flex-grow-1 ms-1">
                                                            Upload a single PDF (max <span className="text-danger fw-semibold">500KB</span>).
                                                        </span>
                                                    </li>

                                                    <li className="mb-1 d-flex align-items-start flex-wrap">
                                                        <FaEdit className="me-2 text-primary flex-shrink-0" />
                                                        <span className="fw-bold text-dark">File Description Limit:</span>
                                                        <span className="flex-grow-1 ms-1">
                                                            Must not exceed <span className="text-danger fw-semibold">250 words</span>.
                                                        </span>
                                                    </li>

                                                    <li className="d-flex align-items-start flex-wrap">
                                                        <FaCut className="me-2 text-success flex-shrink-0" />
                                                        <span className="fw-bold text-dark">PDF Too Large?</span>
                                                        <NavLink to="/pdf-splitter" target="_blank" className="text-decoration-none flex-grow-1">
                                                            <span className="fw-bold text-primary ms-1">Click here to split it</span>
                                                        </NavLink>
                                                        .
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-3">
                                            <button type="button" className="btn btn-sm" style={cancelStyle} onClick={handleReset} disabled={isLoading}>
                                                <FaEraser /> Reset
                                            </button>
                                            <button type="submit" className="btn btn-sm" style={btnStyle} disabled={isLoading}>
                                                Generate <FaArrowRight />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </>
                        ) : (
                            <div className="mt-3" ref={contentRef} id="main-btn">
                                {renderLessonPlan(apiResponse)}
                                <button className="btn btn-sm mt-2 mb-3 me-2 no-print" style={btnStyle} onClick={() => {
                                    setApiResponse(null);
                                    setWordCount(0);
                                }}>
                                    <FaArrowLeft /> Generate Another Lesson
                                </button>
                                <button className="btn btn-sm mt-2 mb-3 no-print" style={pdfStyle} onClick={handlePrint}>
                                    <FaRegFilePdf /> Download PDF
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
        <div className="container-fluid mt-3 mb-2 ps-3 pe-2 print-content">
            <div className='section'>
                <div className="d-flex justify-content-between mt-5 mb-5">
                    <h5>Name : <span className='pdf-style'></span></h5>
                    <h5 className='me-3'>Date :  <span className='pdf-style'></span></h5>
                </div>
                <div className='mb-3'>
                    <h5>Subject: {lessonPlan.subject} </h5>
                    <h5>Grade: {lessonPlan.gradeLevel}</h5>
                    <h5>Duration: {lessonPlan.duration}</h5>
                    <h5>Topic: {lessonPlan.topic}</h5>
                </div>
            </div>
            {/* Learning Objectives */}
            <section>
                <h4>Learning Objectives:</h4>
                <ul>
                    {lessonPlan.learningObjectives.map((objective, index) => (
                        <li key={index}>{objective}</li>
                    ))}
                </ul>
            </section>

            {/* Materials */}
            <section>
                <h4>Materials:</h4>
                <ul>
                    {lessonPlan.materials.map((material, index) => (
                        <li key={index}>{material}</li>
                    ))}
                </ul>
            </section>
            {/* Procedure */}
            <section>
                <h4>Procedure:</h4>
                <div>
                    <h5>Introduction:</h5>
                    <ul>
                        {lessonPlan.procedure.introduction.map((activity, index) => (
                            <li key={index}>{activity}</li>
                        ))}
                    </ul>

                    <h5>Direct Instruction:</h5>
                    <ul>
                        {lessonPlan.procedure.directInstruction.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ul>

                    <h5>Guided Practice:</h5>
                    <ul>
                        {lessonPlan.procedure.guidedPractice.map((practice, index) => (
                            <li key={index}>{practice}</li>
                        ))}
                    </ul>

                    <h5>Independent Practice:</h5>
                    <ul>
                        {lessonPlan.procedure.independentPractice.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>

                    <h5>Closure:</h5>
                    <ul>
                        {lessonPlan.procedure.closure.map((closureStep, index) => (
                            <li key={index}>{closureStep}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Assessment */}
            <section>
                <h4>Assessment:</h4>
                <div>
                    <h5>Formative:</h5>
                    <ul>
                        {lessonPlan.assessment.formative.map((assessment, index) => (
                            <li key={index}>{assessment}</li>
                        ))}
                    </ul>

                    <h5>Summative:</h5>
                    <ul>
                        {lessonPlan.assessment.summative.map((assessment, index) => (
                            <li key={index}>{assessment}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Differentiation */}
            <section>
                <h4>Differentiation:</h4>
                <ul>
                    {lessonPlan.differentiation.map((strategy, index) => (
                        <li key={index}>{strategy}</li>
                    ))}
                </ul>
            </section>

            {/* Accommodations */}
            <section>
                <h4>Accommodations:</h4>
                <ul>
                    {lessonPlan.accommodations.map((accommodation, index) => (
                        <li key={index}>{accommodation}</li>
                    ))}
                </ul>
            </section>

            {/* Extensions */}
            <section>
                <h4>Extensions:</h4>
                <ul>
                    {lessonPlan.extensions.map((extension, index) => (
                        <li key={index}>{extension}</li>
                    ))}
                </ul>
            </section>

            {/* Reflection */}
            <section>
                <h4>Reflection:</h4>
                <ul>
                    {lessonPlan.reflection.map((reflection, index) => (
                        <li key={index}>{reflection}</li>
                    ))}
                </ul>
            </section>

            {/* Importance */}
            <section>
                <h4>Importance:</h4>
                <p>{lessonPlan.importance}</p>
            </section>
        </div>
    );
};

