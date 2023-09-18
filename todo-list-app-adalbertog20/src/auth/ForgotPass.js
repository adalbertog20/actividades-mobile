import 'bootstrap/dist/css/bootstrap.css';
import logo from '../logo-todo.png';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

export default function ForgotPass (){
  const navigate = useNavigate();
  const navigateToLogIn = () => {
    navigate('/');
  }
    return (
      <>
      <div className="mb-3 d-flex align-items-center justify-content-center">
        <form>
          <h1>Forgot Password</h1>
          <img style={{ width: 200, height: 200 }} src={logo} alt='Logo'></img><br></br>
          <label className="form-label">email</label><br />
          <input className="form-control" type="email" /><br />
          <input className="btn btn-primary w-100" value={"Send"} />
        </form>
      </div>
      <div className="mb-3 d-flex align-items-center justify-content-center">
        <button className='btn btn-secondary' onClick={navigateToLogIn}>Log In?</button>
      </div>
      </>
    );
}
