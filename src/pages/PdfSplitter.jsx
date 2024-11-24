import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { Modal, Button } from 'react-bootstrap';

const PdfSplitter = () => {
    const [fileNames, setFileNames] = useState([]);
    const [pdfBlobUrl, setPdfBlobUrl] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleFileUpload = async (event) => {
        const files = event.target.files;
        const file = files[0];
        const names = Array.from(files).map((file) => file.name);
        setFileNames(names);

        if (file && file.type === 'application/pdf') {
            const reader = new FileReader();
            reader.onload = async (e) => {
                const arrayBuffer = e.target.result;
                const pdfBlob = new Blob([arrayBuffer], { type: 'application/pdf' });
                setPdfBlobUrl(URL.createObjectURL(pdfBlob));
            };
            reader.readAsArrayBuffer(file);
        }
    };

    const handlePrintPdf = () => {
        if (pdfBlobUrl) {
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = pdfBlobUrl;
            document.body.appendChild(iframe);
            iframe.onload = () => {
                iframe.contentWindow.print();
            };
        }
    };

    const handleRemovePdf = () => {
        setFileNames([]);
        setPdfBlobUrl(null);
        document.getElementById('fileUpload').value = '';
    };

    const btnStyle = {
        backgroundColor: '#FF683B',
        color: 'white',
        borderRadius: "5px",
        cursor: "pointer"
    };

    return (
        <>
            <NavBar />
            <div className="container mt-5 text-center">
                <div className="header-container mb-5">
                    <h1 className="display-4 fw-bold">Split Your PDFs with Ease</h1>
                    <p className="lead text-muted">Quickly split PDF files for seamless management and sharing.</p>
                </div>

                {/* Buttons */}
                <div className="button-container mb-4">
                    <label htmlFor="fileUpload" className="px-4 py-2 me-2" style={btnStyle}>
                        Upload PDF
                        <input
                            type="file"
                            id="fileUpload"
                            accept=".pdf"
                            className="d-none"
                            onChange={handleFileUpload}
                        />
                    </label>
                    <Button variant="danger" className="me-3 px-4 py-2" onClick={() => setShowModal(true)}>
                        How to Split PDF?
                    </Button>
                </div>

                {/* Modal for steps */}
                <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Steps to Split PDF</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul className="text-start">
                            <li>Click on the "Upload PDF" button and select your file.</li>
                            <li>After uploading, two buttons will appear: "Split PDF" and "Remove PDF".</li>
                            <li>Click "Split PDF" to open the print preview screen.</li>
                            <li>Choose "Save as PDF" under Destination.</li>
                            <li>Select "Custom" under Pages and enter the desired page numbers.</li>
                            <li>Click "Save" to download the split PDF.</li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* File Details */}
                {fileNames.length > 0 && (
                    <div className="file-details-container mt-5">
                        <div className="file-card p-4 shadow-sm rounded">
                            <h5 className="text-success mb-3">Uploaded File</h5>
                            <ul className="list-unstyled">
                                {fileNames.map((name, index) => (
                                    <li key={index} className="text-muted">
                                        {name}
                                    </li>
                                ))}
                            </ul>
                            <div className="action-buttons mt-4">
                                <button
                                    className="btn btn-success me-3 px-4 py-2"
                                    onClick={handlePrintPdf}
                                >
                                    Split PDF
                                </button>
                                <button
                                    className="btn btn-danger px-4 py-2"
                                    onClick={handleRemovePdf}
                                >
                                    Remove PDF
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Inline Styles */}
            <style jsx>{`
        .header-container {
          margin-bottom: 30px;
        }

        .button-container {
          display: flex;
          justify-content: center;
        }

        .upload-label {
          background-color: #f77f00;
          color: white;
          border-radius: 5px;
          cursor: pointer;
          display: inline-block;
          font-size: 16px;
          transition: all 0.3s ease-in-out;
        }

        .upload-label:hover {
          background-color: #dc2f02;
        }

        .file-details-container {
          display: flex;
          justify-content: center;
        }

        .file-card {
          max-width: 500px;
          background-color: #ffffff;
          border: 1px solid #f0f0f0;
        }

        .file-card h5 {
          font-weight: bold;
        }

        .action-buttons .btn {
          font-size: 16px;
          transition: all 0.3s ease-in-out;
        }

        .action-buttons .btn-success:hover {
          background-color: #218838;
        }

        .action-buttons .btn-danger:hover {
          background-color: #c82333;
        }
      `}</style>
        </>
    );
};

export default PdfSplitter;
