// // import React, { useState, useRef } from 'react';
// // import axios from 'axios';
// // import NavBar from '../NavBar';
// // import { FaArrowRight, FaEraser, FaArrowLeft, FaRegFilePdf, FaEdit} from "react-icons/fa";
// // import { toast } from 'react-toastify';
// // import Spinner from '../../spinner/Spinner';
// // import NavBreadcrumb from '../../pages/BreadCrumb/BreadCrumb';
// // import Cookies from 'js-cookie';
// // import { useNavigate } from 'react-router-dom';

// // export default function TongueTwister({ BASE_URL }) {
// //     const navigate = useNavigate();
// //     const btnStyle = { backgroundColor: '#FF683B', color: 'white' };
// //     const cancelStyle = { backgroundColor: '#dc3545', color: 'white' };
// //     const pdfStyle = {
// //         backgroundColor: '#198754',
// //         color: 'white',
// //     };

// //     const [formData, setFormData] = useState({
// //         topic: '',
// //         number_of_twisters: ''
// //     });

// //     const numberofTwisters = [
// //         { value: "", label: "Choose Number of Twisters" },
// //         ...Array.from({ length: 6 }, (_, i) => ({ value: i + 5, label: `${i + 5}` }))
// //     ];

// //     const breadcrumbItems = [
// //         { label: 'Main Panel', href: '/ai-tools-for-teachers', active: false },
// //         { label: 'Gamification', href: '/ai-tools-for-teachers?tab=Gamification', active: false },
// //         { label: 'Tongue Twister', active: true }
// //     ];

// //     const [apiResponse, setApiResponse] = useState(null);
// //     const [isLoading, setIsLoading] = useState(false);
// //     const contentRef = useRef();

// //     // Handle form data changes
// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData({
// //             ...formData,
// //             [name]: value,
// //         });
// //     };

// //     // Handle form submission
// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         const { topic, number_of_twisters } = formData;

// //         // Check if all required fields are filled
// //         if (!topic || !number_of_twisters) {
// //             toast.warning('Please fill in all required fields.');
// //             return;
// //         }

// //         const trimmed = topic.trim();
// //         const isValidText = trimmed.length <= 50 &&
// //             /[a-zA-Z]/.test(trimmed) && // must contain at least one letter
// //             /^[a-zA-Z0-9.,'"\-\s!?()]+$/.test(trimmed); // allow specific special characters

// //         if (!isValidText) {
// //             toast.warning("Topic must be 50 characters or fewer, contain at least one letter, and only use standard punctuation.");
// //         }

// //         // Create FormData object for sending form-encoded data
// //         const formDataToSend = new FormData();
// //         formDataToSend.append('topic', topic);
// //         formDataToSend.append('number_of_twisters', number_of_twisters);

// //         // Retrieve cookies for headers
// //         const authToken = Cookies.get('authToken');
// //         const siteUrl = Cookies.get('site_url');

// //         setIsLoading(true);

// //         try {
// //             const response = await axios.post(`${BASE_URL}/generate-tongue-twisters`, formDataToSend, {
// //                 headers: {
// //                     Authorization: `Bearer ${authToken}`,
// //                     'X-Site-Url': siteUrl
// //                 },
// //             });
// //             setApiResponse(response.data);
// //             setFormData({
// //                 topic: '',
// //                 number_of_twisters: ''
// //             });
// //             toast.success('Tongue Twister generated successfully!');
// //         } catch (error) {
// //             setApiResponse(null);
// //             if (error.response) {
// //                 const backendError = error.response.data?.error || error.response.data?.message || 'Failed to generate jokes.';
// //                 toast.error(backendError);
// //                 if (error.response.status === 401) {
// //                     toast.warning('This email has been used on another device. Redirecting to login...');

// //                     Cookies.remove('authToken');
// //                     Cookies.remove('site_url');
// //                     Cookies.remove('Display_name');
// //                     Cookies.remove('user_email');
// //                     localStorage.removeItem('authToken');
// //                     localStorage.removeItem('authUser');

