import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from './auth/Login';
import ChangePass from './auth/ChangePass';
import ForgotPass from './auth/ForgotPass';
import SignUp from './auth/SignUp';

export default function App (){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}> </Route>
        <Route path="/signup" element={<SignUp />}> </Route>
        <Route path="/changepass" element={<ChangePass />}> </Route>
        <Route path="/forgotpass" element={<ForgotPass />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
