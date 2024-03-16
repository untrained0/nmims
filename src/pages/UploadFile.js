import React, { useEffect, useState } from 'react'
import UploadPage from './UploadPage';

function Upload() {
    const [progress, setProgress] = useState(0);
    const [uploadComplete, setUploadComplete] = useState(false);
    const [fileDocId, setFileDocId] = useState();

    const uploadFile = (file) => {
        // Upload logic
    }

    useEffect(() => {
        // useEffect logic
    }, [progress === 100]);

    useEffect(() => {
        // useEffect logic
    }, [uploadComplete]);

    return (
        <div className='p-5 md:px-28'>
            <h2 className='text-[20px] text-center m-5'><strong className='text-PRIMARY'>Upload </strong> files and <strong className='text-PRIMARY'>Share </strong>it</h2>
            <UploadPage onUploadClick={(file) => uploadFile(file)} progress={progress} />
        </div>
    )
}

export default Upload