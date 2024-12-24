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
        <h1>Login as A Donor</h1>
        <form onSubmit={handleSubmit(submit)}>
          <label>Username</label>
          <input type="text" placeholder="" required {...register('username')} />
          <label>Password</label>
          <input type="password" placeholder="" required {...register('password')} />
          <input type="submit" value="Submit" />
        </form>
        <p className="para-2">
          Don't have an account? <a onClick={() => navigate("/singupdonar")}>Sign Up as Donor</a>
        </p>
      </div>
    </>
  );
}

export default Login;
