import React, { useState } from 'react';
import fileService from '../../services/file.service';

export default function Upload() {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleFileChange = e => {
        setFile(e.target.files[0]);
        setError('');
        setSuccess('');
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!file) {
            setError('Please select a file.');
            return;
        }

        try {
            setUploading(true);
            await fileService.uploadFile(file);
            setSuccess('File uploaded successfully.');
            setFile(null);
        } catch (err) {
            setError(err.response?.data?.message || 'Upload failed');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <form onSubmit={handleSubmit}>
                <label
                    htmlFor="file-upload"
                    className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer"
                >
                    <svg
                        className="h-12 w-12 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                    <span className="mt-2 text-gray-500">
            {file ? file.name : 'Click to select a file'}
          </span>
                    <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </label>

                {error && <p className="text-red-600 mt-2">{error}</p>}
                {success && <p className="text-green-600 mt-2">{success}</p>}

                <button
                    type="submit"
                    className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
                    disabled={!file || uploading}
                >
                    {uploading ? 'Uploading...' : 'Upload'}
                </button>
            </form>
        </div>
    );
}