// //                     setTimeout(() => {
// //                         navigate('/login');
// //                         window.location.reload();
// //                     }, 2000);
// //                 }
// //             } else if (error.request) {
// //                 toast.error('No response from server. Please check your network connection.');
// //             } else {
// //                 toast.error(error.message || 'An unexpected error occurred. Please try again.');
// //             }
// //         }
// //         finally {
// //             setIsLoading(false);
// //         }
// //     };

// //     // Handle print action
// //     const handlePrint = () => {
// //         window.print();
// //     };

// //     return (
// //         <>
// //             <NavBar id="main-nav" />
// //             <div className="container-fluid">
// //                 <div className="row justify-content-center mt-5">

// //                     {isLoading ? (
// //                         <div className="col-md-5 text-center">
// //                             <Spinner />
// //                         </div>
// //                     ) : (
// //                         !apiResponse ? (
// //                             <>
// //                                 <NavBreadcrumb items={breadcrumbItems} />
// //                                 <div className="col-md-5 border border-4 rounded-3 pt-4 pb-3 ps-5 pe-5 shadow p-3 bg-body rounded no-print">
// //                                     <form onSubmit={handleSubmit}>
// //                                         <h4 className="text-center mb-3">Tongue Twister Generator</h4>
// //                                         <div className="mb-2">
// //                                             <label htmlFor="topic" className="form-label">
// //                                                 Topic <span style={{ color: 'red' }}>*</span>
// //                                             </label>
// //                                             <input
// //                                                 type="text"
// //                                                 className="form-control form-control-sm mb-2"
// //                                                 id="topic"
// //                                                 name="topic"
// //                                                 value={formData.topic}
// //                                                 onChange={handleChange}
// //                                                 disabled={isLoading}
// //                                                 placeholder="Enter topic (e.g. Force, Algebra, or Ancient Egypt)"
// //                                             />

// //                                             <label htmlFor="number_of_twisters" className="form-label">
// //                                                 Number of Twisters <span style={{ color: 'red' }}>*</span>
// //                                             </label>
// //                                             <select
// //                                                 className="form-select form-select-sm mb-2"
// //                                                 id="number_of_twisters"
// //                                                 name="number_of_twisters"
// //                                                 value={formData.number_of_twisters}
// //                                                 onChange={handleChange}
// //                                                 disabled={isLoading}
// //                                             >
// //                                                 {numberofTwisters.map((option) => (
// //                                                     <option key={option.value} value={option.value}>
// //                                                         {option.label}
// //                                                     </option>
// //                                                 ))}
// //                                             </select>
// //                                         </div>
// //                                         <div>
// //                                             <strong className="text-danger d-block mb-1">Note:</strong>
// //                                             <ul className="text-muted small ps-3 mb-0">
// //                                                 <li className="mb-1 d-flex align-items-start flex-wrap">
// //                                                     <FaEdit className="me-2 text-primary flex-shrink-0" />
// //                                                     <span className="fw-bold text-dark">Topic Limit:</span>
// //                                                     <span className="flex-grow-1 ms-1">
// //                                                         Must not exceed <span className="text-danger fw-semibold">50 words</span>.
// //                                                     </span>
// //                                                 </li>
// //                                             </ul>
// //                                         </div>


// //                                         <div className="d-flex justify-content-between mt-3">
// //                                             <button
// //                                                 type="button"
// //                                                 className="btn btn-sm"
// //                                                 style={cancelStyle}
// //                                                 onClick={() => setFormData({
// //                                                     topic: '',
// //                                                     number_of_twisters: ''
// //                                                 })}
// //                                                 disabled={isLoading}
// //                                             >
// //                                                 <FaEraser /> Reset
// //                                             </button>
// //                                             <button type="submit" className="btn btn-sm" style={btnStyle} disabled={isLoading}>
// //                                                 Generate <FaArrowRight />
// //                                             </button>
// //                                         </div>
// //                                     </form>
// //                                 </div>
// //                             </>
// //                         ) : (
// //                             <div className="mt-3" ref={contentRef} id="main-btn">
// //                                 {renderTongueTwister(apiResponse)}
// //                                 <button className="btn btn-sm mt-2 mb-3 me-2 no-print" style={btnStyle} onClick={() => setApiResponse(null)}>
// //                                     <FaArrowLeft /> Generate Another Tongue Twister
// //                                 </button>
// //                                 <button className="btn btn-sm mt-2 mb-3 no-print" style={pdfStyle} onClick={handlePrint}>
// //                                     <FaRegFilePdf /> Download PDF
// //                                 </button>
// //                             </div>
// //                         )
// //                     )}
// //                 </div>
// //             </div>
// //         </>
// //     );
// // }

