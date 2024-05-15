import React from 'react';

function DisplayPhoto() {
  const uploadedPhotoUrl = localStorage.getItem('uploadedPhoto');

  return (
    <div>
      <h2>Uploaded Photo</h2>
      {uploadedPhotoUrl ? (
        <img src={uploadedPhotoUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />
      ) : (
        <p>No photo uploaded</p>
      )}
    </div>
  );
}

export default DisplayPhoto;