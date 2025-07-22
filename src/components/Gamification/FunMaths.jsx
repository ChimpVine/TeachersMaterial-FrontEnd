import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';
import Spinner from '../../spinner/Spinner';
import NavBreadcrumb from '../../pages/BreadCrumb/BreadCrumb';
import { FaArrowRight, FaEraser, FaArrowLeft, FaCloudDownloadAlt, FaFilePdf, FaInfoCircle, FaStar } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

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

export default function FunMath({ BASE_URL }) {
    const btnStyle = { backgroundColor: '#FF683B', color: 'white' };
    const cancelStyle = { backgroundColor: '#dc3545', color: 'white' };


    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [apiResponse, setApiResponse] = useState(null);
    const [showHint, setShowHint] = useState(false);

    const onSubmit = async (data) => {
        const authToken = Cookies.get('authToken');
        const siteUrl = Cookies.get('site_url');

        setIsLoading(true);
        setApiResponse(null);

        try {
            const response = await axios.post(`${BASE_URL}/fun_maths`, data, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${authToken}`,
                    'X-Site-Url': siteUrl
                },
            });
            setApiResponse(response.data);
            toast.success('Fun math problem generated successfully!');
            reset();
        } catch (error) {
            const message = error.response?.data?.error || 'Failed to generate Fun Maths.';
            toast.error(message);
            if (error.response?.status === 401) {
                toast.warning('This email has been used on another device. Redirecting to login...');
                ['authToken', 'site_url', 'Display_name', 'user_email'].forEach(Cookies.remove);
                ['authToken', 'authUser'].forEach(localStorage.removeItem);
                setTimeout(() => window.location.replace('/login'), 2000);
            }
        } finally {
            setIsLoading(false);
        }
    };

    const toggleHint = () => setShowHint(!showHint);

    const generatePdf = () => window.print();

    const renderFunMath = (response) => (
        <div className="container col-md-10 mt-3">
            <h5><strong>Riddle:</strong></h5>
            <p>{response.riddle.question}</p>

            <h5><strong>Hint:</strong></h5>
            <p>{response.riddle.hint}</p>

            <h5><strong>Answer:</strong></h5>
            <p>{response.answer.explanation}</p>

            <h6><strong>Steps:</strong></h6>
            <ul>
                {response.answer.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>

            <h6><strong>Fun Fact:</strong></h6>
            <p>{response.answer.fun_fact}</p>

            <h5><strong>Practice Questions:</strong></h5>
            <ul>
                {response.practice_questions.map((question, index) => (
                    <li key={index}>
                        <strong>Question {index + 1}:</strong> {question.question}
                        <br />
                        {showHint && (
                            <>
                                <strong>Hint:</strong> {question.hint}
                            </>
                        )}
                    </li>
                ))}
            </ul>

            <h5><strong>Real-Life Applications:</strong></h5>
            <ul>
                {response.real_life_application.map((application, index) => (
                    <li key={index}>{application}</li>
                ))}
            </ul>

            <div className="d-flex justify-content-center">
                <button className="btn btn-sm mt-2 mb-3 me-3 no-print"
                    style={btnStyle}
                    onClick={() => {
                        setApiResponse(null);
                        setShowAnswers(false);
                    }}
                >
                    <FaArrowLeft /> Generate More
                </button>
                <button className="btn btn-sm mt-2 mb-3 me-3 no-print" style={cancelStyle} onClick={generatePdf}>
                    <FaCloudDownloadAlt /> Download PDF
                </button>
                <button className="btn btn-sm mt-2 mb-3 me-3 no-print btn-warning" onClick={toggleHint}>
                    <FaFilePdf /> {showHint ? 'Hide Hint' : 'Show Hint'}
                </button>
            </div>
        </div>
    );

    return (
        <>
            <NavBar />
            <div className="container-fluid">
                <div className="row justify-content-center mt-5 mb-4">
                    {isLoading ? (
                        <div className="col-md-5 text-center"><Spinner /></div>
                    ) : !apiResponse ? (
                        <>
                            <NavBreadcrumb items={[
                                { label: 'Main Panel', href: '/ai-tools-for-teachers' },
                                { label: 'Gamification', href: '/ai-tools-for-teachers?tab=Gamification', active: false },
                                { label: 'Fun Math', active: true }
                            ]} />
                            <div className="col-md-5 border rounded-3 pt-4 pb-3 px-5 shadow bg-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h4 className="text-center mb-3">Fun Math Generator</h4>
                                    {[
                                        { label: 'Grade', name: 'grade_level', type: 'select', options: grades },
                                        { label: 'Math Topic', name: 'math_topic', type: 'text', placeholder: 'Enter math topic (e.g. Fractions, Algebra)' },
                                        { label: 'Interest', name: 'interest', type: 'text', placeholder: 'Enter interest (e.g. Space, Sports)' }
                                    ].map(({ label, name, type, placeholder, options }) => (
                                        <div className="mb-2" key={name}>
                                            <label htmlFor={name} className="form-label">
                                                {label} <span style={{ color: 'red' }}>*</span>
                                            </label>

                                            {type === 'select' ? (
                                                <select
                                                    id={name}
                                                    className={`form-select form-select-sm ${errors[name] ? 'is-invalid' : ''}`}
                                                    {...register(name, {
                                                        required: `${label} is required`,
                                                    })}
                                                >
                                                    {options.map((option, idx) => (
                                                        <option key={idx} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            ) : (
                                                <input
                                                    type={type}
                                                    id={name}
                                                    className={`form-control form-control-sm ${errors[name] ? 'is-invalid' : ''}`}
                                                    placeholder={placeholder}
                                                    {...register(name, {
                                                        required: `${label} is required`,
                                                        validate: {
                                                            notEmpty: (value) =>
                                                                value.trim().length > 0 || `${label} cannot be blank or just spaces.`,
                                                            hasLetter: (value) =>
                                                                /[a-zA-Z]/.test(value) || `${label} must include at least one letter.`,
                                                            notOnlySpecialOrNumbers: (value) =>
                                                                /[a-zA-Z]/.test(value) && /[^\s]/.test(value) || `${label} must not be only numbers or special characters.`,
                                                            wordLimit: (value) =>
                                                                value.trim().split(/\s+/).length <= 50 || `${label} must not exceed 50 words.`,
                                                        },
                                                    })}
                                                />
                                            )}

                                            {errors[name] && <div className="invalid-feedback">{errors[name].message}</div>}
                                        </div>
                                    ))}
                                    <div className="mb-3">
                                        <strong className="text-danger d-block mb-1">Note:</strong>
                                        <ul className="text-muted small ps-3 mb-0">
                                            <li className="d-flex align-items-start gap-2">
                                                <span>
                                                    <span className="fw-bold text-dark">
                                                        <FaInfoCircle className="text-primary me-1" />
                                                        Math Topic:
                                                    </span>{' '}
                                                    Must not exceed
                                                    <span className="text-danger fw-semibold ms-1">50 words</span>.
                                                </span>
                                            </li>
                                            <li className="d-flex align-items-start gap-2">
                                                <span>
                                                    <span className="fw-bold text-dark">
                                                        <FaStar className="text-warning me-1" />
                                                        Interest:
                                                    </span>{' '}
                                                    Must not exceed
                                                    <span className="text-danger fw-semibold ms-1">50 words</span>.
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                        <button
                                            type="button"
                                            className="btn btn-sm"
                                            style={cancelStyle}
                                            onClick={() => reset()}
                                            disabled={isLoading}
                                        >
                                            <FaEraser /> Reset
                                        </button>
                                        <button type="submit" className="btn btn-sm" style={btnStyle} disabled={isLoading}>
                                            Generate <FaArrowRight />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </>
                    ) : renderFunMath(apiResponse)}
                </div>
            </div>
        </>
    );
}
