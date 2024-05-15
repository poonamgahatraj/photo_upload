import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pic_upload from './picUpload';
import UploadPics from './uploadedPics';

export default function Router(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Pic_upload/> }>
        <Route path='/UploadedPic'  element={<UploadPics/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
