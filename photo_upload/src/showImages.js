// src/components/ShowImages.js

import React, { useState, useEffect } from 'react';

const ShowImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem('uploadedImages'));
    if (savedImages) {
      setImages(savedImages);
    }
  }, []);

  return (
    <div>
      <h1>Uploaded Images</h1>
      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Uploaded ${index}`} style={{ maxWidth: '200px', margin: '10px' }} />
        ))}
      </div>
    </div>
  );
};

export default ShowImages;
