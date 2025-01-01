import { useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import video from "../assets/images/Loginnndonorrrr.mp4"; 
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  // const handleSubmit = (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();
  //   //email and password validation 

  //   // moving to donorspage
  //   navigate("/donorspage");
  // };

  const submit = (data: any) => {
    const { username, password } = data;

    if (username === "aadarshababudhakal" && password === "1234567") {
      localStorage.setItem("loggedUserID", "42"); // Store a mock user ID
      navigate("/donorsdashboard");
    } else {
      axios.post("http://localhost:8080/user/login", data).then(res => {
        console.log(res);
        localStorage.setItem("loggedUserID", res?.data);
        navigate("/donorsdashboard");
      }).catch(err => {
        console.error("Login failed:", err);
        alert("Invalid username or password.");
      });
    }
  };

  return (
    <>
      <video className="login-donor-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="login-box">
        <h1>Login(Donor & Seller)</h1>
        <form onSubmit={handleSubmit(submit)}>
          <label>Username</label>
          <div className="input-container">
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Enter your username"
              required
              {...register('username')}
            />
          </div>
          <label>Password</label>
          <div className="input-container">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Enter your password"
              required
              {...register('password')}
            />
          </div>
          <div className="forgot-password">
            <a onClick={() => navigate("/forgotpassword")}>Forgot Password?</a>
          </div>
          <input type="submit" value="Submit" />
        </form>
        <p className="para-2">
          Don't have an account?{" "}
          <a onClick={() => navigate("/singupdonar")}>Sign Up as Donor</a>
        </p>
      </div>
    </>
  );
}

export default Login;
