import React, { useState, useRef } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';
import { FaArrowRight, FaRegFilePdf, FaEraser, FaArrowLeft, FaFileUpload } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../../spinner/Spinner';
import { NavLink } from 'react-router-dom';
import NavBreadcrumb from '../../pages/BreadCrumb/BreadCrumb';

const subjects = [
    { value: "", label: "Choose a Subject" },
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
    { value: "15", label: "15 minutes" },
    { value: "30", label: "30 minutes" },
    { value: "45", label: "45 minutes" },
    { value: "60", label: "1 hour" },
    { value: "75", label: "1 hour 15 minutes" },
    { value: "90", label: "1 hour 30 minutes" },
    { value: "105", label: "1 hour 45 minutes" },
    { value: "120", label: "2 hours" },
    { value: "135", label: "2 hours 15 minutes" },
    { value: "150", label: "2 hours 30 minutes" },
    { value: "165", label: "2 hours 45 minutes" },
    { value: "180", label: "3 hours" }
];

export default function LessonPlan({ BASE_URL }) {

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
        { label: 'Main Panel', href: '/MainPlanner', active: false },
        { label: 'Planner', active: true },
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
    const contentRef = useRef();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { subject, grade, duration, textarea, pdf_file } = formData;

        if (!subject || !grade || !duration || !textarea || !pdf_file) {
            toast.error('Please fill in all fields.');
            return;
        }

        if (pdf_file && pdf_file.size > 250 * 1024) {
            toast.error('File size exceeds 250KB. Please upload a smaller file.');
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('subject', subject);
        formDataToSend.append('grade', grade);
        formDataToSend.append('duration', duration);
        formDataToSend.append('command', textarea);
        formDataToSend.append('file', pdf_file);

        setIsLoading(true);

        try {
            const response = await axios.post(`${BASE_URL}/generate_lesson_plan`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
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
            console.error('Error:', error);
            toast.error('Failed to generate the lesson plan. Please try again.');
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
            <ToastContainer position="top-right" autoClose={1500} />
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

                                            <label htmlFor="duration" className="form-label">
                                                Duration <span style={{ color: 'red' }}>*</span>
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
                                                    File Upload <span style={{ color: 'red' }}>*</span>
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
                                                Your Input <span style={{ color: 'red' }}>*</span>
                                            </label>
                                            <textarea
                                                type="text"
                                                className="form-control form-control-sm mb-2"
                                                placeholder="Eg. Chapter 1 Lessons 1"
                                                id="textarea"
                                                name="textarea"
                                                value={formData.textarea}
                                                onChange={handleChange}
                                                disabled={isLoading}
                                            />
                                            <p className="text-center" style={{ fontSize: '14px' }}>
                                                <span className="fw-bold" style={{ color: 'red' }}>Note: * </span>
                                                If you have a larger PDF and want to shorten it ,
                                                <NavLink to="/PdfSplitter" target='_blank'>
                                                    Click here
                                                </NavLink>
                                            </p>
                                        </div>

                                        <div className="d-flex justify-content-between mt-3">
                                            <button type="button" className="btn btn-sm" style={cancelStyle} onClick={() => setFormData({
                                                subject: '',
                                                grade: '',
                                                duration: '',
                                                textarea: '',
                                                pdf_file: null,
                                            })} disabled={isLoading}>
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
                                <button className="btn btn-sm mt-2 mb-3 me-2 no-print" style={btnStyle} onClick={() => setApiResponse(null)}>
                                    <FaArrowLeft /> Generate Another Lesson
                                </button>
                                <button className="btn btn-sm mt-2 mb-3 no-print" style={pdfStyle} onClick={handlePrint}>
                                    <FaRegFilePdf /> View PDF
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


// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import NavBar from '../NavBar';
// import { FaArrowRight, FaRegFilePdf, FaEraser, FaArrowLeft} from "react-icons/fa";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Spinner from '../../spinner/Spinner';
// import { NavLink } from 'react-router-dom';


// const subjects = [
//     { value: "", label: "Choose a Subject" },
//     { value: "english", label: "English" },
//     { value: "mathematics", label: "Mathematics" },
//     { value: "science", label: "Science" },
//     { value: "social_studies", label: "Social Studies" },
//     { value: "reading", label: "Reading" },
//     { value: "writing", label: "Writing" },
//     { value: "art", label: "Art" },
//     { value: "music", label: "Music" },
//     { value: "physical_education", label: "Physical Education" },
//     { value: "health", label: "Health" },
//     { value: "technology", label: "Technology" },
//     { value: "library", label: "Library" },
//     { value: "foreign_language", label: "Foreign Language" }
// ];

// const grades = [
//     { value: "", label: "Choose a Grade" },
//     { value: "k", label: "Kindergarten" },
//     { value: "1", label: "1st Grade" },
//     { value: "2", label: "2nd Grade" },
//     { value: "3", label: "3rd Grade" },
//     { value: "4", label: "4th Grade" },
//     { value: "5", label: "5th Grade" },
//     { value: "6", label: "6th Grade" },
//     { value: "7", label: "7th Grade" },
//     { value: "8", label: "8th Grade" },
//     { value: "9", label: "9th Grade" },
//     { value: "10", label: "10th Grade" },
//     { value: "11", label: "11th Grade" },
//     { value: "12", label: "12th Grade" }
// ];

// const lessonDurations = [
//     { value: "", label: "Choose the Duration" },
//     { value: "15", label: "15 minutes" },
//     { value: "30", label: "30 minutes" },
//     { value: "45", label: "45 minutes" },
//     { value: "60", label: "1 hour" },
//     { value: "75", label: "1 hour 15 minutes" },
//     { value: "90", label: "1 hour 30 minutes" },
//     { value: "105", label: "1 hour 45 minutes" },
//     { value: "120", label: "2 hours" },
//     { value: "135", label: "2 hours 15 minutes" },
//     { value: "150", label: "2 hours 30 minutes" },
//     { value: "165", label: "2 hours 45 minutes" },
//     { value: "180", label: "3 hours" }
// ];

// export default function LessonPlan() {
//     const btnStyle = { backgroundColor: '#FF683B', color: 'white' };
//     const cancelStyle = { backgroundColor: '#dc3545', color: 'white' };
//     const pdfStyle = { backgroundColor: '#198754', color: 'white' };

//     const { register, handleSubmit, reset, formState: { errors } } = useForm();
//     const [apiResponse, setApiResponse] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const contentRef = useRef();

//     const onSubmit = async (data) => {
//         setIsLoading(true);
//         const formDataToSend = new FormData();
//         for (const key in data) formDataToSend.append(key, data[key]);

//         try {
//             const response = await axios.post(`http://192.168.1.67:8080/generate_lesson_plan`, formDataToSend, {
//                 headers: { 'Content-Type': 'multipart/form-data' },
//             });
//             setApiResponse(response.data);
//             toast.success('Lesson plan generated successfully!');
//             reset();
//         } catch (error) {
//             toast.error('Failed to generate the lesson plan. Please try again.');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const handlePrint = () => {
//         window.print();
//     };

//     return (
//         <>
//             <NavBar id="main-nav" />
//             <ToastContainer position="top-right" autoClose={1500} />
//             <div className="container-fluid">
//                 <div className="row justify-content-center mt-5 mb-4">
//                     {isLoading ? (
//                         <div className="col-md-5 text-center">
//                             <Spinner />
//                         </div>
//                     ) : (
//                         !apiResponse ? (
//                             <div className="col-md-5 border rounded-3 pt-4 pb-3 ps-5 pe-5 shadow bg-body rounded no-print">
//                                 <form onSubmit={handleSubmit(onSubmit)}>
//                                     <h4 className="text-center mb-3">Lesson Planner</h4>
//                                     <div className="mb-2">
//                                         <label htmlFor="subject" className="form-label">
//                                             Subject <span style={{ color: 'red' }}>*</span>
//                                         </label>
//                                         <select
//                                             className="form-select form-select-sm mb-1"
//                                             {...register('subject', { required: 'Subject is required' })}
//                                             disabled={isLoading}
//                                         >
//                                             {subjects.map((element, index) => (
//                                                 <option key={index} value={element.value}>{element.label}</option>
//                                             ))}
//                                         </select>
//                                         {errors.subject && <div className="text-danger">
//                                             <small>{errors.subject.message}</small>
//                                         </div>}

//                                         <label htmlFor="grade" className="form-label">
//                                             Grade <span style={{ color: 'red' }}>*</span>
//                                         </label>
//                                         <select
//                                             className="form-select form-select-sm mb-1"
//                                             {...register('grade', { required: 'Grade is required' })}
//                                             disabled={isLoading}
//                                         >
//                                             {grades.map((grade, index) => (
//                                                 <option key={index} value={grade.value}>{grade.label}</option>
//                                             ))}
//                                         </select>
//                                         {errors.grade && <div className="text-danger">
//                                             <small>{errors.grade.message}</small>
//                                         </div>}

//                                         <label htmlFor="duration" className="form-label">
//                                             Duration <span style={{ color: 'red' }}>*</span>
//                                         </label>
//                                         <select
//                                             className="form-select form-select-sm mb-1"
//                                             {...register('duration', { required: 'Duration is required' })}
//                                             disabled={isLoading}
//                                         >
//                                             {lessonDurations.map((duration, index) => (
//                                                 <option key={index} value={duration.value}>{duration.label}</option>
//                                             ))}
//                                         </select>
//                                         {errors.duration && <div className="text-danger">
//                                             <small>{errors.duration.message}</small>
//                                         </div>}

//                                         <label htmlFor="pdf_file" className="form-label">
//                                             File Upload <span style={{ color: 'red' }}>*</span>
//                                         </label>

//                                         <input
//                                             type="file"
//                                             className="form-control form-control-sm mb-1"
//                                             {...register('pdf_file', {
//                                                 required: 'PDF file is required',
//                                                 validate: (file) => file[0]?.size <= 250 * 1024 || 'File size exceeds 250KB',
//                                             })}
//                                         />
//                                         {errors.pdf_file && (
//                                             <div>
//                                                 <small className="text-danger">
//                                                     {errors.pdf_file.message}
//                                                     {errors.pdf_file.message === 'File size exceeds 250KB' && (
//                                                         <>
//                                                             , want to shorten it?&nbsp;
//                                                             <NavLink to="/PdfSplitter" target="_blank">
//                                                                 Click here
//                                                             </NavLink>
//                                                         </>
//                                                     )}
//                                                 </small>
//                                             </div>
//                                         )}

//                                         <label htmlFor="textarea" className="form-label">
//                                             Your Input <span style={{ color: 'red' }}>*</span>
//                                         </label>
//                                         <textarea
//                                             className="form-control form-control-sm mb-1"
//                                             id='inputs'
//                                             rows={1}
//                                             placeholder="e.g., Lesson 1 or Chapter 1 (from PDF)"
//                                             {...register('textarea', { required: 'Input is required' })}
//                                             disabled={isLoading}
//                                         />
//                                         {errors.textarea && <div className="text-danger">
//                                             <small>{errors.textarea.message}</small>
//                                         </div>}
//                                     </div>

//                                     <div className="d-flex justify-content-between mt-3">
//                                         <button type="submit" className="btn btn-sm" style={btnStyle} disabled={isLoading}>
//                                             Generate <FaArrowRight />
//                                         </button>
//                                         <button type="button" className="btn btn-sm" style={cancelStyle} onClick={() => reset()} disabled={isLoading}>
//                                             <FaEraser /> Reset
//                                         </button>
//                                     </div>
//                                 </form>
//                             </div>
//                         ) : (
//                             <div className="mt-3" ref={contentRef} id="main-btn">
//                                 {renderLessonPlan(apiResponse)}
//                                 <button className="btn btn-sm mt-2 mb-3 me-2 no-print" style={btnStyle} onClick={() => setApiResponse(null)}>
//                                     <FaArrowLeft /> Generate Another Lesson
//                                 </button>
//                                 <button className="btn btn-sm mt-2 mb-3 no-print" style={pdfStyle} onClick={handlePrint}>
//                                     <FaRegFilePdf /> Download PDF
//                                 </button>
//                             </div>
//                         )
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// }

// const renderLessonPlan = (lessonPlan) => {
//     const nameStyle = {
//         display: "inline-block",
//         width: "200px",
//         height: "1px",
//         backgroundColor: "black",
//         borderBottom: "1px solid black",
//     };

//     const dateStyle = {
//         display: "inline-block",
//         width: "100px",
//         height: "1px",
//         backgroundColor: "black",
//         borderBottom: "1px solid black",
//     };

//     return (
//         <div className="container-fluid mt-3 mb-2 ps-5 pe-5 print-content">
//             <div className='mt-4'>
//                 <div className="d-flex justify-content-center mt-3">
//                     <h2 className='mb-5'>Your High School Name</h2>
//                 </div>
//                 <div className="d-flex justify-content-between mt-5 mb-5">
//                     <h5>Name : <span style={nameStyle}></span></h5>
//                     <h5 className='me-3'>Date :  <span style={dateStyle}></span></h5>
//                 </div>
//                 <div className='mb-3'>
//                     <h5>Subject: {lessonPlan.subject} </h5>
//                     <h5>Grade: {lessonPlan.gradeLevel}</h5>
//                     <h5>Duration: {lessonPlan.duration}</h5>
//                     <h5>Topic: {lessonPlan.topic}</h5>
//                 </div>
//             </div>
//             {/* Learning Objectives */}
//             <section>
//                 <h4>Learning Objectives:</h4>
//                 <ul>
//                     {lessonPlan.learningObjectives.map((objective, index) => (
//                         <li key={index}>{objective}</li>
//                     ))}
//                 </ul>
//             </section>

//             {/* Materials */}
//             <section>
//                 <h4>Materials:</h4>
//                 <ul>
//                     {lessonPlan.materials.map((material, index) => (
//                         <li key={index}>{material}</li>
//                     ))}
//                 </ul>
//             </section>
//             {/* Procedure */}
//             <section>
//                 <h4>Procedure:</h4>
//                 <div>
//                     <h5>Introduction:</h5>
//                     <ul>
//                         {lessonPlan.procedure.introduction.map((activity, index) => (
//                             <li key={index}>{activity}</li>
//                         ))}
//                     </ul>

//                     <h5>Direct Instruction:</h5>
//                     <ul>
//                         {lessonPlan.procedure.directInstruction.map((step, index) => (
//                             <li key={index}>{step}</li>
//                         ))}
//                     </ul>

//                     <h5>Guided Practice:</h5>
//                     <ul>
//                         {lessonPlan.procedure.guidedPractice.map((practice, index) => (
//                             <li key={index}>{practice}</li>
//                         ))}
//                     </ul>

//                     <h5>Independent Practice:</h5>
//                     <ul>
//                         {lessonPlan.procedure.independentPractice.map((task, index) => (
//                             <li key={index}>{task}</li>
//                         ))}
//                     </ul>

//                     <h5>Closure:</h5>
//                     <ul>
//                         {lessonPlan.procedure.closure.map((closureStep, index) => (
//                             <li key={index}>{closureStep}</li>
//                         ))}
//                     </ul>
//                 </div>
//             </section>

//             {/* Assessment */}
//             <section>
//                 <h4>Assessment:</h4>
//                 <div>
//                     <h5>Formative:</h5>
//                     <ul>
//                         {lessonPlan.assessment.formative.map((assessment, index) => (
//                             <li key={index}>{assessment}</li>
//                         ))}
//                     </ul>

//                     <h5>Summative:</h5>
//                     <ul>
//                         {lessonPlan.assessment.summative.map((assessment, index) => (
//                             <li key={index}>{assessment}</li>
//                         ))}
//                     </ul>
//                 </div>
//             </section>

//             {/* Differentiation */}
//             <section>
//                 <h4>Differentiation:</h4>
//                 <ul>
//                     {lessonPlan.differentiation.map((strategy, index) => (
//                         <li key={index}>{strategy}</li>
//                     ))}
//                 </ul>
//             </section>

//             {/* Accommodations */}
//             <section>
//                 <h4>Accommodations:</h4>
//                 <ul>
//                     {lessonPlan.accommodations.map((accommodation, index) => (
//                         <li key={index}>{accommodation}</li>
//                     ))}
//                 </ul>
//             </section>

//             {/* Extensions */}
//             <section>
//                 <h4>Extensions:</h4>
//                 <ul>
//                     {lessonPlan.extensions.map((extension, index) => (
//                         <li key={index}>{extension}</li>
//                     ))}
//                 </ul>
//             </section>

//             {/* Reflection */}
//             <section>
//                 <h4>Reflection:</h4>
//                 <ul>
//                     {lessonPlan.reflection.map((reflection, index) => (
//                         <li key={index}>{reflection}</li>
//                     ))}
//                 </ul>
//             </section>

//             {/* Importance */}
//             <section>
//                 <h4>Importance:</h4>
//                 <p>{lessonPlan.importance}</p>
//             </section>
//         </div>
//     );
// };