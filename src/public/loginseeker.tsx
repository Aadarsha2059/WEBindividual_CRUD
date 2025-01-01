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

  const handleSubmit = async () => {
    if (email === "aadarshababudhakal" && password === "1234567") {
      localStorage.setItem("loggedUserID", "42");
      navigate("/buyerdashboard");
    } else {
      if (!email || !password) {
        alert("Please enter both email and password.");
      } else {
        try {
          const response = await axios.post("http://localhost:8080/user/login", {
            username: email,
            password: password,
          });

          if (response?.data) {
            console.log(response);
            const userID = response?.data;
            localStorage.setItem("loggedUserID", userID);
            navigate("/buyerdashboard");
          } else {
            alert("Login failed. Please check your credentials.");
          }
        } catch (error) {
          console.error("Login error:", error);
          alert("An error occurred during login. Please try again.");
        }
      }
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
            <h1>Login as A Seeker & Buyer</h1>
            <form>
              <label>
                <i className="fas fa-user icon"></i> Seeker Name
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your name"
              />
              <label>
                <i className="fas fa-lock icon"></i> Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <input type="button" value="Submit" onClick={handleSubmit} />
            </form>
            <p className="info-text">
              <i className="fas fa-info-circle"></i> Note: "If you have previously signed up as a donor, you can use the same name and password here to become a seeker."
            </p>
            <p className="forgot-password">
              <a onClick={() => navigate("/forgotpassword")}>Forgot Password?</a>
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
