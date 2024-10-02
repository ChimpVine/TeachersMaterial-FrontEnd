import React, { useState, useRef } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';
import { FaArrowRight, FaEraser, FaArrowLeft, FaRegFilePdf } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../../spinner/Spinner';

export default function TongueTwister() {
    const btnStyle = { backgroundColor: '#FF683B', color: 'white' };
    const cancelStyle = { backgroundColor: '#dc3545', color: 'white' };
    const pdfStyle = {
        backgroundColor: '#198754',
        color: 'white',
    }

    const [formData, setFormData] = useState({
        topic: '',
        number_of_twisters: ''
    });

    const [apiResponse, setApiResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const contentRef = useRef();

    // Handle form data changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { topic, number_of_twisters } = formData;

        // Check if all required fields are filled
        if (!topic || !number_of_twisters) {
            toast.error('Please fill in all required fields.');
            return;
        }

        // Ensure number_of_twisters is between 1 and 10
        if (number_of_twisters < 1 || number_of_twisters > 10) {
            toast.warn('The number of twisters must be between 1 and 10.');
            return;
        }

        // Create FormData object for sending form-encoded data
        const formDataToSend = new FormData();
        formDataToSend.append('topic', topic);
        formDataToSend.append('number_of_twisters', number_of_twisters);

        setIsLoading(true);

        try {
            const response = await axios.post('https://teachertools-api.chimpvine.com/generate-tongue-twisters', formDataToSend);
            setApiResponse(response.data);
            setFormData({
                topic: '',
                number_of_twisters: ''
            });
            toast.success('Tongue Twister generated successfully!');
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to generate the Tongue Twister. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };


    // Handle print action
    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            <NavBar id="main-nav" />
            <ToastContainer position="top-right" autoClose={1500} />
            <div className="container-fluid">
                <div className="row justify-content-center mt-5">
                    {isLoading ? (
                        <div className="col-md-5 text-center">
                            <Spinner />
                        </div>
                    ) : (
                        !apiResponse ? (
                            <div className="col-md-5 border border-4 rounded-3 pt-4 pb-3 ps-5 pe-5 shadow p-3 bg-body rounded no-print">
                                <form onSubmit={handleSubmit}>
                                    <h4 className="text-center mb-3">Tongue Twister Generator</h4>
                                    <div className="mb-2">
                                        <label htmlFor="topic" className="form-label">
                                            Topic <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm mb-2"
                                            id="topic"
                                            name="topic"
                                            value={formData.topic}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                            placeholder="Enter Tongue Twister Topic For eg. Animals,Foods"
                                        />

                                        <label htmlFor="number_of_twisters" className="form-label">
                                            Number of Twister <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control form-control-sm mb-2"
                                            id="number_of_twisters"
                                            name="number_of_twisters"
                                            value={formData.number_of_twisters}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                            placeholder="For example: 5"
                                        />
                                    </div>

                                    <div className="d-flex justify-content-between mt-3">
                                        <button type="submit" className="btn btn-sm" style={btnStyle} disabled={isLoading}>
                                            Generate <FaArrowRight />
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-sm"
                                            style={cancelStyle}
                                            onClick={() => setFormData({
                                                topic: '',
                                                number_of_twisters: ''
                                            })}
                                            disabled={isLoading}
                                        >
                                            <FaEraser /> Reset
                                        </button>
                                    </div>
                                </form>
                            </div>
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
    const nameStyle = {
        display: "inline-block",
        width: "200px",
        height: "1px",
        backgroundColor: "black",
        borderBottom: "1px solid black",
    };

    const dateStyle = {
        display: "inline-block",
        width: "100px",
        height: "1px",
        backgroundColor: "black",
        borderBottom: "1px solid black",
    };
    return (
        <div className="container-fluid mt-3 mb-2 ps-5 pe-5 print-content">
            <div className='mt-4'>
                <div className="mb-5">
                    <h5>Topic: {tongueTwisterData.topic}</h5>
                    <h5>Note: {tongueTwisterData.note}</h5>
                </div>
                {/* Tongue Twister List */}
                <section className='mb-5'>
                    <h4>Tongue Twister List:</h4>
                    <table className="table table-bordered">
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
