import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import Spinner from '../../spinner/Spinner';
import { FaArrowRight, FaEraser, FaArrowLeft, FaCloudDownloadAlt, FaFilePdf } from "react-icons/fa";
import NavBar from '../NavBar';
import NavBreadcrumb from '../../pages/BreadCrumb/BreadCrumb';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function MysteryGameGenerator({ BASE_URL }) {
    const navigate = useNavigate();
    const btnStyle = { backgroundColor: '#FF683B', color: 'white' };
    const cancelStyle = { backgroundColor: '#dc3545', color: 'white' };
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [apiResponse, setApiResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);

    const breadcrumbItems = [
        { label: 'Main Panel', href: '/ai-tools-for-teachers', active: false },
        { label: 'Gamification', active: true },
        { label: 'Mystery Case', active: true }
    ];

    const handleErrorResponse = (error) => {
        let errorMessage = 'An unexpected error occurred.';

        if (error.response) {
            const responseData = error.response.data || {};
            errorMessage = responseData.error || responseData.message || JSON.stringify(responseData);
            if (error.response.status === 401) {
                handleUnauthorizedError();
            }
        } else if (error.request) {
            errorMessage = 'No response from server. Please check your network connection.';
        } else {
            errorMessage = error.message || errorMessage;
        }
        toast.error(errorMessage);
    };


    const handleUnauthorizedError = () => {
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
    };


    const onSubmit = async (data) => {
        const authToken = Cookies.get('authToken');
        const siteUrl = Cookies.get('site_url');

        const payload = {
            topic: data.case_study_topic,
            difficulty: data.difficulty_level,
            no_of_clues: parseInt(data.number_of_clues),
        };

        setIsLoading(true);
        setApiResponse(null);

        try {
            const response = await axios.post(`${BASE_URL}/mystery_game`, payload, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${authToken}`,
                    'X-Site-Url': siteUrl
                },
            });

            if (response.data?.mystery_game) {
                setApiResponse(response.data.mystery_game);
                reset();
                toast.success('Mystery case generated successfully!');
            } else {
                const backendErrorMessage = response.data?.error || response.data?.message || 'Unexpected response format.';
                toast.error(backendErrorMessage);
            }
        } catch (error) {
            handleErrorResponse(error);
        } finally {
            setIsLoading(false);
        }
    };

    const toggleAnswers = () => setShowAnswers(!showAnswers);

    const generatePdf = () => {
        window.print();
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
                                        <h4 className="text-center mb-3">Mystery Case Generator</h4>
                                        <div className="mb-2">
                                            <label htmlFor="case_study_topic" className="form-label">
                                                Case Study Topic <span style={{ color: 'red' }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control form-control-sm mb-2 ${errors.case_study_topic ? 'is-invalid' : ''}`}
                                                id="case_study_topic"
                                                {...register('case_study_topic', {
                                                    required: 'Case Study Topic is required.',
                                                    pattern: {
                                                        value: /^(?!\s)(?![0-9])[a-zA-Z0-9.,'"-\s]+$/,
                                                        message: 'The topic must be 1-50 characters long, cannot start  with a space, and must not contain special characters.'
                                                    }
                                                })}
                                                placeholder="Enter topic (e.g. Vanishing Train 1945, Phantom Heist)"
                                            />

                                            {errors.case_study_topic && (
                                                <div className="invalid-feedback">{errors.case_study_topic.message}</div>
                                            )}

                                            <label htmlFor="difficulty_level" className="form-label">
                                                Difficulty Level <span style={{ color: 'red' }}>*</span>
                                            </label>
                                            <select
                                                className={`form-select form-select-sm mb-2 ${errors.difficulty_level ? 'is-invalid' : ''}`}
                                                id="difficulty_level"
                                                {...register('difficulty_level', {
                                                    required: 'Please select a difficulty level.',
                                                })}
                                            >
                                                <option value="">Choose Difficulty Level</option>
                                                <option value="easy">Easy</option>
                                                <option value="medium">Medium</option>
                                                <option value="hard">Hard</option>
                                            </select>
                                            {errors.difficulty_level && (
                                                <div className="invalid-feedback">{errors.difficulty_level.message}</div>
                                            )}
                                            <label htmlFor="number_of_clues" className="form-label">
                                                Number of Clues <span style={{ color: 'red' }}>*</span>
                                            </label>
                                            <select
                                                className={`form-select form-select-sm ${errors.number_of_clues ? 'is-invalid' : ''}`}
                                                id="number_of_clues"
                                                {...register('number_of_clues', {
                                                    required: 'Please select the number of clues.',
                                                })}
                                            >
                                                <option value="">Choose Number of Clues</option>
                                                {[...Array(10)].map((_, i) => (
                                                    <option key={i + 1} value={i + 1}>
                                                        {i + 1}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.number_of_clues && (
                                                <div className="invalid-feedback">{errors.number_of_clues.message}</div>
                                            )}
                                        </div>
                                        <div className="mb-3">
                                            <small className="text-muted">
                                                <strong className="text-danger">Note:</strong>
                                                <ul>
                                                    <li>Topic must not be more than 50 characters long.</li>
                                                    <li>Only letters, numbers, and spaces are allowed.</li>
                                                    <li>No special characters (e.g., @, #, $, -, _).</li>
                                                </ul>
                                            </small>
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
                            <div className="col-md-10 mt-3 mb-3">
                                <div className="d-flex justify-content-between mt-5 mb-5">
                                    <h5>Name : <span style={nameStyle}></span></h5>
                                    <h5 className='me-3'>Date :  <span style={dateStyle}></span></h5>
                                </div>
                                <h5>Case scenario:</h5>
                                <p>{apiResponse.story}</p>
                                <h6>Question:</h6>
                                <p>{apiResponse.question}</p>
                                <h6>Clues:</h6>
                                <ul>
                                    {apiResponse.clues.map((clue, index) => (
                                        <li key={index}>{clue}</li>
                                    ))}
                                </ul>
                                <h6>Answer:</h6>
                                {showAnswers && (
                                    <p>{apiResponse.answer}</p>
                                )}
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-sm mt-2 me-3 no-print"
                                        style={btnStyle}
                                        onClick={() => {
                                            setApiResponse(null);
                                            setShowAnswers(false);
                                        }}>
                                        <FaArrowLeft /> Generate More Mystery
                                    </button>
                                    <button className="btn btn-sm btn-danger mt-2 me-3 no-print" onClick={generatePdf}>
                                        <FaCloudDownloadAlt /> Download PDF
                                    </button>
                                    <button className="btn btn-sm btn-warning mt-2 me-3 no-print" onClick={toggleAnswers}>
                                        <FaFilePdf /> {showAnswers ? 'Hide Answer' : 'Show Answer'}
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
