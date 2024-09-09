import React from 'react';

const FIBMultiple = ({ worksheet, answers, modalVisible, handleUpdate, setApiResponse }) => {
  const handleQuestionChange = (index, newQuestion) => {
    const updatedWorksheet = { ...worksheet };
    updatedWorksheet.question[index] = newQuestion;
    setApiResponse((prevState) => ({
      ...prevState,
      worksheet: updatedWorksheet,
    }));
  };

  const handleAnswerChange = (index, newAnswer, answerIndex) => {
    const updatedAnswers = { ...answers };
    if (Array.isArray(updatedAnswers[index + 1])) {
      updatedAnswers[index + 1][answerIndex] = newAnswer;
    } else {
      updatedAnswers[index + 1] = [newAnswer];
    }
    setApiResponse((prevState) => ({
      ...prevState,
      worksheet: {
        ...prevState.worksheet,
        answers: updatedAnswers,
      },
    }));
  };

  const addAnswer = (index) => {
    const updatedAnswers = { ...answers };
    updatedAnswers[index + 1] = [...(updatedAnswers[index + 1] || []), ""];
    setApiResponse((prevState) => ({
      ...prevState,
      worksheet: {
        ...prevState.worksheet,
        answers: updatedAnswers,
      },
    }));
  };

  const removeAnswer = (index, answerIndex) => {
    const updatedAnswers = { ...answers };
    if (Array.isArray(updatedAnswers[index + 1])) {
      updatedAnswers[index + 1].splice(answerIndex, 1);
    }
    setApiResponse((prevState) => ({
      ...prevState,
      worksheet: {
        ...prevState.worksheet,
        answers: updatedAnswers,
      },
    }));
  };

  return (
    <>
      <div>
        <h4 className='mb-3'><strong>Fill in the Blanks</strong></h4>
        {worksheet.question && worksheet.question.length > 0 && (
          worksheet.question.map((question, index) => (
            <div className='mb-4' key={index}>
              <p><strong>Question {index + 1}:</strong> {question}</p>
              <p className='answer mt-3'>
                <strong>Correct Answers:</strong> {answers[index + 1]?.join(", ")}
              </p>
            </div>
          ))
        )}
      </div>

      {modalVisible && (
        <>
          <div className="modal-backdrop fade show"></div>
          <div className="modal fade show d-block" role="dialog" tabIndex="-1">
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Fill-in-the-Blanks Worksheet</h5>
                </div>
                <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                  {worksheet.question && worksheet.question.length > 0 && (
                    worksheet.question.map((question, index) => (
                      <div key={index} className="mb-3">
                        <label className="form-label fw-bold">Question {index + 1}</label>
                        <input
                          type="text"
                          className="form-control"
                          value={question}
                          onChange={(e) => handleQuestionChange(index, e.target.value)}
                        />
                        <label className="form-label mt-2 fw-bold">Correct Answers</label>
                        {answers[index + 1]?.map((answer, answerIndex) => (
                          <div key={answerIndex} className="input-group mb-2">
                            <input
                              type="text"
                              className="form-control"
                              value={answer}
                              onChange={(e) => handleAnswerChange(index, e.target.value, answerIndex)}
                            />
                            <button
                              className="btn btn-danger"
                              onClick={() => removeAnswer(index, answerIndex)}
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                        <button className="btn btn-success mt-2" onClick={() => addAnswer(index)}>
                          Add Another Answer
                        </button>
                      </div>
                    ))
                  )}
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

export default FIBMultiple;
