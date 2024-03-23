import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { app } from '../firebaseConfig';

const InvoicePage = ({ invoiceData }) => {
    const location = useLocation();
    const [imageUrl, setImageUrl] = useState('');
    const storage = getStorage(app);
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const imageUrlParam = params.get('imageUrl');
        if (imageUrlParam) {
            const imageRef = ref(storage, imageUrlParam);
            getDownloadURL(imageRef)
                .then((url) => {
                    setImageUrl(url);
                    console.log('imageUrl:', url);
                })
                .catch((error) => {
                    console.error('Error getting download URL:', error);
                });
        }
    }, [location]);

    const handleInputChange = (key, value) => {
        // Update the invoiceData object with the new value
        invoiceData[key] = value;
    };

    const handleVerify = () => {
        // Navigate to the visualization page
        navigate('/receipt');
    };

    // Recursive function to render nested objects
    const renderNestedObjects = (data, parentKey = '') => {
        return Object.entries(data).map(([key, value]) => {
            const inputKey = parentKey ? `${parentKey}.${key}` : key;
            if (typeof value === 'object') {
                return renderNestedObjects(value, inputKey);
            } else {
                return (
                    <div key={inputKey} className="mb-4 mr-4">
                        <label htmlFor={inputKey} className="block font-medium">{inputKey}</label>
                        <input
                            type="text"
                            id={inputKey}
                            value={value}
                            onChange={(e) => handleInputChange(inputKey, e.target.value)}
                            className="border border-gray-400 rounded-md px-3 py-2 mt-1 w-50"
                        />
                    </div>
                );
            }
        });
    };

    return (
        <div className="flex border border-solid border-gray-300">
            <Navbar />
            <div className="w-1/2 p-4">
                {imageUrl && <img src={imageUrl} alt="Invoice" style={{ 'height': '500px', 'width': '500px ' }} />}
            </div>
            <div className="border border-solid border-gray-600 border-2 w-1/2 p-4">
                <h2 className="text-lg font-semibold mb-4">Structured Data</h2>
                {/* Display structured data here */}
                <div className="flex flex-wrap">
                    {renderNestedObjects(invoiceData)}
                </div>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={handleVerify}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Verify
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InvoicePage;
