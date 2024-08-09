import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/loginseeker.css";
import loginSeekerImage from "../assets/images/loginseeker.png";
import video from "../assets/images/loginseeker.mp4"; 
import axios from "axios";

function LoginSeeker() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      alert("Please enter both name and password.");
    } else {
      axios.post("http://localhost:8080/user/login", {
        username: email,
        password: password,
      }).then((res) => {
        console.log(res);
        localStorage.setItem("loggedUserID", res?.data);
        navigate("/seekerspage");
      });
    }
  };

  return (
    <>
      <video className="login-seeker-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="login-page">
        <div className="login-container">
          <div className="image-container">
            <img src={loginSeekerImage} alt="Login Seeker Image" />
          </div>
          <div className="login-form">
            <h1>Login as A Seeker</h1>
            <form>
              <label>Seeker Name</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your name"
              />
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <input type="button" value="Submit" onClick={handleSubmit} />
            </form>
            <p className="info-text">
              Note: "If you have previously signed up as a donor, you can use the same name and password here to become a seeker."
            </p>
            <p className="para-2">
              Don't have a seeker account?{" "}
              <a onClick={() => navigate("/signupseeker")}>Sign Up as Seeker</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSeeker;
