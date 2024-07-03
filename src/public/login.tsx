import { useNavigate } from "react-router-dom";
import "../assets/css/login.css"
import "../assets/images/munamadan.png"

function Login(){

  const navigate=useNavigate();
    return (<> <div className="login-box">
        <h1>Login as A Donor</h1>
        <form>
          <label>Email</label>
          <input type="email" placeholder="" />
          <label>Password</label>
          <input type="password" placeholder="" />
          <input type="button" value="Submit" />
        </form>
        <p className="para-2">
          Don't have an account? <a onClick={()=>navigate("/singupdonar")}>Sign Up as Donor</a>
        </p>
      </div></>)

}

export default Login;