

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageUpload from './ImageUpload';
import ShowImages from './showImages';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ImageUpload />} />
          <Route path="/show-images" element={<ShowImages />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
