import React, { useState } from 'react';
import Navbar from '../components/navbar';

function UploadPage() {
    const [file, setFile] = useState();
    const [errorMsg, setErrorMsg] = useState();

    const onFileSelect = (file) => {
        console.log(file);
        if (file && file.size > 2000000) {
            setErrorMsg('File size is greater than 2MB');
            return;
        }
        setErrorMsg(null)
        setFile(file);
    }

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold text-center">Upload</h1>
                <div className="flex justify-center flex-wrap mb-8">
                    <div className="circle m-4">
                        <a href="">1</a>
                    </div>
                    <div className="circle m-4">
                        <a href="">2</a>
                    </div>
                    <div className="circle m-4">
                        <a href="">3</a>
                    </div>
                    <div className="circle m-4">
                        <a href="">4</a>
                    </div>
                </div>
                <hr className="my-8" />
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 light:hover:bg-bray-800 light:bg-gray-700 hover:bg-gray-100 light:border-gray-600 light:hover:border-gray-500 light:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-blue-500 light:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-lg text-gray-500 light:text-gray-400"><span className="font-semibold">Click to upload</span> or <strong className='text-PRIMARY'>drag</strong> and <strong className='text-PRIMARY'>drop</strong></p>
                            <p className="text-xs text-gray-500 light:text-gray-400">SVG, PNG, JPG or GIF (Max Size: 2MB)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden"
                            onChange={(event) => onFileSelect(event.target.files[0])} />
                    </label>
                </div>
            </div>
        </>
    );
}

export default UploadPage;
