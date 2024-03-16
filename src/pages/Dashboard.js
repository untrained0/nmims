import React from 'react';
import Navbar from '../components/navbar';

function Dashboard() {
    return (
        <>
        <Navbar />
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-center text-3xl font-semibold">Dashboard</h1>
            <div className="flex justify-end mb-4">
                <button className="ask-button px-4 py-2 text-base border border-gray-400 rounded transition duration-300 hover:opacity-80">Ask me</button>
                <button className="upload-button ml-4 px-4 py-2 text-base bg-black text-white rounded transition duration-300 hover:opacity-80"><a href="/upload">Upload</a></button>
            </div>
            <hr className="mb-4" />
            <div className="section mb-6">
                <h3 className="text-lg font-semibold mb-2">Documents in Pipeline</h3>
                <div className="box1 bg-gray-200 p-4 rounded">
                    <p className="text-gray-600">No documents in pipeline</p>
                </div>
            </div>
            <div className="section">
                <h3 className="text-lg font-semibold mb-2">Latest Data Extractions</h3>
                <div className="box2 bg-gray-200 p-4 rounded">
                    <p className="text-gray-600">No data extractions</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;
