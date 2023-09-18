import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react';
import Table from './Table.js';

function Form() {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  };

  return (
    <>
      <div className='mt-3 mb-3 d-flex align-items-center justify-content-center'>
        <form className=''>
          <label className='form-label'>Username</label><br />
          <input className='form-control' type='text' /><br />
          <label className='form-label'>Password</label><br />
          <input className='form-control' type='password' /><br />
          <label className='form-label'>Email</label><br />
          <input className='form-control' type='email' /><br />
          <input className='btn btn-secondary w-100' type='submit' value={"Register"}/><br />
          <button className='btn btn-primary w-100' type='button' onClick={handleClick}>Show Registers</button><br />
          {showComponent && <Table />}<br></br>
        </form>
      </div>
    </>
  );
}

export default Form;
