import React, { useState } from 'react';
import Navbar from '../components/navbar';
import './upload3.css'; // Import the CSS file for styling

const Upload3 = () => {
    // State to hold the selected classification
    const [selectedClassification, setSelectedClassification] = useState('');

    // Function to handle dropdown change
    const handleClassificationChange = (event) => {
        setSelectedClassification(event.target.value);
    };

    return (
        <div className='flex'>
            <Navbar />
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold text-center">Upload</h1>
                <div className="flex justify-center flex-wrap mb-8">
                    <div className="circle m-4">
                        <a href="">1</a>
                    </div>
                    <div className="circle m-4">
                        <a href="">2</a>
                    </div>
                    <div className="circle m-4">
                        <a href="">3</a>
                    </div>
                    <div className="circle m-4">
                        <a href="">4</a>
                    </div>
                </div>
                <hr className="my-8" />
                <div className="card">
                    <h3 className="card-title">Step 1: Text classification</h3>
                    <p className="card-text">Text classified as: {selectedClassification}</p>
                    <label htmlFor="classification" className="dropdown-label">Select classification:</label>
                    <select
                        id="classification"
                        className="dropdown"
                        onChange={handleClassificationChange}
                        value={selectedClassification}
                    >
                        <option value="">Select...</option>
                        <option value="Receipts">Receipts</option>
                        <option value="Invoices">Invoices</option>
                        <option value="Card Statement">Card Statement</option>
                    </select>
                </div>
                <div className="flex justify-end mt-4">
                    <button className="btn-cancel mr-4">Cancel</button>
                    <button className="btn-confirm">Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default Upload3;
