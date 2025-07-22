import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import Spinner from '../../spinner/Spinner';
import { FaArrowRight, FaEraser, FaArrowLeft, FaCloudDownloadAlt, FaFilePdf, FaInfoCircle, FaBan } from "react-icons/fa";
import NavBar from '../NavBar';
import NavBreadcrumb from '../../pages/BreadCrumb/BreadCrumb';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function JokesGenerator({ BASE_URL }) {
    const navigate = useNavigate();
    const btnStyle = { backgroundColor: '#FF683B', color: 'white' };
    const cancelStyle = { backgroundColor: '#dc3545', color: 'white' };
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [apiResponse, setApiResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);

    const breadcrumbItems = [
        { label: 'Main Panel', href: '/ai-tools-for-teachers', active: false },
        { label: 'Gamification', href: '/ai-tools-for-teachers?tab=Gamification', active: false },
        { label: 'Teacher Joke', active: true }
    ];

    const onSubmit = async (data) => {
        const authToken = Cookies.get('authToken');
        const siteUrl = Cookies.get('site_url');

        const payload = {
            topic: data.topic.trim(),
            number_of_jokes: Number.isNaN(parseInt(data.number_of_jokes)) ? 0 : parseInt(data.number_of_jokes),
        };

        setIsLoading(true);
        setApiResponse(null);

        try {
            const response = await axios.post(`${BASE_URL}/teacher_joke`, payload, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${authToken}`,
                    'X-Site-Url': siteUrl
                },
            });
            setApiResponse(response.data);
            reset();
            toast.success('Jokes generated successfully!');
        } catch (error) {
            setApiResponse(null);
            if (error.response) {
                const backendError = error.response.data?.error || error.response.data?.message || 'Failed to generate jokes.';
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


    const toggleAnswers = () => setShowAnswers(!showAnswers);

    const generatePdf = (showAnswers) => {
        const answerDivs = document.querySelectorAll('.answer');
        answerDivs.forEach(div => {
            div.style.display = showAnswers ? 'block' : 'none';
        });
        window.print();
        answerDivs.forEach(div => {
            div.style.display = '';
        });
    };

    const nameStyle = {
        display: "inline-block",
        width: "130px",
        height: "1px",
        backgroundColor: "black",
        borderBottom: "1px solid black",
    };

    const dateStyle = {
        display: "inline-block",
        width: "130px",
        height: "1px",
        backgroundColor: "black",
        borderBottom: "1px solid black",
    };

    return (
        <>
            <NavBar />
            <div className="container-fluid">
                <div className="row justify-content-center mt-5">
                    {isLoading ? (
                        <div className="col-md-5 text-center">
                            <Spinner />
                        </div>
                    ) : (
                        !apiResponse ? (
                            <>
                                <NavBreadcrumb items={breadcrumbItems} />
                                <div className="col-md-5 border border-4 rounded-3 pt-4 pb-3 ps-5 pe-5 shadow p-3 bg-body rounded">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <h4 className="text-center mb-3">Teacher Joke Generator</h4>
                                        <div className="mb-2">
                                            <label htmlFor="topic" className="form-label">
                                                Topic <span style={{ color: 'red' }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control form-control-sm mb-2 ${errors.topic ? 'is-invalid' : ''}`}
                                                id="topic"
                                                {...register('topic', {
                                                    required: 'Topic is required.',
                                                    pattern: {
                                                        value: /^(?!\s)(?![0-9])[a-zA-Z0-9.,'"-\s]+$/,
                                                        message: 'Cannot start with space or digit, and only letters, numbers, and some punctuation allowed.'
                                                    },
                                                    validate: value => {
                                                        const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
                                                        return wordCount <= 50 || 'Topic must be 50 words or fewer.';
                                                    }
                                                })}
                                                placeholder="Enter topic (e.g. Space, Animals)"
                                            />
                                            {errors.topic && <div className="invalid-feedback">{errors.topic.message}</div>}

                                            <label htmlFor="number_of_jokes" className="form-label">
                                                Number of Jokes <span style={{ color: 'red' }}>*</span>
                                            </label>
                                            <select
                                                className={`form-select form-select-sm ${errors.number_of_jokes ? 'is-invalid' : ''}`}
                                                id="number_of_jokes"
                                                {...register('number_of_jokes', {
                                                    required: 'Please select the number of jokes.',
                                                })}
                                            >
                                                <option value="">Choose Number of Jokes</option>
                                                {[...Array(6)].map((_, i) => (
                                                    <option key={i + 5} value={i + 5}>
                                                        {i + 5}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.number_of_jokes && <div className="invalid-feedback">{errors.number_of_jokes.message}</div>}
                                        </div>
                                        <div className="mb-3">
                                            <strong className="text-danger d-block mb-1">Note:</strong>
                                            <ul className="text-muted small ps-3 mb-0">
                                                <li className="d-flex align-items-center gap-2 mb-1">
                                                    <FaInfoCircle className="text-primary" />
                                                    <span>
                                                        <span className="fw-bold text-dark">Topic Limit:</span> Must not exceed
                                                        <span className="text-danger fw-semibold ms-1">50 words</span>.
                                                    </span>
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <FaBan className="text-danger" />
                                                    <span>
                                                        <span className="fw-bold text-dark">No Special Characters:</span> Avoid using symbols like
                                                        <span className="text-danger ms-1">@, #, $, -, _</span>.
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
                                            >
                                                <FaEraser /> Reset
                                            </button>
                                            <button type="submit" className="btn btn-sm" style={btnStyle}>
                                                Generate <FaArrowRight />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </>
                        ) : (
                            <div className="mt-3">
                                <div className='mb-5'>
                                    <div id="headerContent">
                                        <div className="d-flex justify-content-between mt-5 mb-5">
                                            <h5>Name : <span style={nameStyle}></span></h5>
                                            <h5 className='me-3'>Date :  <span style={dateStyle}></span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {apiResponse.teacher_jokes.jokes.map((joke, index) => (
                                        <div key={index} className="col-md-6 mb-4">
                                            <div className="card border-primary w-auto">
                                                <div className="card-body">
                                                    <p className="card-text">
                                                        <strong>Question:</strong> {joke.question}
                                                    </p>
                                                    <p className="card-text">
                                                        <strong>Answer:</strong> {showAnswers ? joke.answer : "__________"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button
                                        className="btn btn-sm mt-2 mb-3 me-2 no-print"
                                        style={btnStyle}
                                        onClick={() => {
                                            setApiResponse(null);
                                            setShowAnswers(false);
                                        }}
                                    >
                                        <FaArrowLeft /> Generate More Jokes
                                    </button>
                                    <button
                                        className="btn btn-sm btn-danger mt-2 mb-3 me-2 no-print"
                                        onClick={generatePdf}
                                    >
                                        <FaCloudDownloadAlt /> Download PDF
                                    </button>
                                    <button
                                        className="btn btn-sm btn-warning mt-2 mb-3 no-print"
                                        onClick={toggleAnswers}
                                    >
                                        <FaFilePdf /> {showAnswers ? 'Hide Answers' : 'Show Answers'}
                                    </button>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    );
}
