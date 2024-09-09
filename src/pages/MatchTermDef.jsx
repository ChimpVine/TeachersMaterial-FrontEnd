import React from 'react';

const MatchTermDef = ({ worksheet, answers, modalVisible, handleUpdate, setApiResponse }) => {
  const handleOptionChange = (column, index, newOption) => {
    const updatedWorksheet = { ...worksheet };
    updatedWorksheet.options[column][index] = newOption; // Update the specific option
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
    <>
      <div className='mb-5'>
        <h4 className='mb-5'><strong>{worksheet.question}</strong></h4>
        <div className='row'>
          <div className='col-md-6'>
            <p><strong>Options A</strong></p>
            {worksheet.options.A.map((option, index) => (
              <div key={index}><strong>{index + 1}.</strong> {option}</div>
            ))}
          </div>
          <div className='col-md-6'>
            <p><strong>Options B</strong></p>
            {worksheet.options.B.map((option, index) => (
              <div key={index}><strong>{index + 1}.</strong> {option}</div>
            ))}
          </div>
          <div className='answer mt-5'>
            <strong>Correct Answers: </strong>
            {answers.map((answer, index) => (
              <div key={index}>{answer}</div>
            ))}
          </div>
        </div>
      </div>

      {modalVisible && (
        <>
          <div className="modal-backdrop fade show"></div>
          <div className="modal fade show d-block" role="dialog" tabIndex="-1">
            <div className="modal-dialog modal-dialog-scrollable" style={{ maxWidth: '80%' }}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Match Term & Definition Worksheet</h5>
                </div>
                <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                  <div className='mb-4'>
                    <label className="form-label fw-bold">Question</label>
                    <input
                      type="text"
                      className="form-control"
                      value={worksheet.question}
                      onChange={(e) => setApiResponse((prevState) => ({
                        ...prevState,
                        worksheet: {
                          ...prevState.worksheet,
                          question: e.target.value,
                        },
                      }))}
                    />
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <p><strong>Edit Options A</strong></p>
                      {worksheet.options.A.map((option, index) => (
                        <div key={index} className="input-group mb-2">
                          <input
                            type="text"
                            className="form-control"
                            value={option}
                            onChange={(e) => handleOptionChange('A', index, e.target.value)}
                          />
                        </div>
                      ))}
                    </div>
                    <div className='col-md-6'>
                      <p><strong>Edit Options B</strong></p>
                      {worksheet.options.B.map((option, index) => (
                        <div key={index} className="input-group mb-2">
                          <input
                            type="text"
                            className="form-control"
                            value={option}
                            onChange={(e) => handleOptionChange('B', index, e.target.value)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='mt-4'>
                    <label className="form-label fw-bold">Correct Answers</label>
                    {answers.map((answer, index) => (
                      <div key={index} className="input-group mb-2">
                        <input
                          type="text"
                          className="form-control"
                          value={answer}
                          onChange={(e) => handleAnswerChange(index, e.target.value)}
                        />
                      </div>
                    ))}
                  </div>
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

export default MatchTermDef;
