import React from 'react';

function DisplayPhoto({ imageDataUrl }) {
  return (
    <div>
      <h2>Uploaded Image</h2>
      <img src={imageDataUrl} alt="Uploaded" style={{ maxWidth: '300px', maxHeight: '300px' }} />
    </div>
  );
}

export default DisplayPhoto;