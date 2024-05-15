import React, { useState } from 'react';

function UploadPhoto() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const imageUrl = event.target.result;
        localStorage.setItem('uploadedPhoto', imageUrl);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div>
      <h2>Upload Photo</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadPhoto;