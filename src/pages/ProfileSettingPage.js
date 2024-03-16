import React from 'react';

export default function ProfileSettingPage({ email, phone }) {
    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-6">Profile Settings</h2>
            <div className="flex flex-col items-center space-y-4 mb-6">
                <div className="relative">
                    <img src="avatar.jpg" alt="Avatar" className="w-24 h-24 rounded-full" />
                    <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full px-2 py-1 cursor-pointer">Change Avatar</label>
                    <input type="file" id="avatar-upload" className="hidden" />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                    <label htmlFor="username" className="font-semibold">Username:</label>
                    <input type="text" id="username" value="johndoe" className="border border-gray-300 rounded-md px-3 py-2" />
                    <label htmlFor="email" className="font-semibold">Email:</label>
                    <input type="email" id="email" value={email} className="border border-gray-300 rounded-md px-3 py-2" />
                    <label htmlFor="phone" className="font-semibold">Phone:</label>
                    <input type="text" id="phone" value={phone} className="border border-gray-300 rounded-md px-3 py-2" />
                    <label htmlFor="bio" className="font-semibold">Bio:</label>
                    <textarea id="bio" className="border border-gray-300 rounded-md px-3 py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</textarea>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-4">Save Changes</button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded">Cancel</button>
            </div>
        </div>
    );
}
