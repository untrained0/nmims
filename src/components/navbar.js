import React from 'react';

function Navbar() {
    return (
        <div className="navbar w-1/4 h-screen bg-white text-black p-8 float-left border-r">
            <h2 className="mb-4">Pipeline</h2>
            <ul>
                <li className="mb-4">Text Recognition</li>
                <li className="mb-4">Data extraction</li>
                <li className="mb-4">Verification</li>
            </ul>
            <h2 className="mt-8">Structured Data</h2>
            <ul>
                <li className="mb-4">Receipts</li>
                <li className="mb-4">Invoices</li>
                <li>Card statements</li>
            </ul>
        </div>
    );
}

export default Navbar;
