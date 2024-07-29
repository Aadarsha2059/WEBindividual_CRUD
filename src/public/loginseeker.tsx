import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/loginseeker.css";
import loginSeekerImage from "../assets/images/loginseeker.png";
import video from "../assets/images/loginseeker.mp4"; // Add your video file path

function LoginSeeker() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      alert("Please enter both email and password.");
    } else if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
    } else {
      // API validation here
      navigate("/seekerspage");
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
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
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
              Note: "If you have previously signed up as a donor, you can use the same email and password here to become a seeker."
            </p>
            <p className="para-2">
              Don't have an  seeker account?{" "}
              <a onClick={() => navigate("/signupseeker")}>Sign Up as Seeker</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSeeker;
