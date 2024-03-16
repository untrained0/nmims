import './uploadpage.css'
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { Link, useNavigate } from 'react-router-dom';
import FilePreview from '../components/FilePreview';
import ProgressBar from '../components/ProgressBar';
import AlertMessage from './AlertMessage';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from '../firebaseConfig';
import { generateRandomString } from '../utils/generateRandomString';

function UploadPage() {
    const [file, setFile] = useState();
    const [errorMsg, setErrorMsg] = useState();
    const [progress, setProgress] = useState(0);
    const [uploadCompleted, setUploadCompleted] = useState(false);
    const navigate = useNavigate();

    const storage = getStorage(app);
    const db = getFirestore(app);

    const onFileSelect = (file) => {
        console.log(file);
        if (file && file.size > 2000000) {
            setErrorMsg('File size is greater than 2MB');
            return;
        }
        setErrorMsg(null)
        setFile(file);
    }

    const uploadFile = (file) => {
        const metadata = {
            contentType: Image,
        };
    
        const storageRef = ref(storage, 'file-upload/' + file?.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setProgress(progress);

                if (progress === 100) {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        saveInfo(file, downloadURL);
                        setUploadCompleted(true);
                    });
                }
            })
    }

    const saveInfo = async (file, fileUrl) => {
        const docId = generateRandomString();
        await setDoc(doc(db, "uploadFile", docId), {
            fileName: file?.name,
            fileSize: file?.size,
            fileType: file?.type,
            fileUrl: fileUrl,
            password: '',
            id: docId.trim(),
        });
    }

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold text-center">Upload</h1>
                <div className="flex justify-center flex-wrap mb-8">
                    <div className="circle m-4">
                        <Link to="">1</Link>
                    </div>
                    <div className="circle m-4">
                        <Link to="">2</Link>
                    </div>
                    <div className="circle m-4">
                        <Link to="">3</Link>
                    </div>
                    <div className="circle m-4">
                        <Link to="">4</Link>
                    </div>
                </div>
                <hr className="my-8" />
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 text-center">
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

                <div>
                    {errorMsg ? <AlertMessage msg={errorMsg} /> : null}
                    {file ? <FilePreview file={file} removeFile={() => setFile(null)} /> : null}
                    {progress > 0 && !uploadCompleted ? <ProgressBar progress={progress} /> : null}
                    {uploadCompleted && (
                        <button
                            className=' p-2 bg-red-500 text-white w-[100%] rounded-lg mt-5 disabled:bg-gray-500'
                            onClick={() => navigate('/dashboard')}
                        >
                            Go to Dashboard
                        </button>
                    )}
                    {!uploadCompleted && (
                        <button
                            disabled={!file}
                            className=' p-2 bg-blue-500 text-white w-[100%] rounded-lg mt-5 disabled:bg-gray-500'
                            onClick={() => uploadFile(file)}
                        >
                            Upload
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}

export default UploadPage;
