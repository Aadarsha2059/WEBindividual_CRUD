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
    // Mock login credentials
    if (email === "aadarshababudhakal" && password === "1234567") {
      // Store a mock user ID
      localStorage.setItem("loggedUserID", "42");
      // Navigate directly to BuyerDashboard
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
            console.log(response); // Log the response to check the data
            const userID = response?.data; // Assuming the response contains the user ID
            localStorage.setItem("loggedUserID", userID);

            // Now navigate to BuyerDashboard
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
