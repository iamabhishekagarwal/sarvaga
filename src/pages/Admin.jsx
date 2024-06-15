import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDropzone } from 'react-dropzone';

const Admin = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedFiles([]);
  };

  const handleDrop = (acceptedFiles) => {
    // Filter out duplicate files
    const uniqueFiles = acceptedFiles.filter(
      (file) => !selectedFiles.some((selectedFile) => selectedFile.name === file.name)
    );
    setSelectedFiles([...selectedFiles, ...uniqueFiles]);
  };

  const handleDelete = (index) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle file upload logic here
    closeModal();
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: 'image/*',
    multiple: true
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={openModal}
      >
        Add Images
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="relative aspect-w-1 aspect-h-1">
          <img src="https://via.placeholder.com/200" alt="product" className="w-full h-full object-cover" />
          <div className="absolute top-2 right-2 space-x-2">
            <button
              className="bg-yellow-500 text-white px-2 py-1 rounded"
              onClick={openModal}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
        {/* Add more placeholder images as needed */}
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">
            Add Images
          </h2>
          <form onSubmit={handleSubmit}>
            <div
              {...getRootProps()}
              className={`border-4 border-dashed p-20 mb-4 text-center ${isDragActive ? 'border-green-500' : 'border-gray-300'} rounded-lg`}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="text-lg font-semibold text-green-500">Drop the files here ...</p>
              ) : (
                <p className="text-lg font-semibold text-gray-500">Drag 'n' drop some images here, or click to select images</p>
              )}
            </div>
            {selectedFiles.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="relative border border-gray-300 rounded-lg overflow-hidden">
                    <img
                      src={URL.createObjectURL(file)}
                      alt="Selected"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                    <p className="text-center text-sm mt-2">{file.name}</p>
                  </div>
                ))}
              </div>
            )}
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Admin;
