import React, { useState } from 'react';
import DisplayPhoto from './uploadedPics';

function ImageUpload() {
  const [imageSrc, setImageSrc] = useState('');
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = () => {
      const imageDataUrl = reader.result;
      setImageSrc(imageDataUrl);
      
      // Save image to local storage
      localStorage.setItem('uploadedImage', imageDataUrl);
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <div>
      <h1>Image Upload</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imageSrc && <DisplayPhoto imageDataUrl={imageSrc} />}
    </div>
  );
}

export default ImageUpload;
