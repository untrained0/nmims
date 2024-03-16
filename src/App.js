import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UploadPage from './pages/UploadPage';
import { SignIn } from '@clerk/clerk-react';
import SigninPage from './pages/SigninPage';
import LoginScreen from './pages/LoginPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Login" element={<LoginScreen />} />
                <Route path="/Signin" element={<SigninPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/upload" element={<UploadPage />} />
            </Routes>
        </BrowserRouter>
        // <SigninPage />
    );
}

export default App;
