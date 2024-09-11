import React from 'react';

const ProblemSolving = ({ worksheet, answers, gapStyle, handleUpdate, setApiResponse, modalVisible }) => {
    const handleQuestionChange = (index, newQuestion) => {
        const updatedWorksheet = [...worksheet];
        updatedWorksheet[index].question = newQuestion;
        setApiResponse((prevState) => ({
            ...prevState,
            worksheet: updatedWorksheet,
        }));
    };

    const handleAnswerChange = (index, newAnswer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = newAnswer;
        setApiResponse((prevState) => ({
            ...prevState,
            answers: updatedAnswers,
        }));
    };

    return (
        <div>
            <h4 className='mb-5'><strong>Numerical Problems</strong></h4>
            {worksheet.map((item, index) => (
                <div className='mb-4' key={index}>
                    <p className='mb-5'><strong>Question {index + 1}:</strong> {item.question}</p>
                    <p className='answer mb-5' >
                        <strong className='mb-5'>Answers:</strong>
                    </p>
                    <label style={gapStyle}></label>
                    <div className='mb-5'>
                        <strong>Correct Answer:</strong> {answers[index]}
                    </div>
                    <label style={gapStyle}></label>
                </div>
            ))}

            {modalVisible && (
                <>
                    <div className="modal-backdrop fade show"></div>
                    <div className="modal fade show d-block" role="dialog" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit Numerical Problems Worksheet</h5>
                                </div>
                                <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                                    {worksheet.map((item, index) => (
                                        <div key={index} className="mb-3">
                                            <label className="form-label fw-bold">Question {index + 1}</label>
                                            <textarea
                                                type="text"
                                                className="form-control"
                                                rows={3}
                                                style={{ resize: 'none' }}
                                                value={item.question}
                                                onChange={(e) => handleQuestionChange(index, e.target.value)}
                                            />
                                            <label className="form-label fw-bold mt-3">Correct Answer {index + 1}</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={answers[index]}
                                                onChange={(e) => handleAnswerChange(index, e.target.value)}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-success" onClick={handleUpdate}>
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProblemSolving;
