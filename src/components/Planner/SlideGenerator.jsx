import { useState, useRef } from 'react';
import axios from 'axios';
import pptxgen from 'pptxgenjs';
import { FaArrowRight, FaEraser, FaArrowLeft, FaEdit, FaTrashAlt, FaFilePowerpoint } from 'react-icons/fa';
import { FaRegFileLines } from "react-icons/fa6";
import { toast } from 'react-toastify';
import NavBar from '../NavBar';
import Spinner from '../../spinner/Spinner';
import { Modal, Button, Form } from 'react-bootstrap';
import NavBreadcrumb from '../../pages/BreadCrumb/BreadCrumb';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const slideNumbers = ['5', '6', '7', '8', '9', '10'];

const grades = [
    { value: '', label: 'Choose a Grade' },
    { value: 'k', label: 'Kindergarten' },
    ...Array.from({ length: 12 }, (_, i) => ({ value: (i + 1).toString(), label: `${i + 1}th Grade` }))
];

export default function SlideGenerator({ BASE_URL }) {
    const navigate = useNavigate();
    const contentRef = useRef();
    const [apiResponse, setApiResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingPptx, setIsLoadingPptx] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(null);
    const [editFormData, setEditFormData] = useState({ title: '', objective: '' });


    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();

    const titleValue = watch('title', '');
    const wordCount = titleValue.trim().split(/\s+/).filter(Boolean).length;
    const isLimitExceeded = wordCount > 50;

    const objectiveValue = watch('objective', '');
    const objectiveWordCount = objectiveValue.trim().split(/\s+/).filter(Boolean).length;
    const isObjectiveLimitExceeded = objectiveWordCount > 500;


    const breadcrumbItems = [
        { label: 'Main Panel', href: '/ai-tools-for-teachers', active: false },
        { label: 'Planner', href: '/ai-tools-for-teachers?tab=Planner', active: false },
        { label: 'Slide Generator', active: true }
    ];

    const btnStyle = {
        backgroundColor: '#FF683B',
        color: 'white'
    };

    const onSubmit = async (data) => {
        const authToken = Cookies.get('authToken');
        const siteUrl = Cookies.get('site_url');
        const formDataToSend = {
            grade: data.grade,
            topic: data.title.trim(),
            learning_objectives: data.objective.trim(),
            number_of_slides: data.slide_number
        };

        setIsLoading(true);

        try {
            const response = await axios.post(`${BASE_URL}/slide_one`, formDataToSend, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authToken}`,
                    'X-Site-Url': siteUrl
                },
            });
            setApiResponse(response.data);
            reset();
            toast.success('Slide generated successfully!');
        } catch (error) {
            handleApiError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleApiError = (error) => {
        setApiResponse(null);
        if (error.response) {
            const backendError = error.response.data?.error || error.response.data?.message || 'Failed to generate Slides.';
            toast.warning(backendError);
            if (error.response.status === 401) {
                toast.warning('This email has been used on another device. Redirecting to login...');
                Cookies.remove('authToken');
                Cookies.remove('site_url');
                Cookies.remove('Display_name');
                Cookies.remove('user_email');
                localStorage.clear();
                setTimeout(() => navigate('/login'), 2000);
            }
        } else if (error.request) {
            toast.warning('No response from server. Please check your network connection.');
        } else {
            toast.warning(error.message || 'An unexpected error occurred. Please try again.');
        }
    };

    const handleGeneratePptx = async () => {
        if (!apiResponse) return toast.error('No data available to generate PowerPoint.');

        const authToken = Cookies.get('authToken');
        const siteUrl = Cookies.get('site_url');
        setIsLoadingPptx(true);

        try {
            const response = await axios.post(`${BASE_URL}/slide_two`, apiResponse, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authToken}`,
                    'X-Site-Url': siteUrl
                },
            });

            const pptx = new pptxgen();
            response.data.slides.forEach(slideData => {
                const slide = pptx.addSlide();
                slide.addText(slideData.title, { x: 0.5, y: 0.5, fontSize: 24, bold: true, color: '363636' });
                slide.addText(`Objective: ${slideData.objective}`, { x: 0.5, y: 1.5, fontSize: 18, color: '000000' });
                slide.addText(slideData.slide_content, {
                    x: 0.5,
                    y: 2.5,
                    fontSize: 18,
                    color: '000000',
                    wrap: true,
                    valign: 'top',
                    lineSpacingMultiple: 1.2,
                });
            });

            await pptx.writeFile({ fileName: 'GeneratedSlides.pptx' });
            toast.success('PowerPoint generated and downloaded successfully!');
            setApiResponse(null);
            reset();
        } catch (error) {
            toast.error('Failed to generate the PowerPoint. Please try again.');
        } finally {
            setIsLoadingPptx(false);
        }
    };

    const handleEditClick = (slide, index) => {
        setCurrentSlide(index);
        setEditFormData({ title: slide.title, objective: slide.objective });
        setShowModal(true);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const updatedSlides = [...apiResponse.slides];
        updatedSlides[currentSlide] = { ...updatedSlides[currentSlide], ...editFormData };
        setApiResponse(prev => ({ ...prev, slides: updatedSlides }));
        toast.success('Slide updated successfully!');
        setShowModal(false);
    };

    const handleDeleteSlide = (index) => {
        const updatedSlides = [...apiResponse.slides];
        updatedSlides.splice(index, 1);
        setApiResponse(prev => ({ ...prev, slides: updatedSlides }));
        toast.error('Slide deleted successfully!');
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
                    ) : isLoadingPptx ? (
                        <div className="col-md-5 text-center">
                            <Spinner />
                        </div>
                    ) : !apiResponse ? (
                        <>
                            <NavBreadcrumb items={breadcrumbItems} />
                            <div className="col-md-5 border border-4 rounded-3 pt-4 pb-3 ps-5 pe-5 shadow p-3 bg-body rounded no-print">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h4 className="text-center mb-3">Slide Generator</h4>
                                    <label className="form-label">Grade *</label>
                                    <select className="form-select form-select-sm mb-2" {...register('grade', { required: true })}>
                                        {grades.map((grade, index) => (
                                            <option key={index} value={grade.value}>{grade.label}</option>
                                        ))}
                                    </select>
                                    {errors.grade && (
                                        <div className="form-text text-danger mb-1">Grade is required.</div>
                                    )}
                                    <label className="form-label">Title *</label>
                                    <input
                                        className={`form-control form-control-sm mb-2 ${isLimitExceeded ? 'is-invalid' : ''}`}
                                        placeholder="e.g. The Wildlife of the United States"
                                        {
                                        ...register('title', {
                                            required: 'Title is required.',
                                            validate: {
                                                maxWords: (value) => {
                                                    const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
                                                    return wordCount <= 50 || 'Title must be 50 words or fewer.';
                                                }
                                            },
                                            pattern: {
                                                value: /^(?!\s*$)[a-zA-Z0-9.,'"!?()\- ]+$/,
                                                message: 'Title contains invalid characters or is only whitespace.'
                                            }
                                        })
                                        }
                                    />
                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                        <span className={`form-text ${errors.title ? 'text-danger' : 'text-muted'}`}>
                                            {errors.title?.message || ''}
                                        </span>
                                        <span className={`form-text ${isLimitExceeded ? 'text-danger fw-bold' : 'text-muted'}`}>
                                            {wordCount} / 50 words
                                        </span>
                                    </div>
                                    <label className="form-label">Objective *</label>
                                    <textarea
                                        rows={4}
                                        className={`form-control form-control-sm mb-1 ${errors.objective ? 'is-invalid' : ''}`}
                                        placeholder="e.g. Discover the diverse wildlife found in different regions of America. Learn about animals like the American bison, bald eagle, and grizzly bear. Explore the importance of preserving habitats and biodiversity."
                                        id="objective"
                                        {...register('objective', {
                                            required: 'Objective is required.',
                                            validate: {
                                                maxWords: (value) => {
                                                    const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
                                                    return wordCount <= 500 || 'Objective must be 500 words or fewer.';
                                                }
                                            },
                                            pattern: {
                                                value: /^(?!\s*$)[a-zA-Z0-9.,'"!?()\-\s]+$/,
                                                message: 'Objective contains invalid characters or is only whitespace.'
                                            }
                                        })}
                                    />
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span className={`form-text ${errors.objective ? 'text-danger' : 'text-muted'}`}>
                                            {errors.objective?.message || ''}
                                        </span>
                                        <span className={`form-text ${objectiveWordCount > 500 ? 'text-danger fw-bold' : 'text-muted'}`}>
                                            {objectiveWordCount} / 500 words
                                        </span>
                                    </div>

                                    <label className="form-label">Number of Slides *</label>
                                    <select className="form-select form-select-sm mb-3" {...register('slide_number', { required: true })}>
                                        <option value="">Choose the Number of Slides</option>
                                        {slideNumbers.map((slide, index) => (
                                            <option key={index} value={slide}>{slide}</option>
                                        ))}
                                    </select>
                                    {errors.grade && (
                                        <div className="form-text text-danger mb-1">Slide number is required.</div>
                                    )}
                                    <strong className="text-danger d-block mb-1">Note:</strong>
                                    <ul className="text-muted small ps-3 mb-0">
                                        <li className="mb-1 d-flex align-items-start flex-wrap">
                                            <FaEdit className="me-2 text-primary flex-shrink-0" />
                                            <span className="fw-bold text-dark">Title Limit:</span>
                                            <span className="flex-grow-1 ms-1">
                                                Must not exceed <span className="text-danger fw-semibold">50 words</span>.
                                            </span>
                                        </li>
                                        <li className="mb-1 d-flex align-items-start flex-wrap">
                                            <FaRegFileLines className="me-2 text-danger flex-shrink-0" />
                                            <span className="fw-bold text-dark">Objective Limit:</span>
                                            <span className="flex-grow-1 ms-1">
                                                Must not exceed <span className="text-danger fw-semibold">500 words</span>.
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="d-flex justify-content-between mt-3">
                                        <button type="button" className="btn btn-sm btn-danger" onClick={() => reset()}>
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
                        <div className="mt-3" ref={contentRef}>
                            <h3 className="text-center mb-4">Generated Slides</h3>
                            <div className="row justify-content-center">
                                {apiResponse.slides.map((slide, index) => (
                                    <div key={index} className="col-md-10">
                                        <div className="card shadow-sm border rounded mb-5 p-0">
                                            <div className="card-body d-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <FaFilePowerpoint size={50} className="me-3 text-danger" />
                                                    <div>
                                                        <h5>Title: {slide.title}</h5>
                                                        <p><strong>Objective: </strong>{slide.objective}</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <button className="btn btn-sm p-3 m-2 rounded-pill text-info" onClick={() => handleEditClick(slide, index)}>
                                                        <FaEdit size={22} />
                                                    </button>
                                                    <button className="btn btn-sm p-3 m-2 rounded-pill text-danger" onClick={() => handleDeleteSlide(index)}>
                                                        <FaTrashAlt size={22} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center">
                                <button className="btn btn-sm mt-4 mb-3 me-2" style={btnStyle} onClick={() => setApiResponse(null)}>
                                    <FaArrowLeft /> Generate Another Slide
                                </button>
                                <button className="btn btn-sm mt-4 mb-3 btn-success" onClick={handleGeneratePptx} disabled={isLoadingPptx}>
                                    {isLoadingPptx ? <Spinner /> : 'Generate PowerPoint'} <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Form onSubmit={handleEditSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Slide</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Title *</Form.Label>
                            <Form.Control type="text" name="title" value={editFormData.title} onChange={handleEditChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Objective *</Form.Label>
                            <Form.Control as="textarea" rows={4} name="objective" id="edit-objective" value={editFormData.objective} onChange={handleEditChange} required />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" type="submit">Save Changes</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}
