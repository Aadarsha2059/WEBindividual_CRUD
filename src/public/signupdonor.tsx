import "../assets/css/signupdonor.css";
import video from "../assets/images/signupdonarr.mp4"; // Add your video file path

function SingupDonar() {
  return (
    <>
      <video className="signup-donor-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="signup-box">
        <h1>Sign Up</h1>
        <h4>Become a registered book donor</h4>
        <form action="login.html" method="get">
          <label>First Name</label>
          <input type="text" placeholder="" required />
          <label>Last Name</label>
          <input type="text" placeholder="" required />
          <label>Email</label>
          <input type="email" placeholder="" required />
          <label>Password</label>
          <input type="password" placeholder="" required />
          <label>Confirm Password</label>
          <input type="password" placeholder="" required />
          <input type="submit" value="Submit" />
        </form>
        <p>
          By clicking the Sign Up button, you agree to our <br />
          <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>
        </p>
      </div>
    </>
  );
}

export default SingupDonar;
