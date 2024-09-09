import React from 'react';
import { FaCheck } from "react-icons/fa";

const TFSimple = ({ worksheet, answers, modalVisible, handleUpdate, setApiResponse }) => {
  const handleQuestionChange = (index, newQuestion) => {
    const updatedWorksheet = [...worksheet];
    updatedWorksheet[index].question = newQuestion;
    setApiResponse((prevState) => ({
      ...prevState,
      worksheet: updatedWorksheet,
    }));
  };

  const handleOptionChange = (index, optionKey, newOptionValue) => {
    const updatedWorksheet = [...worksheet];
    updatedWorksheet[index].options[optionKey] = newOptionValue;
    setApiResponse((prevState) => ({
      ...prevState,
      worksheet: updatedWorksheet,
    }));
  };

  const handleAnswerChange = (index, selectedAnswer) => {
    const updatedAnswers = { ...answers };
    updatedAnswers[index + 1] = selectedAnswer;

    setApiResponse((prevState) => ({
      ...prevState,
      answers: updatedAnswers,
    }));
  };

  return (
    <>
      <h5 className='mb-4'>
        <strong>[ <FaCheck /> ] Tick the correct answer corresponding to the questions provided.</strong>
      </h5>
      {worksheet.map((item, index) => (
        <div className='mb-3' key={index}>
          <p><strong>Question {index + 1}:</strong> {item.question}</p>
          <div className='options'>
            {Object.keys(item.options).map((optionKey) => (
              <div key={optionKey}>
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  disabled
                  checked={false} // Mark the checked option
                />
                {optionKey}. {item.options[optionKey]}
              </div>
            ))}
          </div>
          <div className='answer mt-3'>
            <strong>Correct Answer: </strong> {answers[index + 1]}
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
                  <h5 className="modal-title">Edit Worksheet</h5>
                </div>
                <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                  {worksheet.map((item, index) => (
                    <div key={index} className="mb-3">
                      <label className="form-label fw-bold">Question {index + 1}</label>
                      <input
                        type="text"
                        className="form-control"
                        value={item.question}
                        onChange={(e) => handleQuestionChange(index, e.target.value)}
                      />
                      <label className="form-label mt-2 fw-bold">Select Correct Answer</label>
                      <div>
                        {Object.keys(item.options).map((optionKey) => (
                          <div key={optionKey} className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name={`correctAnswer${index}`}  
                              value={item.options[optionKey]}
                              checked={answers[index + 1] === item.options[optionKey]}  
                              onChange={() => handleAnswerChange(index, item.options[optionKey])}  
                            />
                            <label className="form-check-label">
                              {optionKey}. {item.options[optionKey]}
                            </label>
                          </div>
                        ))}
                      </div>
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
    </>
  );
};

export default TFSimple;
