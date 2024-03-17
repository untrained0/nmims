// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UploadPage from './pages/UploadPage';
import SigninPage from './pages/SigninPage';
import LoginScreen from './pages/LoginPage';
import Home from './pages/home';
import Upload3 from './pages/upload3';
import GradioInterface from './GradleInterface';
import InvoicePage from './pages/VerificationOfFile';
import Vizualization from './pages/Visualition';

function App() {
  const invoiceData = {
    "invoice_no": "01-143008",
    "date": "09/01/2019",
    "time": "20:01:11",
    "cashier": "01",
    "items": [
        {
            "description": "Plastic",
            "quantity": 2,
            "price": 15.50,
            "amount": 31.00
        }
    ],
    "total_amount": 31.00,
    "cash_received": 101.00,
    "change": 70.00
};
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/invoice" element={<InvoicePage invoiceData={invoiceData}/>} />
                <Route path="/Login" element={<LoginScreen />} />
                <Route path="/Signin" element={<SigninPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/upload" element={<UploadPage />} />
                <Route path="/upload3" element={<Upload3 />} />
                <Route path="/visualize" element={<Vizualization />} />
                {/* <Route path="/gradio" element={<GradioInterface />} /> Add this route */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
