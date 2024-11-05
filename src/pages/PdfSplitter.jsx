import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import NavBar from '../components/NavBar';

const PdfSplitter = () => {
    const [fileNames, setFileNames] = useState([]);
    const [pdfDoc, setPdfDoc] = useState(null);
    const [pdfBlobUrl, setPdfBlobUrl] = useState(null);

    const handleFileUpload = async (event) => {
        const files = event.target.files;
        const file = files[0];
        const names = Array.from(files).map((file) => file.name);
        setFileNames(names);

        if (file && file.type === 'application/pdf') {
            const reader = new FileReader();
            reader.onload = async (e) => {
                const arrayBuffer = e.target.result;
                const pdfDoc = await PDFDocument.load(arrayBuffer);
                setPdfDoc(pdfDoc);
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

    // Function to remove the uploaded PDF and reset the state
    const handleRemovePdf = () => {
        setFileNames([]);
        setPdfBlobUrl(null);
        setPdfDoc(null);

        // Reset file input field
        document.getElementById('fileUpload').value = '';
    };

    return (
        <>
            <NavBar />
            <div className="mt-5 text-center">
                <h5 className="display-5 fw-bold">PDF Splitter</h5>
                <p className="lead mt-4">
                    Convert PDFs swiftly for hassle-free management and sharing.
                </p>
                <label className="upload-button mt-5 mb-4" htmlFor="fileUpload">
                    <span>Upload Files</span>
                    <input
                        type="file"
                        id="fileUpload"
                        accept=".pdf"
                        multiple
                        className="d-none"
                        onChange={handleFileUpload}
                    />
                </label>
                {fileNames.length > 0 && (
                    <div className="mt-3">
                        <h6>Your PDF File:</h6>
                        <ul className="list-unstyled">
                            {fileNames.map((name, index) => (
                                <li key={index}>{name}</li>
                            ))}
                        </ul>
                        <div className="mt-3">
                            <button className="btn btn-outline-success me-3" onClick={handlePrintPdf}>
                                Split PDF
                            </button>
                            <button className="btn btn-outline-danger" onClick={handleRemovePdf}>
                                Remove PDF
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default PdfSplitter;
