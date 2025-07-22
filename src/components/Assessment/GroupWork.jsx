import React, { useState, useRef } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';
import { FaArrowRight, FaEraser, FaArrowLeft, FaCloudDownloadAlt, FaEdit } from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Spinner from '../../spinner/Spinner';
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

export default function GroupWork({ BASE_URL }) {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const contentRef = useRef();

  const btnStyle = { backgroundColor: '#FF683B', color: 'white' };
  const cancelStyle = { backgroundColor: '#dc3545', color: 'white' };
  const pdfStyle = { backgroundColor: '#198754', color: 'white' };

  const onSubmit = async (data) => {

    // Retrieve cookies for headers
    const authToken = Cookies.get('authToken');
    const siteUrl = Cookies.get('site_url');

    setIsLoading(true);
    setApiResponse(null);

    try {
      const response = await axios.post(
        `${BASE_URL}/group_work`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
            'X-Site-Url': siteUrl
          }
        }
      );
      setApiResponse(response.data);
      toast.success('Group work created successfully!');
      reset();
    } catch (error) {
      setApiResponse(null);
      if (error.response) {
        const backendError = error.response.data?.error || error.response.data?.message || 'Failed to generate group work.';
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
        toast.warning('No response from server. Please check your network connection.');
      } else {
        toast.warning(error.message || 'An unexpected error occurred. Please try again.');
      }
    }
    finally {
      setIsLoading(false);
    }
  };

  const generatePdf = () => {
    window.print();
  };

  const breadcrumbItems = [
    { label: 'Main Panel', href: '/ai-tools-for-teachers', active: false },
    { label: 'Assessment', href: '/ai-tools-for-teachers?tab=Assessment', active: false },
    { label: 'Groupwork', active: true }
  ];

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
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="text-center mb-3">Group Work Generator</h4>

                    {/* Subject */}
                    <div className="mb-2">
                      <label htmlFor="subject" className="form-label">
                        Subject <span style={{ color: 'red' }}>*</span>
                      </label>
                      <select
                        className={`form-select form-select-sm mb-2 ${errors.subject ? 'is-invalid' : ''}`}
                        id="subject"
                        {...register('subject', { required: 'Subject is required' })}
                      >
                        {subjects.map((element, index) => (
                          <option key={index} value={element.value}>
                            {element.label}
                          </option>
                        ))}
                      </select>
                      {errors.subject && <div className="invalid-feedback">{errors.subject.message}</div>}

                      {/* Grade */}
                      <label htmlFor="grade" className="form-label">
                        Grade <span style={{ color: 'red' }}>*</span>
                      </label>
                      <select
                        className={`form-select form-select-sm mb-2 ${errors.grade ? 'is-invalid' : ''}`}
                        id="grade"
                        {...register('grade', { required: 'Grade is required' })}
                      >
                        {grades.map((grade, index) => (
                          <option key={index} value={grade.value}>
                            {grade.label}
                          </option>
                        ))}
                      </select>
                      {errors.grade && <div className="invalid-feedback">{errors.grade.message}</div>}

                      {/* Topic */}
                      <label htmlFor="topic" className="form-label">
                        Topic <span style={{ color: 'red' }}>*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control form-control-sm mb-2 ${errors.topic ? 'is-invalid' : ''}`}
                        id="topic"
                        placeholder="Enter topic (e.g. Force, Algebra, or Ancient Egypt)"
                        {...register('topic', {
                          required: 'Topic is required',
                          pattern: {
                            value: /^(?! )[a-zA-Z0-9 ]{1,50}$/,
                            message:
                              'The topic must be 1-50 characters long, cannot start with a space, and must not contain special characters.'
                          }
                        })}
                      />
                      {errors.topic && <div className="invalid-feedback">{errors.topic.message}</div>}


                      {/* Learning Objective */}
                      <label htmlFor="learning_objective" className="form-label">
                        Learning Objective <span style={{ color: 'red' }}>*</span>
                      </label>
                      <textarea
                        className={`form-control form-control-sm mb-2 ${errors.learning_objective ? 'is-invalid' : ''}`}
                        id="learning_objective"
                        placeholder="Enter learning objectives (e.g. Objectives focus on describing movement, observing changes in motion under varying forces, and understanding how mass affects the force needed for motion.)"
                        rows={3}
                        {...register('learning_objective', {
                          required: 'Learning objective is required.',
                          validate: {
                            maxWords: (value) => {
                              const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
                              return wordCount <= 250 || 'Learning objective must be 250 words or fewer.';
                            },
                            hasLetter: (value) =>
                              /[a-zA-Z]/.test(value) || 'Learning objective must contain at least one letter.',
                            notOnlyPunctuation: (value) =>
                              /[a-zA-Z0-9]/.test(value) || 'Objective cannot be only punctuation or empty symbols.',
                          },
                          pattern: {
                            value: /^(?!\s*$)[a-zA-Z0-9.,'"!?()\-\s]+$/,
                            message: 'Learning objective contains invalid characters or is only whitespace.',
                          }
                        })}
                      />
                      {errors.learning_objective && (
                        <div className="invalid-feedback">{errors.learning_objective.message}</div>
                      )}


                      {/* Group Size */}
                      <label htmlFor="group_size" className="form-label">
                        Group Size <span style={{ color: 'red' }}>*</span>
                      </label>
                      <select
                        className={`form-select form-select-sm mb-2 ${errors.group_size ? 'is-invalid' : ''}`}
                        id="group_size"
                        {...register('group_size', { required: 'Group size is required' })}
                      >
                        <option value="">Choose Group Size</option>
                        {[2, 3, 4, 5].map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                      {errors.group_size && <div className="invalid-feedback">{errors.group_size.message}</div>}
                    </div>
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
                          Must not exceed <span className="text-danger fw-semibold">250 words</span>.
                        </span>
                      </li>
                    </ul>
                    <div className="d-flex justify-content-between mt-3">
                      <button type="button" className="btn btn-sm" style={cancelStyle} onClick={() => reset()} disabled={isLoading}>
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
              <div className="mt-3" id="main-btn">
                {renderGroupWork(apiResponse)}
                <div className="text-center">
                  <button className="btn btn-sm mt-2 mb-3 me-2 no-print" style={btnStyle} onClick={() => setApiResponse(null)}>
                    <FaArrowLeft /> Generate Another Group Work
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm mt-2 mb-3 me-2 no-print"
                    style={pdfStyle}
                    onClick={generatePdf}
                  >
                    <FaCloudDownloadAlt /> Download Group Work
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
const renderGroupWork = (apiResponse) => {
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
    <div className="container-fluid mt-3 mb-2 ps-3 pe-2 print-content">
      <div id="headerContent" className="section">
        <div className="d-flex justify-content-between mt-5 mb-5">
          <h5>Name : <span style={nameStyle}></span></h5>
          <h5 className="me-3">Date : <span style={dateStyle}></span></h5>
        </div>
      </div>
      <p><strong>Subject:</strong> {apiResponse.subject}</p>
      <p><strong>Grade Level:</strong> {apiResponse.grade_level}</p>
      <p><strong>Topic:</strong> {apiResponse.topic}</p>
      <p><strong>Learning Objective:</strong> {apiResponse.learning_objective}</p>
      <p><strong>Group Size:</strong> {apiResponse.group_size}</p>

      <h6><strong>Roles:</strong></h6>
      <ul>
        {apiResponse.roles.map((role, index) => (
          <li key={index}><strong>{role}:</strong> {apiResponse.tasks.find(task => task.role === role)?.task || "No specific task assigned"}</li>
        ))}
      </ul>

      <h6><strong>Collaboration Emphasis:</strong></h6>
      <p>{apiResponse.collaboration_emphasis}</p>
    </div>
  );
};
