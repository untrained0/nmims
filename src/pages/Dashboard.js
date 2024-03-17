import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../firebaseConfig";
import Modal from "react-modal"; // Import the Modal component
import { useNavigate } from "react-router-dom";

const db = getFirestore(app);

function Dashboard() {
    const [documents, setDocuments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [documentsPerPage] = useState(5); // Change this value as needed
    const [selectedImageUrl, setSelectedImageUrl] = useState(null); // Track selected image URL for modal
    const navigate = useNavigate();

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

    const redirectToUpload3Page = (imageUrl) => {
        navigate(`/upload3?imageUrl=${encodeURIComponent(imageUrl)}`);
    };
    

    const indexOfLastDocument = currentPage * documentsPerPage;
    const indexOfFirstDocument = indexOfLastDocument - documentsPerPage;
    const currentDocuments = documents.slice(indexOfFirstDocument, indexOfLastDocument);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const openModal = (imageUrl) => setSelectedImageUrl(imageUrl);
    const closeModal = () => setSelectedImageUrl(null);

    return (
        <div className="flex">
            <Navbar />
            <div className="container mx-auto p-8 bg-white rounded-lg shadow-md flex flex-col w-full">
                <div className="flex flex-row justify-between items-center mb-4">
                    <h1 className="text-3xl font-semibold" style={{ textAlign: "left" }}>
                        Dashboard
                    </h1>
                    <div className="ml-auto">
                        <button className="ask-button px-4 py-2 text-base border border-gray-400 rounded transition duration-300 hover:opacity-80">
                            <a href="https://billwise-jt9nzgm5qobuqg6c62go6j.streamlit.app/">Ask me</a>
                        </button>
                        <button className="upload-button ml-4 px-4 py-2 text-base bg-black text-white rounded transition duration-300 hover:opacity-80">
                            <a href="/upload">Upload</a>
                        </button>
                    </div>
                </div>
                <hr className="mb-4" />
                <div className="section mb-6">
                    <h3 className="text-lg font-semibold mb-2">Documents in Pipeline</h3>
                    <div
                        className="box1 bg-gray-200 p-4 rounded"
                        style={{ width: "100%", height: "400px", overflowX: "auto", overflowY: "hidden" }}
                    >
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
                                            <th className="px-4 py-2">Process</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentDocuments.map((doc, index) => (
                                            <tr key={index}>
                                                <td className="border px-4 py-2">{doc.fileName}</td>
                                                <td className="border px-4 py-2">{doc.fileSize}</td>
                                                <td className="border px-4 py-2">{doc.fileType}</td>
                                                <td className="border px-4 py-2">
                                                    <button onClick={() => openModal(doc.fileUrl)}>View</button>
                                                </td>
                                                <td className="border px-4 py-2">Extract</td>
                                                <td className="border px-4 py-2">
                                                <button className="btn-confirm" onClick={() => redirectToUpload3Page(doc.fileUrl)}>Start Extraction</button>
</td>

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
                <div className="section">
                    <h3 className="text-lg font-semibold mb-2">Latest Data Extractions</h3>
                    <div className="box2 bg-gray-200 p-4 rounded" style={{ width: "800px", height: "300px" }}>
                        <p className="text-gray-600">No data extractions</p>
                    </div>
                </div>
                <Modal isOpen={!!selectedImageUrl} onRequestClose={closeModal}>
                    {selectedImageUrl && <img src={selectedImageUrl} alt="Selected Image" />}
                    <button onClick={closeModal}>Close</button>
                </Modal>
            </div>
        </div>
    );
}

export default Dashboard;
