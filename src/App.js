import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UploadPage from './pages/UploadPage';
// import { SignIn } from '@clerk/clerk-react';
import SigninPage from './pages/SigninPage';
import LoginScreen from './pages/LoginPage';
import Home from './pages/home';
import Upload3 from './pages/upload3';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<LoginScreen />} />
                <Route path="/Signin" element={<SigninPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/upload" element={<UploadPage />} />
                <Route path="/upload3" element={<Upload3 />} />

            </Routes>
        </BrowserRouter>
        // <SigninPage />
    );
}

export default App;
