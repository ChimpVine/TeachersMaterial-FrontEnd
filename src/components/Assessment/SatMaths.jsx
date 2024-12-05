import React, { useState, useRef } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';
import { FaArrowRight, FaEraser, FaArrowLeft, FaCloudDownloadAlt } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Spinner from '../../spinner/Spinner';
import NavBreadcrumb from '../../pages/BreadCrumb/BreadCrumb';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const difficulties = [
  { value: "", label: "Choose a Difficulty" },
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" }
];

const questionTypes = [
  { value: "no_calc_mc", label: "No-Calculator Multiple Choice" },
  { value: "no_calc_or", label: "No-Calculator Open Response" },
  { value: "calc_mc", label: "Calculator Multiple Choice" },
  { value: "calc_or", label: "Calculator Open Response" }
];

export default function SatMath({ BASE_URL }) {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const contentRef = useRef();

  const btnStyle = { backgroundColor: '#FF683B', color: 'white' };
  const cancelStyle = { backgroundColor: '#dc3545', color: 'white' };
  const pdfStyle = { backgroundColor: '#198754', color: 'white' };

  const onSubmit = async (data) => {
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
      if (error.response.status === 401) {
        toast.warning('This email has been already used on another device.');

        Cookies.remove('authToken');
        Cookies.remove('site_url');
        Cookies.remove('Display_name');
        Cookies.remove('user_email');

        setTimeout(() => {
          navigate('/login');
          window.location.reload();
        }, 2000);
      } else {
        const errorMessage = error.response?.data?.error || 'Failed to create group work. Please try again.';
        toast.error(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const generatePdf = () => {
    window.print();
  };

  const breadcrumbItems = [
    { label: 'Main Panel', href: '/ai-tools-for-teachers', active: false },
    { label: 'Assessment', active: true },
    { label: 'SAT Maths', active: true }
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
                    <h4 className="text-center mb-3">SAT Maths Generator</h4>

                    {/* Topic */}
                    <div className="mb-2">
                      <label htmlFor="topic" className="form-label">
                        Topic <span style={{ color: 'red' }}>*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control form-control-sm mb-2 ${errors.topic ? 'is-invalid' : ''}`}
                        id="topic"
                        placeholder="Enter your topic for eg. Algebra, Ancient Egypt"
                        {...register('topic', { required: 'Topic is required' })}
                      />
                      {errors.topic && <div className="invalid-feedback">{errors.topic.message}</div>}
                    </div>

                    {/* Difficulty */}
                    <div className="mb-2">
                      <label htmlFor="difficulty" className="form-label">
                        Difficulty <span style={{ color: 'red' }}>*</span>
                      </label>
                      <select
                        className={`form-select form-select-sm mb-2 ${errors.difficulty ? 'is-invalid' : ''}`}
                        id="difficulty"
                        {...register('difficulty', { required: 'Difficulty is required' })}
                      >
                        {difficulties.map((difficulty, index) => (
                          <option key={index} value={difficulty.value}>
                            {difficulty.label}
                          </option>
                        ))}
                      </select>
                      {errors.difficulty && <div className="invalid-feedback">{errors.difficulty.message}</div>}
                    </div>

                    {/* Question Types */}
                    <div className="mb-2">
                      <label className="form-label">
                        Question Types <span style={{ color: 'red' }}>*</span>
                      </label>
                      <div className="form-check">
                        {questionTypes.map((type, index) => (
                          <div key={index}>
                            <input
                              type="checkbox"
                              id={`questionType_${type.value}`}
                              value={type.value}
                              {...register('questionTypes', {
                                validate: (value) => value.length > 0 || 'At least one question type must be selected'
                              })}
                              className="form-check-input"
                            />
                            <label htmlFor={`questionType_${type.value}`} className="form-check-label">
                              {type.label}
                            </label>
                          </div>
                        ))}
                      </div>
                      {errors.questionTypes && <div className="invalid-feedback d-block">{errors.questionTypes.message}</div>}
                    </div>

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
                <div className="text-center">
                  <button className="btn btn-sm mt-2 mb-3 me-2 no-print" style={btnStyle} onClick={() => setApiResponse(null)}>
                    <FaArrowLeft /> Generate Another SAT Math
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm mt-2 mb-3 me-2 no-print"
                    style={pdfStyle}
                    onClick={generatePdf}
                  >
                    <FaCloudDownloadAlt /> View Group Work
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

