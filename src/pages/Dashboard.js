import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../firebaseConfig";

const db = getFirestore(app);

function Dashboard() {
  const [documents, setDocuments] = useState([]);

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
              Ask me
            </button>
            <button className="upload-button ml-4 px-4 py-2 text-base bg-black text-white rounded transition duration-300 hover:opacity-80">
              <a href="/upload">Upload</a>
            </button>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="section mb-6">
          <h3 className="text-lg font-semibold mb-2">Documents in Pipeline</h3>
          <div className="box1 bg-gray-200 p-4 rounded" style={{ width: "100%", height: "300px", overflowX: "auto", overflowY: "hidden" }}>
            {documents.length === 0 ? (
              <p className="text-gray-600">Pipeline is empty</p>
            ) : (
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
                  {documents.map((doc, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{doc.fileName}</td>
                      <td className="border px-4 py-2">{doc.fileSize}</td>
                      <td className="border px-4 py-2">{doc.fileType}</td>
                      <td className="border px-4 py-2">
                        <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer">View</a>
                      </td>
                      <td className="border px-4 py-2">Extract</td>
                      <td className="border px-4 py-2">
                        <a href={`/process/${doc.id}`}>Start Extraction</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
        <div className="section">
          <h3 className="text-lg font-semibold mb-2">Latest Data Extractions</h3>
          <div className="box2 bg-gray-200 p-4 rounded" style={{ width: "800px", height: "300px" }}>
            <p className="text-gray-600">No data extractions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
