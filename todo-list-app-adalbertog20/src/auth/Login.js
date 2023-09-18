import 'bootstrap/dist/css/bootstrap.css';
import logo from '../logo-todo.png';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function Login (){
  const navigate = useNavigate();
  const navigateToForgot = () => {
    navigate('/forgotpass');
  }
  const navigateToSignUp = () => {
    navigate('/signup');
  }
  return (
    <>
      <div className="mb-3 d-flex align-items-center justify-content-center">
        <form className='needs-validation' noValidate>
          <h1>Login</h1>
          <img style={{ width: 200, height: 200 }} src={logo} alt='Logo'></img><br></br>
          <label className="form-label">username</label><br />
          <input pattern='^([^0-9]*)$'  className="form-control" type="text" required/><br />
          <label className="form-label">Password</label><br />
          <input className="form-control" type="password" /><br />
          <input type={"submit"} className="btn btn-primary" value={"Log In"} />
        </form>
      </div>
      <div className="mb-3 d-flex align-items-center justify-content-center">
        <button className='btn btn-secondary' onClick={navigateToForgot}>ForgotPass</button>
      </div>
      <div className="mb-3 d-flex align-items-center justify-content-center">
        <button className='btn btn-success' onClick={navigateToSignUp}>SignUp</button>
      </div>
    </>
  );
}
