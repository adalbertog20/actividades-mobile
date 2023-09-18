import 'bootstrap/dist/css/bootstrap.css';
import logo from '../logo-todo.png';
import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import InputField from './InputField.js';
import './SignUp.css';

export default function SignUp (){

  const navigate = useNavigate();

  const navigateToLogIn = () => {
    navigate('/');
  }

  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  
  const handleInputChangeName = (e) => {
    const { value } = e.target;
    const regex = /^[A-Za-z\s]+$/;
      if(value === '' || regex.test(value)) {
        setInputValue(value);
        setError('');
      } else {
        setError("Please Dont Insert Numbers");
      }
  };
  
  return (
    <>
    <div className="mb-3 d-flex align-items-center justify-content-center">
      <form>
        <div className="mb-3 d-flex align-items-center justify-content-center">
          <h1>Sign Up</h1>
        </div>
        <img style={{ width: 200, height: 200 }} src={logo} alt='Logo'></img><br></br>
        <InputField placeholder="Full Name" value={inputValue} onChange={handleInputChangeName} type={"text"}/>
        <div className="mb-3 d-flex align-items-center justify-content-center">
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <InputField placeholder="Password" type={"password"} />
        <button className="btn btn-success w-100">submit</button>
      </form>
    </div>
    <div className="mb-3 d-flex align-items-center justify-content-center">
      <button className='btn btn-secondary' onClick={navigateToLogIn}>Log In?</button>
    </div>
    </>
  );
}
  
