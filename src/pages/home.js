import React from 'react';
import image from '../assets/images/receipts.png';
import logo from '../assets/images/logo.svg';

function Home() {
    return (
        <div className="flex flex-col items-center">
            {/* Navbar */}
            <header className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
                    <span className="text-lg font-semibold">BillWise</span>
                </div>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Login</button>
            </header>

            {/* Main Content */}
            <main className="w-full flex justify-center items-center mt-8">
                <div className="w-1/2 p-8">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
                    <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec quam non eros rutrum blandit. Donec eu nisl et ex eleifend fringilla.</p>
                    <p className="text-lg mb-4">Suspendisse potenti. Cras laoreet nisl eu est hendrerit, a vehicula libero congue.</p>
                </div>
                <div className="w-1/2">
                    <img src={logo} alt="Logo" className="w-full h-50" /> {/* Adjust size as needed */}
                </div>
            </main>
        </div>
    );
}

export default Home;
