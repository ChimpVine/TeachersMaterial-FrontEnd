import React from 'react';

const SeqEvents = ({ worksheet, answers, setApiResponse, handleUpdate, modalVisible }) => {
    const handleQuestionChange = (index, newQuestion) => {
        const updatedWorksheet = [...worksheet];
        updatedWorksheet[index].question = newQuestion;
        setApiResponse((prevState) => ({
            ...prevState,
            worksheet: updatedWorksheet,
        }));
    };

    const handleOptionChange = (questionIndex, optionKey, newOption) => {
        const updatedWorksheet = [...worksheet];
        updatedWorksheet[questionIndex].options[optionKey] = newOption;
        setApiResponse((prevState) => ({
            ...prevState,
            worksheet: updatedWorksheet,
        }));
    };

    const handleAnswerChange = (index, newAnswer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = newAnswer.split(',').map((ans) => ans.trim()); 
        setApiResponse((prevState) => ({
            ...prevState,
            answers: updatedAnswers,
        }));
    };

    return (
        <div>
            <h4 className='mb-5'><strong>Sequence Events Order</strong></h4>
            {worksheet.map((item, index) => (
                <div key={index} className='mb-5'>
                    <p><strong>Question {index + 1}:</strong> {item.question}</p>
                    <div className='mb-5 options'>
                        <p><strong>Options:</strong></p>
                        {Object.keys(item.options).map((optionKey) => (
                            <div key={optionKey}>
                                <span><strong>{optionKey}.</strong> {item.options[optionKey]}</span>
                            </div>
                        ))}
                    </div>
                    <div className='mb-5 answers'>
                        <strong>Correct Answers:</strong> {answers[index].join(', ')}
                    </div>
                </div>
            ))}

            {modalVisible && (
                <>
                    <div className="modal-backdrop fade show"></div>
                    <div className="modal fade show d-block" role="dialog" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit Sequence Events Order Worksheet</h5>
                                </div>
                                <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                                    {worksheet.map((item, index) => (
                                        <div key={index} className="mb-3">
                                            <label className="form-label fw-bold">Question {index + 1}</label>
                                            <textarea
                                                type="text"
                                                className="form-control"
                                                rows={3}
                                                value={item.question}
                                                onChange={(e) => handleQuestionChange(index, e.target.value)}
                                            />

                                            <label className="form-label fw-bold mt-3">Options</label>
                                            {Object.keys(item.options).map((optionKey) => (
                                                <div key={optionKey} className="input-group mb-2">
                                                    <span className="input-group-text">{optionKey}.</span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={item.options[optionKey]}
                                                        onChange={(e) =>
                                                            handleOptionChange(index, optionKey, e.target.value)
                                                        }
                                                    />
                                                </div>
                                            ))}

                                            <label className="form-label fw-bold mt-3">Correct Answers (Comma-separated)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={answers[index].join(', ')}
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

export default SeqEvents;
