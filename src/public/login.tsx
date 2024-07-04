import { useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import "../assets/images/munamadan.png";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    //email and password validation 

    // moving to donorspage
    navigate("/donorspage");
  };

  return (
    <div className="login-box">
      <h1>Login as A Donor</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" placeholder="" required />
        <label>Password</label>
        <input type="password" placeholder="" required />
        <input type="submit" value="Submit" />
      </form>
      <p className="para-2">
        Don't have an account? <a onClick={() => navigate("/singupdonar")}>Sign Up as Donor</a>
      </p>
    </div>
  );
}

export default Login;
