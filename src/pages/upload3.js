// import React, { useState } from 'react';
// import Navbar from '../components/navbar';
// import './upload3.css'; // Import the CSS file for styling

// const Upload3 = () => {
//     // State to hold the selected classification
//     const [selectedClassification, setSelectedClassification] = useState('');

//     // Function to handle dropdown change
//     const handleClassificationChange = (event) => {
//         setSelectedClassification(event.target.value);
//     };

//     return (
//         <div className='flex'>
//             <Navbar />
//             <div className="container mx-auto p-8">
//                 <h1 className="text-3xl font-bold text-center">Upload</h1>
//                 <div className="flex justify-center flex-wrap mb-8">
//                     <div className="circle m-4">
//                         <a href="">1</a>
//                     </div>
//                     <div className="circle m-4">
//                         <a href="">2</a>
//                     </div>
//                     <div className="circle m-4">
//                         <a href="">3</a>
//                     </div>
//                     <div className="circle m-4">
//                         <a href="">4</a>
//                     </div>
//                 </div>
//                 <hr className="my-8" />
//                 <div className="card">
//                     <h3 className="card-title">Step 1: Text classification</h3>
//                     <p className="card-text">Text classified as: {selectedClassification}</p>
//                     <label htmlFor="classification" className="dropdown-label">Select classification:</label>
//                     <select
//                         id="classification"
//                         className="dropdown"
//                         onChange={handleClassificationChange}
//                         value={selectedClassification}
//                     >
//                         <option value="">Select...</option>
//                         <option value="Receipts">Receipts</option>
//                         <option value="Invoices">Invoices</option>
//                         <option value="Card Statement">Card Statement</option>
//                     </select>
//                 </div>
//                 <div className="flex justify-end mt-4">
//                     <button className="btn-cancel mr-4">Cancel</button>
//                     <button className="btn-confirm">Confirm</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Upload3;
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import './upload3.css'; // Import the CSS file for styling

const Upload3 = () => {
    // State to hold the selected classification and card count
    const [selectedClassification, setSelectedClassification] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    // Function to handle dropdown change
    const handleClassificationChange = (event) => {
        setSelectedClassification(event.target.value);
    };

    // Function to handle confirm button click
    const handleConfirm = () => {
        setShowConfirmation(true);
    };

    // Function to handle cancel button click
    const handleCancel = () => {
        setShowConfirmation(false);
    };

    return (
        <div className='flex'>
            <Navbar />
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold text-center">Data Extraction</h1>
                {/* Numbered circles with headings */}
                <div className="flex justify-center mt-4">
                    <div className="circle-container m-4">
                        <div className="circle">
                            <a href="">1</a>
                        </div>
                        <p className="circle-heading">Upload</p>
                    </div>
                    <div className="circle-container m-4">
                        <div className="circle">
                            <a href="">2</a>
                        </div>
                        <p className="circle-heading">Data extraction</p>
                    </div>
                    <div className="circle-container m-4">
                        <div className="circle">
                            <a href="">3</a>
                        </div>
                        <p className="circle-heading">Verification</p>
                    </div>
                </div>
                {/* Main card */}
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
                    {/* Show confirm button if not already showing confirmation */}
                    {!showConfirmation && (
                        <div className="flex justify-end mt-4">
                            <button className="btn-cancel mr-4">Cancel</button>
                            <button className="btn-confirm" onClick={handleConfirm}>Confirm</button>
                        </div>
                    )}
                </div>
                {/* Show confirmation card if confirmed */}
                {showConfirmation && (
                    <div className="card mt-8">
                        <h3 className="card-title">Step 2 : Structured data extraction</h3>
                        <p className="card-text">The data has been correctly extracted and structured. A valid structure of {selectedClassification} has been created.</p>
                        <div className="flex justify-end mt-4">
                            <button className="btn-cancel mr-4" onClick={handleCancel}>Cancel</button>
                            <button className="btn-confirm" onClick={handleConfirm}>Confirm</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Upload3;


