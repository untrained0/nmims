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
import ProfileSettingPage from './pages/ProfileSettingPage';
import ReceiptVisual from './pages/receiptsvisual';

function App() {
    const invoiceData = {
        "invoice_number": "INV0029",
        "invoice_date": "2022-10-28",
        "terms": "On Receipt",
        "customer": {
            "name": "Jon Hertz",
            "address": "1231231231",
            "email": "jon@invoicesimple.com"
        },
        "items": [
            {
                "description": "Lawn Mowing",
                "rate": 25.89,
                "quantity": 33,
                "amount": 854.37
            },
            {
                "description": "Weeds pulled also",
                "rate": 50.00,
                "quantity": 6,
                "amount": 300
            },
            {
                "description": "Gutter cleaning",
                "rate": 85.00,
                "quantity": 2,
                "amount": 170
            }
        ],
        "subtotal": 1324.37,
        "tax": 92.71,
        "total": 1417.08,
        "balance_due": 1417.08
    };
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/invoice" element={<InvoicePage invoiceData={invoiceData}/>} />
                <Route path="/Login" element={<LoginScreen />} />
                <Route path="/Signin" element={<SigninPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/upload" element={<UploadPage />} />
                <Route path="/upload3" element={<Upload3 />} />
                {/* <Route path="/visualize" element={<Dashboard />} /> */}
                {/* <Route path="/gradio" element={<GradioInterface />} /> Add this route */}
                <Route path = "/settings" element ={<ProfileSettingPage/>} />
                <Route path="/receipt" element={<ReceiptVisual />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
