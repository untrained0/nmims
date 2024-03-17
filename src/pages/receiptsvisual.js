import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../firebaseConfig";
import './receiptvisual.css';
import distribution from '../assets/images/distribution.png';
import monthexp from '../assets/images/monthexp.png';
import card3 from '../assets/images/card3.png';

function ReceiptVisual() {

    const db = getFirestore(app);

    const [documents, setDocuments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [documentsPerPage] = useState(5); // Change this value as needed

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "uploadFile"));
                const data = querySnapshot.docs.map((doc) => doc.data());
                setDocuments(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const indexOfLastDocument = currentPage * documentsPerPage;
    const indexOfFirstDocument = indexOfLastDocument - documentsPerPage;
    const currentDocuments = documents.slice(indexOfFirstDocument, indexOfLastDocument);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="flex flex-row">
            <Navbar />
            <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
                <div className="flex justify-between mb-6">
                    <h1 className="text-3xl font-semibold">Receipt Visual</h1>
                    <div>
                        <button className="ask-button px-4 py-2 text-base border border-gray-400 rounded transition duration-300 hover:opacity-80">
                            <a href="https://huggingface.co/spaces/nielsr/donut-docvqa">Ask me</a>
                        </button>
                        <button className="upload-button ml-4 px-4 py-2 text-base bg-black text-white rounded transition duration-300 hover:opacity-80">
                            <a href="/upload">Upload</a>
                        </button>
                    </div>
                </div>

                {/* Wrapper for cards */}
                <h1 style={{ 'font-size': '20px', 'text': 'bold' }}>Overview</h1>
                <div className="flex justify-between mb-6">
                    <div className="card">
                        <h3 className="card-title">Average monthly expenses</h3>
                        <img src={monthexp} alt="Image 1" className="w-full h-auto" />
                    </div>
                    <div className="card">
                        <h3 className="card-title">Category distribution</h3>
                        <img src={distribution} alt="Image 2" className="w-full h-auto" />
                    </div>
                    <div className="card">
                        <h3 className="card-title">Statistics</h3>
                        <img src={card3} alt="Image 3" className="w-full h-auto" />
                    </div>
                </div>

                {/* Content from Dashboard's box1 */}
                <div className="box1 bg-gray-200 p-4 rounded" style={{ width: "100%", height: "320px", overflowX: "auto", overflowY: "hidden" }}>
                    {currentDocuments.length === 0 ? (
                        <p className="text-gray-600">Pipeline is empty</p>
                    ) : (
                        <>
                            <table className="table-auto">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">File Name</th>
                                        <th className="px-4 py-2">File Size</th>
                                        <th className="px-4 py-2">File Type</th>
                                        <th className="px-4 py-2">File URL</th>
                                        <th className="px-4 py-2">Status</th>
                                        <th className="px-4 py-2">Category</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentDocuments.map((doc, index) => (
                                        <tr key={index}>
                                            <td className="border px-4 py-2 text-center">{doc.fileName}</td>
                                            <td className="border px-4 py-2 text-center">{doc.fileSize}</td>
                                            <td className="border px-4 py-2 text-center">{doc.fileType}</td>
                                            <td className="border px-4 py-2 text-center">
                                                <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer">View</a>
                                            </td>
                                            <td className="border px-4 py-2 text-center text-green-500">Done</td>
                                            <td className="border px-4 py-2 text-center">Receipts</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="pagination-container flex justify-center my-4">
                                <button
                                    className="pagination-button mr-4 px-4 py-2 border border-gray-400 rounded transition duration-300 hover:opacity-80"
                                    onClick={() => paginate(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </button>
                                <button
                                    className="pagination-button ml-4 px-4 py-2 border border-gray-400 rounded transition duration-300 hover:opacity-80"
                                    onClick={() => paginate(currentPage + 1)}
                                    disabled={currentDocuments.length < documentsPerPage}
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ReceiptVisual;
