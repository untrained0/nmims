import React from 'react';

export default function ProfileSettingPage({ email, phone }) {
    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-6">Profile Settings</h2>
            <div className="flex flex-col items-center space-y-4 mb-6">
                <div className="relative flex items-center">
                    <label htmlFor="avatar-upload" className="relative bottom-0 right-0 bg-black text-white rounded-full px-2 py-1 cursor-pointer">ChangeAvatar</label>
                    <input type="file" id="avatar-upload" className="hidden" />
                </div>
                <div className="w-full">
                    <label htmlFor="username" className="font-semibold mb-1">Username:</label>
                    <input type="text" id="username" value="Piyush" className="border border-gray-300 rounded-md px-3 py-2 w-full mb-2" />
                </div>
                <div className="w-full">
                    <label htmlFor="email" className="font-semibold mb-1">Email:</label>
                    <input type="email" id="email" value={email} className="border border-gray-300 rounded-md px-3 py-2 w-full mb-2" />
                </div>
                <div className="w-full">
                    <label htmlFor="phone" className="font-semibold mb-1">Phone:</label>
                    <input type="text" id="phone" value={phone} className="border border-gray-300 rounded-md px-3 py-2 w-full mb-2" />
                </div>
                <div className="w-full">
                    <label htmlFor="bio" className="font-semibold mb-1">Bio:</label>
                    <textarea id="bio" className="border border-gray-300 rounded-md px-3 py-2 w-full mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</textarea>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="bg-black text-white font-semibold py-2 px-4 rounded mr-4 transition duration-300 ease-in-out">Save Changes</button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded transition duration-300 ease-in-out">Cancel</button>
            </div>
        </div>
    );
}
