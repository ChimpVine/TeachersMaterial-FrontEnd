import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import NavBar from '../NavBar';
import Spinner from '../../spinner/Spinner';
import { toast } from 'react-toastify';
import { FaArrowRight, FaEraser, FaArrowLeft, FaFilePdf, FaRegFilePdf, FaEdit, FaCut } from 'react-icons/fa';
import { FaRegFileLines } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import NavBreadcrumb from '../../pages/BreadCrumb/BreadCrumb';
import axios from 'axios';
import Cookies from 'js-cookie';

const subjects = [
  { value: '', label: 'Choose a Subject' },
  { value: 'english', label: 'English' },
  { value: 'mathematics', label: 'Mathematics' },
  { value: 'science', label: 'Science' },
  { value: 'social_studies', label: 'Social Studies' },
  { value: 'art', label: 'Art' },
  { value: 'music', label: 'Music' },
  { value: 'physical_education', label: 'Physical Education' },
  { value: 'health', label: 'Health' },
  { value: 'technology', label: 'Technology' },
  { value: 'language', label: 'Language' }
];

const grades = [
  { value: '', label: 'Choose a Grade' },
  ...Array.from({ length: 13 }, (_, i) => ({
    value: i === 0 ? 'k' : `${i}`,
    label: i === 0 ? 'Kindergarten' : `${i}th Grade`
  }))
];

const handoutTypes = [
  { value: '', label: 'Choose Handout Type' },
  { value: 'interactive_handout', label: 'Interactive Handout' },
  { value: 'worksheet_qna', label: 'Question and Answer Handout' }
];

const btnStyle = { backgroundColor: '#FF683B', color: 'white' };
const cancelStyle = { backgroundColor: '#dc3545', color: 'white' };
const pdfStyle = { backgroundColor: '#198754', color: 'white' };

const modeBtnStyle = (active) => ({
  backgroundColor: active ? '#0d6efd' : '#e9ecef',
  color: active ? 'white' : 'black',
  border: '1px solid #ced4da',
  marginRight: '0.5rem',
  padding: '0.25rem 0.75rem',
  fontSize: '0.875rem',
  borderRadius: '0.25rem',
  cursor: 'pointer'
});

const responseLineStyle = {
  borderBottom: '1px solid #000',
  width: '100%',
  height: '3.5em',
};