// // const renderTongueTwister = (tongueTwisterData) => {
// //     return (
// //         <div className="container-fluid mt-3 mb-2 ps-3 pe-2 print-content">
// //             <div className='mt-4'>
// //                 <div className="mb-5">
// //                     <h5>Topic: {tongueTwisterData.topic}</h5>
// //                     <h5>Note: {tongueTwisterData.note}</h5>
// //                 </div>
// //                 {/* Tongue Twister List */}
// //                 <section className='mb-5'>
// //                     <h4>Tongue Twister List:</h4>
// //                     <table className="table table-bordered" style={{ width: 'auto' }}>
// //                         <thead>
// //                             <tr>
// //                                 <th>S.N</th>
// //                                 <th>Tongue Twister</th>
// //                             </tr>
// //                         </thead>
// //                         <tbody>
// //                             {tongueTwisterData.tongue_twisters.map((twister, index) => (
// //                                 <tr key={index}>
// //                                     <td>{index + 1}</td>
// //                                     <td>{twister[`tongue_twister_${index + 1}`]}</td>
// //                                 </tr>
// //                             ))}
// //                         </tbody>
// //                     </table>
// //                 </section>
// //             </div>
// //         </div>
// //     );
// // };
// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import NavBar from '../NavBar';
// import { FaArrowRight, FaEraser, FaArrowLeft, FaRegFilePdf, FaEdit } from "react-icons/fa";
// import { toast } from 'react-toastify';
// import Spinner from '../../spinner/Spinner';
// import NavBreadcrumb from '../../pages/BreadCrumb/BreadCrumb';
// import Cookies from 'js-cookie';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';

// export default function TongueTwister({ BASE_URL }) {
//     const navigate = useNavigate();
//     const btnStyle = { backgroundColor: '#FF683B', color: 'white' };
//     const cancelStyle = { backgroundColor: '#dc3545', color: 'white' };
//     const pdfStyle = { backgroundColor: '#198754', color: 'white' };

//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//         reset
//     } = useForm();

//     const topicInput = watch('topic') || '';
//     const wordCount = topicInput.trim().split(/\s+/).filter(Boolean).length;

//     const numberofTwisters = [
//         { value: "", label: "Choose Number of Twisters" },
//         ...Array.from({ length: 6 }, (_, i) => ({ value: i + 5, label: `${i + 5}` }))
//     ];

//     const breadcrumbItems = [
//         { label: 'Main Panel', href: '/ai-tools-for-teachers', active: false },
//         { label: 'Gamification', href: '/ai-tools-for-teachers?tab=Gamification', active: false },
//         { label: 'Tongue Twister', active: true }
//     ];

//     const [apiResponse, setApiResponse] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const contentRef = useRef();

//     const onSubmit = async (data) => {
//         const { topic, number_of_twisters } = data;

//         const formDataToSend = new FormData();
//         formDataToSend.append('topic', topic);
//         formDataToSend.append('number_of_twisters', number_of_twisters);

//         const authToken = Cookies.get('authToken');
//         const siteUrl = Cookies.get('site_url');

//         setIsLoading(true);

