import { X } from 'lucide-react'
import React from 'react'

function FilePreview({ file, removeFile }) {
  return (
    <div className='flex items-center gap-2 p-2 justify-between mt-5 border border-blue-200 rounded-md'>
      <div className='flex items-center p-2'>
        <img src='logo192.jpg' alt='file' className='w-12 h-12 object-cover' />
        <div className='text-left'>
          <h2>{file.name}</h2>
          <h2 className='text-gray-400 text-[12px]'>{file?.type} / {(file.size / 1024 / 1024).toFixed(3)}MB</h2>
        </div>
      </div>
      <X className='text-red-500 cursor-pointer' onClick={() => removeFile()} />
    </div>
  )
}

export default FilePreview