export default function HandoutsPlanner({ BASE_URL }) {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadMode, setUploadMode] = useState('');
  const [wordCount, setWordCount] = useState({ topic: 0, objectives: 0 });
  const [output, setOutput] = useState(null);
  const [showAnswers, setShowAnswers] = useState(false);

  const breadcrumbItems = [
    { label: 'Main Panel', href: '/ai-tools-for-teachers', active: false },
    { label: 'Assessment', href: '/ai-tools-for-teachers?tab=Assessment', active: false },
    { label: 'Handout Planner', active: true }
  ];

  const authToken = Cookies.get('authToken');
  const siteUrl = Cookies.get('site_url');

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    clearErrors,
    formState: { errors }
  } = useForm({
    mode: 'all',
    shouldUnregister: true
  });

  const currentUploadMode = watch('uploadMode');

  useEffect(() => {
    if (uploadMode === 'file') {
      setValue('subject', '');
      setValue('grade', '');
      setValue('topic', '');
      setValue('objectives', '');
    }
  }, [uploadMode, setValue]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      let payload;
      let apiEndpoint;
      const headers = {
        Authorization: `Bearer ${authToken}`,
        'X-Site-Url': siteUrl
      };

      if (uploadMode === 'manual') {
        payload = {
          handout_type: data.handoutType,
          subject: data.subject,
          grade_level: parseInt(data.grade),
          topic: data.topic,
          learning_objectives: data.objectives
        };
        apiEndpoint = `${BASE_URL}/handout/form`;
        headers['Content-Type'] = 'application/json';
      } else {
        payload = new FormData();
        payload.append('file', data.pdf_file[0]);
        payload.append('handout_type', data.handoutType);
        payload.append('subject', data.subject);
        payload.append('grade_level', parseInt(data.grade));
        payload.append('topic', data.topic);
        payload.append('learning_objectives', data.objectives);
        apiEndpoint = `${BASE_URL}/handout/document`;
        headers['Content-Type'] = 'multipart/form-data';
      }

      const response = await axios.post(apiEndpoint, payload, { headers });
      setOutput(response.data);
      toast.success('Handout generated successfully!');
      reset();
      setUploadMode('');
      setWordCount({ topic: 0, objectives: 0 });
    } catch (error) {
      toast.error('Something went wrong!');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const countWords = (text) => text.trim().split(/\s+/).filter(Boolean).length;

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div className="row justify-content-center mt-5 mb-4">
          {isLoading && (
            <div className="col-md-5 text-center">
              <Spinner />
            </div>
          )}

          {!isLoading && !output && (
            <>
              <NavBreadcrumb items={breadcrumbItems} />
              <div className="col-md-5 border border-4 rounded-3 pt-4 pb-3 ps-5 pe-5 shadow bg-body rounded">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h4 className="text-center mb-3">Handouts Planner</h4>

                  <label className="form-label">Handout Type <span className="text-danger">*</span></label>
                  <select
                    className={`form-select form-select-sm mb-1 ${errors.handoutType ? 'is-invalid' : ''}`}
                    {...register('handoutType', { required: true })}
                  >
                    {handoutTypes.map((opt, idx) => (
                      <option key={idx} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  {errors.handoutType && <div className="text-danger mb-2">Please select a handout type.</div>}

                  <label className="form-label mt-2">Choose Input Mode <span className="text-danger">*</span></label>
                  <Controller
                    name="uploadMode"
                    control={control}
                    rules={{ required: 'Please choose input mode.' }}
                    render={({ field }) => (
                      <div className="d-flex justify-content-between mb-2">
                        <button
                          type="button"
                          style={modeBtnStyle(field.value === 'file')}
                          onClick={() => {
                            field.onChange('file');
                            clearErrors();
                            setUploadMode('file');
                            setValue('pdf_file', null);
                            setWordCount({ topic: 0, objectives: 0 });
                          }}
                        >
                          Upload File
                        </button>
                        <button
                          type="button"
                          style={modeBtnStyle(field.value === 'manual')}
                          onClick={() => {
                            field.onChange('manual');
                            clearErrors();
                            setUploadMode('manual');
                            setValue('pdf_file', null);
                            setWordCount({ topic: 0, objectives: 0 });
                          }}
                        >
                          Manual Entry
                        </button>
                      </div>
                    )}
                  />
                  {errors.uploadMode && <div className="text-danger mb-2">{errors.uploadMode.message}</div>}

                  {currentUploadMode === 'file' && (
                    <>
                      <input
                        type="file"
                        accept="application/pdf"
                        className={`form-control form-control-sm mb-2 ${errors.pdf_file ? 'is-invalid' : ''}`}
                        {...register('pdf_file', {
                          required: 'File is required.',
                          validate: {
                            sizeLimit: (file) => file?.[0]?.size <= 512000 || 'File must be under 500KB',
                            typeCheck: (file) => file?.[0]?.type === 'application/pdf' || 'Only PDF files are allowed'
                          }
                        })}
                      />
                      {errors.pdf_file && <div className="text-danger mb-2">{errors.pdf_file.message}</div>}
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

                          <li className="d-flex align-items-start flex-wrap">
                            <FaCut className="me-2 text-success flex-shrink-0" />
                            <span className="fw-bold text-dark">PDF Too Large?</span>
                            <NavLink to="/pdf-splitter" target="_blank" className="text-decoration-none flex-grow-1">
                              <span className="fw-bold text-primary ms-1">Click here to split it</span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}

                  {currentUploadMode === 'manual' && (
                    <>
                      <label className="form-label">Subject <span className="text-danger">*</span></label>
                      <select
                        className={`form-select form-select-sm mb-2 ${errors.subject ? 'is-invalid' : ''}`}
                        {...register('subject', { required: true })}
                      >
                        {subjects.map((opt, idx) => (
                          <option key={idx} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                      {errors.subject && <div className="text-danger mb-2">Please choose a subject.</div>}

                      <label className="form-label">Grade Level <span className="text-danger">*</span></label>
                      <select
                        className={`form-select form-select-sm mb-2 ${errors.grade ? 'is-invalid' : ''}`}
                        {...register('grade', { required: true })}
                      >
                        {grades.map((opt, idx) => (
                          <option key={idx} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                      {errors.grade && <div className="text-danger mb-2">Please choose a grade level.</div>}

                      <label className="form-label">
                        Topic <span className="text-danger">*</span>
                      </label>
                      <input
                        {...register('topic', {
                          required: 'Topic is required.',
                          validate: {
                            notEmpty: (value) =>
                              value.trim().length > 0 || 'Topic cannot be empty or just spaces.',
                            maxWords: (value) => {
                              const words = countWords(value);
                              return words <= 50 || 'Topic cannot exceed 50 words.';
                            },
                          },
                        })}
                        className={`form-control form-control-sm ${errors.topic ? 'is-invalid' : ''}`}
                        placeholder="e.g., Photosynthesis and Energy Flow"
                        onChange={(e) => {
                          register('topic').onChange(e);
                          setWordCount((prev) => ({ ...prev, topic: countWords(e.target.value) }));
                        }}
                      />

                      <div className="d-flex justify-content-between">
                        {errors.topic ? (
                          <div className="text-danger mt-1">{errors.topic.message}</div>
                        ) : (
                          <div></div>
                        )}
                        <small className="text-muted ms-auto">{wordCount.topic}/50 words</small>
                      </div>

                      <label className="form-label">
                        Learning Objectives <span className="text-danger">*</span>
                      </label>
                      <textarea
                        rows={4}
                        id="textarea"
                        className={`form-control form-control-sm ${errors.objectives ? 'is-invalid' : ''}`}
                        placeholder="e.g., Understand how plants use sunlight for food production and describe the stages of photosynthesis."
                        {...register('objectives', {
                          required: 'Objectives are required.',
                          validate: {
                            notEmpty: (value) =>
                              value.trim().length > 0 || 'Objectives cannot be empty or just spaces.',
                            maxWords: (value) => {
                              const words = countWords(value);
                              return words <= 500 || 'Objectives cannot exceed 500 words.';
                            },
                          },
                        })}
                        onChange={(e) => {
                          register('objectives').onChange(e);
                          setWordCount((prev) => ({ ...prev, objectives: countWords(e.target.value) }));
                        }}
                      />

                      <div className="d-flex justify-content-between">
                        {errors.objectives ? (
                          <div className="text-danger mt-1">{errors.objectives.message}</div>
                        ) : (
                          <div></div>
                        )}
                        <small className="text-muted ms-auto">{wordCount.objectives}/500 words</small>
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
                          <li className="mb-1 d-flex align-items-start flex-wrap">
                            <FaRegFileLines className="me-2 text-danger flex-shrink-0" />
                            <span className="fw-bold text-dark">Objective Limit:</span>
                            <span className="flex-grow-1 ms-1">
                              Must not exceed <span className="text-danger fw-semibold">500 words</span>.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}

                  <div className="d-flex justify-content-between mt-3">
                    <button type="button" className="btn btn-sm" style={cancelStyle} onClick={() => {
                      reset();
                      setUploadMode('');
                      setWordCount({ topic: 0, objectives: 0 });
                    }}>
                      <FaEraser /> Reset
                    </button>
                    <button type="submit" className="btn btn-sm" style={btnStyle}>
                      Generate <FaArrowRight />
                    </button>

                  </div>
                </form>
              </div>
            </>
          )}

          {!isLoading && output && (
            <div className="container-fluid mt-3 mb-2 ps-4 pe-4">
              <h5 className="mb-4">{output.title}</h5>

              {output.learning_objectives && (
                <>
                  <h5>Learning Objectives:</h5>
                  <ul className='mb-4'>
                    {output.learning_objectives.map((obj, idx) => (
                      <li key={idx}>{obj}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Questions and Answer */}
              {output.questions && (
                <>
                  <h5 className="mb-4">Questions:</h5>
                  <ol className="ps-3">
                    {output.questions.map((q, i) => {
                      let lineCount;
                      if (q.type === 'short_answer') lineCount = 1;
                      else if (q.type === 'long_answer') lineCount = 3;
                      else if (q.type === 'reflection') lineCount = 2;

                      return (
                        <div key={i} className="mb-4">
                          {/* ({q.type.replace('_', ' ')}) */}
                          <p><strong>Q{i + 1}.</strong> {q.question}</p>
                          <label className='fw-bold me-1'>Type : </label>{q.type.replace('_', ' ')}
                          {showAnswers ? (
                            <p><strong>Answer:</strong> {q.answer}</p>
                          ) : (
                            <div className="space-y-2 print:space-y-3">
                              {[...Array(lineCount)].map((_, idx) => (
                                <div key={idx} style={responseLineStyle}></div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </ol>
                </>
              )}

              {output.parts && output.parts.map((part, i) => (
                <div key={i} className="mb-4">
                  <strong>{part.part_title}</strong>
                  {part.instructions && <p><strong>Instructions:</strong> {part.instructions}</p>}

                  {part.table && (
                    <table className="table table-bordered mt-2">
                      <thead>
                        <tr>
                          {part.table.headers.map((header, hIndex) => (
                            <th key={hIndex}>{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {part.table.rows.map((row, rIndex) => (
                          <tr key={rIndex}>
                            {row.map((cell, cIndex) => (
                              <td key={cIndex} style={{ minWidth: '150px', minHeight: '2em' }}>
                                {showAnswers ? cell : <div style={{ borderBottom: '1px solid #000', height: '1.5em' }} />}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}

                  {part.prompt && (
                    <p>
                      <strong>Prompt:</strong> {part.prompt}
                    </p>
                  )}

                  {part.response_area && (
                    <div className="mb-5">
                      <label htmlFor={`response_${i}`}>
                        <strong>Response:</strong>
                      </label>
                      <div className="mt-2 space-y-2 print:space-y-3">
                        {[...Array(3)].map((_, idx) => (
                          <div
                            key={idx}
                            style={responseLineStyle}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {part.terms && (
                    <ul>
                      {part.terms.map((term, tIndex) => (
                        <li key={tIndex}>
                          <strong>{term.term}:</strong> {term.definition}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Reflection questions with response box below each */}
                  {part.reflection_questions && (
                    <>
                      <p>
                        <strong>Reflection Questions:</strong>
                      </p>
                      <ol className="list-decimal ml-5 space-y-5">
                        {part.reflection_questions.map((q, j) => (
                          <li key={j}>
                            <p>{q}</p>
                            <strong>Response:</strong>
                            <div className="mt-2 space-y-2 print:space-y-3 mb-4">
                              {[...Array(3)].map((_, idx) => (
                                <div key={idx} style={responseLineStyle} />
                              ))}
                            </div>
                          </li>
                        ))}
                      </ol>
                    </>
                  )}


                  {part.multiple_choice_questions && (
                    <>
                      <p><strong>Multiple Choice Questions:</strong></p>
                      <div className="ml-4">
                        {part.multiple_choice_questions.map((q, j) => (
                          <div key={j} className="mb-3">
                            <p><strong>{j + 1}. {q.question}</strong></p>
                            {q.options.map((opt, k) => (
                              <div key={k}><strong>{String.fromCharCode(65 + k)}.</strong> {opt}</div>
                            ))}
                            <p className="mt-2" style={{ minHeight: '1.5em' }}>
                              <strong>Answer:</strong>{' '}
                              {showAnswers ? q.correct_answer : <span style={{ display: 'inline-block', width: '150px', borderBottom: '1px solid #000' }}></span>}
                            </p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {part.bullets && (
                    <>
                      <p>
                        <strong>Important Notes:</strong>
                      </p>
                      <ul>
                        {part.bullets.map((b, j) => (
                          <li key={j}>{b}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              ))}

              <div className="d-flex justify-content-center mt-4 no-print">
                <button
                  className="btn btn-sm me-3"
                  onClick={() => {
                    setOutput(null);
                    setShowAnswers(false);
                  }}
                  style={btnStyle}
                >
                  <FaArrowLeft /> Generate More
                </button>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => setShowAnswers(!showAnswers)}
                >
                  <FaFilePdf /> {showAnswers ? 'Hide Answers' : 'Show Answers'}
                </button>
                <button className="btn btn-sm ms-3" style={pdfStyle} onClick={handlePrint}>
                  <FaRegFilePdf /> View PDF
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}


