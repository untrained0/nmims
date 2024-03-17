import React from 'react';
import './navbar.css'; // Import the CSS file
import textImage from '../assets/images/text.png';
import dataImage from '../assets/images/data.png';
import verificationImage from '../assets/images/verification.png';
import receiptsImage from '../assets/images/receipts.png';
import invoicesImage from '../assets/images/invoices.png';
import cardImage from '../assets/images/crad.png';
import settingImage from '../assets/images/settingf.png';
import logo from '../assets/images/simple-icon.svg';

function Navbar() {
    return (
        <div className="navbar">
            <div className="company-info">
                <img src={logo} alt="Company Logo" className="company-logo" />
                <h2 className="company-name">BillWise</h2>
            </div>
            <div className="navbar-header">
                <h2>Pipeline</h2>
                <ul>
                    <li><img src={textImage} alt="Image 1" /><span><a href="/upload3">Text Recognition</a></span></li>
                    <li><img src={dataImage} alt="Image 2" /><span><a href="/upload3">Data extraction</a></span></li>
                    <li><img src={verificationImage} alt="Image 3" /><span><a href="">Verification</a></span></li>
                </ul>
                <h2>Structured Data</h2>
                <ul>
                    <li><img src={receiptsImage} alt="Image 4" /><span><a href="">Receipts</a></span></li>
                    <li><img src={invoicesImage} alt="Image 5" /><span><a href="">Invoices</a></span></li>
                    <li><img src={cardImage} alt="Image 6" /><span><a href="">Card statements</a></span></li>
                </ul>
            </div>
            <div className="logo-settings-container">
                <div className="settings-button">
                    <p><img src={settingImage} alt="Settings" /><span>Settings</span></p>
                </div>
            </div>
        </div>
    );
}



export default Navbar;