//         try {
//             const response = await axios.post(`${BASE_URL}/generate-tongue-twisters`, formDataToSend, {
//                 headers: {
//                     Authorization: `Bearer ${authToken}`,
//                     'X-Site-Url': siteUrl
//                 },
//             });
//             setApiResponse(response.data);
//             reset({ topic: '', number_of_twisters: '' });
//             toast.success('Tongue Twister generated successfully!');
//         } catch (error) {
//             setApiResponse(null);
//             if (error.response) {
//                 const backendError = error.response.data?.error || error.response.data?.message || 'Failed to generate jokes.';
//                 toast.error(backendError);
//                 if (error.response.status === 401) {
//                     toast.warning('This email has been used on another device. Redirecting to login...');
//                     Cookies.remove('authToken');
//                     Cookies.remove('site_url');
//                     Cookies.remove('Display_name');
//                     Cookies.remove('user_email');
//                     localStorage.removeItem('authToken');
//                     localStorage.removeItem('authUser');
//                     setTimeout(() => {
//                         navigate('/login');
//                         window.location.reload();
//                     }, 2000);
//                 }
//             } else if (error.request) {
//                 toast.error('No response from server. Please check your network connection.');
//             } else {
//                 toast.error(error.message || 'An unexpected error occurred. Please try again.');
//             }
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
//             <div className="container-fluid">
//                 <div className="row justify-content-center mt-5">
//                     {isLoading ? (
//                         <div className="col-md-5 text-center">
//                             <Spinner />
//                         </div>
//                     ) : (
//                         !apiResponse ? (
//                             <>
//                                 <NavBreadcrumb items={breadcrumbItems} />
//                                 <div className="col-md-5 border border-4 rounded-3 pt-4 pb-3 ps-5 pe-5 shadow p-3 bg-body rounded no-print">
//                                     <form onSubmit={handleSubmit(onSubmit)}>
//                                         <h4 className="text-center mb-3">Tongue Twister Generator</h4>
//                                         <div className="mb-2">
//                                             <label htmlFor="topic" className="form-label">
//                                                 Topic <span style={{ color: 'red' }}>*</span>
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 className={`form-control form-control-sm mb-1 ${errors.topic ? 'is-invalid' : ''}`}
//                                                 id="topic"
//                                                 placeholder="Enter topic (e.g. Force, Algebra, or Ancient Egypt)"
//                                                 disabled={isLoading}
//                                                 {...register('topic', {
//                                                     required: 'Topic is required',
//                                                     validate: {
//                                                         wordLimit: value => {
//                                                             const words = value.trim().split(/\s+/).filter(Boolean);
//                                                             return words.length <= 50 || 'Topic must be 50 words or fewer';
//                                                         },
//                                                         hasLetter: value =>
//                                                             /[a-zA-Z]/.test(value) || 'Topic must contain at least one letter',
//                                                         validCharacters: value =>
//                                                             /^[a-zA-Z0-9.,'"’‘“”!?()\-\s]+$/.test(value) ||
//                                                             'Only standard punctuation is allowed',
//                                                     }
//                                                 })}
//                                             />
//                                             {errors.topic && (
//                                                 <div className="invalid-feedback d-block">{errors.topic.message}</div>
//                                             )}
//                                             <div className="d-flex justify-content-end mt-1">
//                                                 <small className={`${wordCount > 50 ? 'text-danger' : 'text-muted'}`}>
//                                                     Word count: {wordCount}/50
//                                                 </small>
//                                             </div>

//                                             <label htmlFor="number_of_twisters" className="form-label mt-2">
//                                                 Number of Twisters <span style={{ color: 'red' }}>*</span>
//                                             </label>
//                                             <select
//                                                 className={`form-select form-select-sm mb-2 ${errors.number_of_twisters ? 'is-invalid' : ''}`}
//                                                 id="number_of_twisters"
//                                                 disabled={isLoading}
//                                                 {...register('number_of_twisters', {
//                                                     required: 'Please choose a number'
//                                                 })}
//                                             >
//                                                 {numberofTwisters.map((option) => (
//                                                     <option key={option.value} value={option.value}>
//                                                         {option.label}
//                                                     </option>
//                                                 ))}
//                                             </select>
//                                             {errors.number_of_twisters && (
//                                                 <div className="invalid-feedback d-block">{errors.number_of_twisters.message}</div>
//                                             )}
//                                         </div>

//                                         <div>
//                                             <strong className="text-danger d-block mb-1">Note:</strong>
//                                             <ul className="text-muted small ps-3 mb-0">
//                                                 <li className="mb-1 d-flex align-items-start flex-wrap">
//                                                     <FaEdit className="me-2 text-primary flex-shrink-0" />
//                                                     <span className="fw-bold text-dark">Topic Limit:</span>
//                                                     <span className="flex-grow-1 ms-1">
//                                                         Must not exceed <span className="text-danger fw-semibold">50 words</span>.
//                                                     </span>
//                                                 </li>
//                                             </ul>
//                                         </div>

