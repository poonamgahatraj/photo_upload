import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import UploadPhoto from './picUpload';
import DisplayPhoto from './uploadedPics';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={UploadPhoto} />
        <Route path="/display" component={DisplayPhoto} />
      </div>
    </Router>
  );
}

export default App;
