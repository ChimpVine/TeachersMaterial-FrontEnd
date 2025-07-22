import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import Spinner from '../../spinner/Spinner';
import { FaArrowRight, FaEraser, FaArrowLeft, FaCloudDownloadAlt, FaInfoCircle, FaBan } from "react-icons/fa";
import NavBar from '../NavBar';
import NavBreadcrumb from '../../pages/BreadCrumb/BreadCrumb';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function BingoGenerator({ BASE_URL }) {
    const navigate = useNavigate();
    const btnStyle = { backgroundColor: '#FF683B', color: 'white' };
    const cancelStyle = { backgroundColor: '#dc3545', color: 'white' };

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [apiResponse, setApiResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [wordCount, setWordCount] = useState(0); // Add wordCount state


    const breadcrumbItems = [
        { label: 'Main Panel', href: '/ai-tools-for-teachers', active: false },
        { label: 'Gamification', href: '/ai-tools-for-teachers?tab=Gamification', active: false },
        { label: 'Bingo Generator', active: true }
    ];

    const borderStyles = {
        flex: 1,
        minHeight: '80px',
        minWidth: '80px'
    };

    const onSubmit = async (data) => {

        const authToken = Cookies.get('authToken');
        const siteUrl = Cookies.get('site_url');


        const payload = {
            topic: data.topic.trim(),
            num_students: parseInt(data.num_students),
        };

        setIsLoading(true);
        setApiResponse(null);

        try {
            const response = await axios.post(`${BASE_URL}/generate_bingo`, payload, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${authToken}`,
                    'X-Site-Url': siteUrl
                },
            });
            setApiResponse(response.data);
            reset();
            toast.success('Bingo cards generated successfully!');
        } catch (error) {
            setApiResponse(null);
            if (error.response) {
                const backendError = error.response.data?.error || error.response.data?.message || 'Failed to generate bingo.';
                toast.warning(backendError);
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

    const nameStyle = {
        display: "inline-block",
        width: "130px",
        height: "1px",
        backgroundColor: "black",
        borderBottom: "1px solid black",
    };

    const generatePdf = () => {
        window.print();
    };

    const handleWordCountChange = (e) => {
        const text = e.target.value;
        const count = text.trim().split(/\s+/).length; // Count the words based on spaces
        setWordCount(count);
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
                                        <h4 className="text-center mb-3">Bingo Generator</h4>
                                        <div className="mb-2">
                                            <label htmlFor="topic" className="form-label">
                                                Topic <span style={{ color: 'red' }}>*</span>
                                            </label>

                                            <input
                                                type="text"
                                                className={`form-control form-control-sm mb-2 ${errors.topic ? "is-invalid" : ""}`}
                                                id="topic"
                                                {...register("topic", {
                                                    required: "Topic is required.",
                                                    pattern: {
                                                        value: /^(?!\s)(?![0-9])[a-zA-Z0-9.,'"-\s]+$/,
                                                        message:
                                                            "The topic must be 1-50 characters long, cannot start with a space, and must not contain special characters.",
                                                    },
                                                })}
                                                placeholder="Enter topic (e.g. Space, Animals)"
                                                onChange={handleWordCountChange}
                                            />
                                            {errors.topic && <div className="invalid-feedback">{errors.topic.message}</div>}
                                            <div className="d-flex justify-content-end mt-1">
                                                <small className={`${wordCount > 50 ? 'text-danger' : 'text-muted'}`}>
                                                    Word count: {wordCount}/50
                                                </small>
                                            </div>

                                            <label htmlFor="num_students" className="form-label">
                                                Number of Students <span style={{ color: 'red' }}>*</span>
                                            </label>
                                            <select
                                                className={`form-select form-select-sm mb-2 ${errors.num_students ? 'is-invalid' : ''}`}
                                                id="num_students"
                                                {...register('num_students', {
                                                    required: 'Please select the number of students.',
                                                })}
                                            >
                                                <option value="">Choose Number of Students</option>
                                                {[...Array(6)].map((_, i) => (
                                                    <option key={i + 5} value={i + 5}>
                                                        {i + 5}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.num_students && <div className="invalid-feedback">{errors.num_students.message}</div>}
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
                                                onClick={() => {
                                                    reset();
                                                    setWordCount(0);
                                                }}
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
                                <div className="container-fluid text-center">
                                    <div className="row gap-4 justify-content-center">
                                        {Object.entries(apiResponse.bingo_cards)
                                            .map(([key, bingoCard], index) => (
                                                Array.isArray(bingoCard) && (
                                                    <div
                                                        id="bingo-container"
                                                        key={index}
                                                        className="col-md-5 col-12 d-flex flex-column border p-3 mb-5"
                                                    >
                                                        <h5 className="mb-4 text-center">
                                                            Name: <span style={nameStyle}></span>
                                                        </h5>
                                                        <div className="d-flex flex-column">
                                                            {bingoCard.map((row, rowIndex) => (
                                                                <div key={rowIndex} className="d-flex">
                                                                    {row.map((word, wordIndex) => (
                                                                        <div
                                                                            key={wordIndex}
                                                                            className="border d-flex justify-content-center align-items-center p-2"
                                                                            style={borderStyles}
                                                                        >
                                                                            <p className="fs-6 text-break">{word}</p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )
                                            ))}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-sm mt-2 mb-3 me-3 no-print" style={btnStyle} onClick={() => {
                                        setApiResponse(null);
                                        setWordCount(0);
                                    }}>
                                        <FaArrowLeft /> Generate More Bingo
                                    </button>
                                    <button
                                        className="btn btn-sm btn-danger mt-2 mb-3 no-print"
                                        onClick={generatePdf}
                                    >
                                        <FaCloudDownloadAlt /> Download PDF
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