//                                         <div className="d-flex justify-content-between mt-3">
//                                             <button
//                                                 type="button"
//                                                 className="btn btn-sm"
//                                                 style={cancelStyle}
//                                                 onClick={() => reset({ topic: '', number_of_twisters: '' })}
//                                                 disabled={isLoading}
//                                             >
//                                                 <FaEraser /> Reset
//                                             </button>
//                                             <button type="submit" className="btn btn-sm" style={btnStyle} disabled={isLoading}>
//                                                 Generate <FaArrowRight />
//                                             </button>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </>
//                         ) : (
//                             <div className="mt-3" ref={contentRef} id="main-btn">
//                                 {renderTongueTwister(apiResponse)}
//                                 <button className="btn btn-sm mt-2 mb-3 me-2 no-print" style={btnStyle} onClick={() => setApiResponse(null)}>
//                                     <FaArrowLeft /> Generate Another Tongue Twister
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

// const renderTongueTwister = (tongueTwisterData) => {
//     return (
//         <div className="container-fluid mt-3 mb-2 ps-3 pe-2 print-content">
//             <div className='mt-4'>
//                 <div className="mb-5">
//                     <h5>Topic: {tongueTwisterData.topic}</h5>
//                     <h5>Note: {tongueTwisterData.note}</h5>
//                 </div>
//                 <section className='mb-5'>
//                     <h4>Tongue Twister List:</h4>
//                     <table className="table table-bordered" style={{ width: 'auto' }}>
//                         <thead>
//                             <tr>
//                                 <th>S.N</th>
//                                 <th>Tongue Twister</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {tongueTwisterData.tongue_twisters.map((twister, index) => (
//                                 <tr key={index}>
//                                     <td>{index + 1}</td>
//                                     <td>{twister[`tongue_twister_${index + 1}`]}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </section>
//             </div>
//         </div>
//     );
// };
import React, { useState, useRef } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';
import { FaArrowRight, FaEraser, FaArrowLeft, FaRegFilePdf, FaEdit } from "react-icons/fa";
import { toast } from 'react-toastify';
import Spinner from '../../spinner/Spinner';
import NavBreadcrumb from '../../pages/BreadCrumb/BreadCrumb';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function TongueTwister({ BASE_URL }) {
    const navigate = useNavigate();
    const btnStyle = { backgroundColor: '#FF683B', color: 'white' };
    const cancelStyle = { backgroundColor: '#dc3545', color: 'white' };
    const pdfStyle = { backgroundColor: '#198754', color: 'white' };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
        setValue
    } = useForm({
        defaultValues: {
            topic: '',
            number_of_twisters: ''
        }
    });

    const topicInput = watch('topic') || '';
    const wordCount = topicInput.trim() === '' ? 0 : topicInput.trim().split(/\s+/).length;

    const numberofTwisters = [
        { value: "", label: "Choose Number of Twisters" },
        ...Array.from({ length: 6 }, (_, i) => ({ value: i + 5, label: `${i + 5}` }))
    ];

    const breadcrumbItems = [
        { label: 'Main Panel', href: '/ai-tools-for-teachers', active: false },
        { label: 'Gamification', href: '/ai-tools-for-teachers?tab=Gamification', active: false },
        { label: 'Tongue Twister', active: true }
    ];

    const [apiResponse, setApiResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const contentRef = useRef();

    const onSubmit = async (data) => {
        const { topic, number_of_twisters } = data;

        const formDataToSend = new FormData();
        formDataToSend.append('topic', topic);
        formDataToSend.append('number_of_twisters', number_of_twisters);

        const authToken = Cookies.get('authToken');
        const siteUrl = Cookies.get('site_url');

        setIsLoading(true);

        try {
            const response = await axios.post(`${BASE_URL}/generate-tongue-twisters`, formDataToSend, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'X-Site-Url': siteUrl
                },
            });
            setApiResponse(response.data);
            reset(); // Clear the form and reset word count
            toast.success('Tongue Twister generated successfully!');
        } catch (error) {
            setApiResponse(null);
            setValue('topic', topic); // restore values on error
            setValue('number_of_twisters', number_of_twisters);

            if (error.response) {
                const backendError = error.response.data?.error || error.response.data?.message || 'Failed to generate tongue twisters.';
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

    const handlePrint = () => window.print();

    return (
        <>
            <NavBar id="main-nav" />
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
                                <div className="col-md-5 border border-4 rounded-3 pt-4 pb-3 ps-5 pe-5 shadow bg-body no-print">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <h4 className="text-center mb-3">Tongue Twister Generator</h4>
                                        <div className="mb-2">
                                            <label htmlFor="topic" className="form-label">
                                                Topic <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                id="topic"
                                                type="text"
                                                className={`form-control form-control-sm mb-1 ${errors.topic ? 'is-invalid' : ''}`}
                                                placeholder="Enter topic (e.g. Force, Algebra, or Ancient Egypt)"
                                                disabled={isLoading}
                                                {...register('topic', {
                                                    required: 'Topic is required',
                                                    validate: {
                                                        wordLimit: value => {
                                                            const trimmed = value.trim().replace(/\s+/g, ' ');
                                                            const words = trimmed.length === 0 ? [] : trimmed.split(' ');
                                                            return words.length <= 50 || 'Topic must be 50 words or fewer';
                                                        },
                                                        hasLetter: value =>
                                                            /[a-zA-Z]/.test(value) || 'Topic must contain at least one letter',
                                                        validCharacters: value =>
                                                            /^[a-zA-Z0-9.,'"’‘“”!?()\-\s]+$/.test(value) ||
                                                            'Only standard punctuation is allowed',
                                                    }
                                                })}
                                            />
                                            {errors.topic && (
                                                <div className="invalid-feedback d-block">{errors.topic.message}</div>
                                            )}

                                            <div className="d-flex justify-content-end mt-1">
                                                <small className={`${wordCount > 50 ? 'text-danger' : 'text-muted'}`}>
                                                    Word count: {wordCount}/50
                                                </small>
                                            </div>

                                            <label htmlFor="number_of_twisters" className="form-label mt-2">
                                                Number of Twisters <span className="text-danger">*</span>
                                            </label>
                                            <select
                                                id="number_of_twisters"
                                                className={`form-select form-select-sm mb-2 ${errors.number_of_twisters ? 'is-invalid' : ''}`}
                                                disabled={isLoading}
                                                {...register('number_of_twisters', {
                                                    required: 'Please choose a number'
                                                })}
                                            >
                                                {numberofTwisters.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.number_of_twisters && (
                                                <div className="invalid-feedback d-block">{errors.number_of_twisters.message}</div>
                                            )}
                                        </div>
                                        <div>
                                            <strong className="text-danger d-block mb-1">Note:</strong>
                                            <ul className="text-muted small ps-3 mb-0">
                                                <li className="mb-1 d-flex align-items-start flex-wrap">
                                                    <FaEdit className="me-2 text-primary flex-shrink-0" />
                                                    <span className="fw-bold text-dark">Topic Limit:</span>
                                                    <span className="flex-grow-1 ms-1">
                                                        Must not exceed <span className="text-danger fw-semibold">50 words</span>.
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
                        ) : (
                            <div className="mt-3" ref={contentRef} id="main-btn">
                                {renderTongueTwister(apiResponse)}
                                <button className="btn btn-sm mt-2 mb-3 me-2 no-print" style={btnStyle} onClick={() => setApiResponse(null)}>
                                    <FaArrowLeft /> Generate Another Tongue Twister
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

const renderTongueTwister = (tongueTwisterData) => {
    return (
        <div className="container-fluid mt-3 mb-2 ps-3 pe-2 print-content">
            <div className='mt-4'>
                <div className="mb-5">
                    <h5>Topic: {tongueTwisterData.topic}</h5>
                    <h5>Note: {tongueTwisterData.note}</h5>
                </div>
                <section className='mb-5'>
                    <h4>Tongue Twister List:</h4>
                    <table className="table table-bordered" style={{ width: 'auto' }}>
                        <thead>
                            <tr>
                                <th>S.N</th>
                                <th>Tongue Twister</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tongueTwisterData.tongue_twisters.map((twister, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{twister[`tongue_twister_${index + 1}`]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
};
