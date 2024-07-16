import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/loginseeker.css";
import loginSeekerImage from "../assets/images/loginseeker.png";

function LoginSeeker() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (email && password) {
      // API validation here
      navigate("/seekerspage");
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
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
          <p className="para-2">
            Don't have an account?{" "}
            <a onClick={() => navigate("/signupseeker")}>Sign Up as Seeker</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginSeeker;
