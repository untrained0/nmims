import React from 'react';

const ProgressBar = ({ progress }) => {
    const progressBarColor = progress === 100 ? 'bg-blue-500' : 'bg-gray-300';

    return (
        <div className="w-full h-8 relative">
            <div className="w-full h-4 bg-gray-300 rounded-lg overflow-hidden">
                <div
                    className={`h-full ${progressBarColor}`}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold">
                {progress === 100 ? 'Completed' : `${progress}%`}
            </div>
        </div>
    );
};

export default ProgressBar;
