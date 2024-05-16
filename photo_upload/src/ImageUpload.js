

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem('uploadedImages'));
    if (savedImages) {
      setImages(savedImages);
    }
  }, []);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files).map(file => URL.createObjectURL(file));
    const updatedImages = [...images, ...newImages];

    setImages(updatedImages);
    localStorage.setItem('uploadedImages', JSON.stringify(updatedImages));
  };

  const handleShowImages = () => {
    navigate('/show-images');
  };

  return (
    <div>
      <input type="file" multiple accept="image/*" onChange={handleImageUpload} />
      <button onClick={handleShowImages}>Show Uploaded Images</button>
      {/* <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Uploaded ${index}`} style={{ maxWidth: '200px', margin: '10px' }} />
        ))}
      </div> */}
    </div>
  );
};

export default ImageUpload;
