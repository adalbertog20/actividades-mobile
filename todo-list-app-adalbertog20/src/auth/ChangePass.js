import 'bootstrap/dist/css/bootstrap.css';
import logo from '../logo-todo.png';
function ChangePass() {
    return (
      <>
      <div className="mb-3 d-flex align-items-center justify-content-center">
        <form>
          <h1>Reset Password</h1>
          <img style={{ width: 200, height: 200 }} src={logo} alt='Logo'></img><br></br>
          <label className="form-label">password</label><br />
          <input className="form-control" type="password" /><br />
          <label className="form-label">password</label><br />
          <input className="form-control" type="password" /><br />
          <input className="btn btn-primary" value={"Reset"} />
        </form>
      </div>
      </>
    );
  }
  
  export default ChangePass;