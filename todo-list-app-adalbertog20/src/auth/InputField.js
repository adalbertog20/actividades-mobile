import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

const InputField = (props) => {
  return(
    <>
      <div>
       <input className="form-control mb-3" placeholder={props.placeholder} value={props.value} onChange={props.onChange} type={props.type}/>
      </div>
    </>
  )
}
 export default InputField;
