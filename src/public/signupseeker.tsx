// SignupSeeker.tsx
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../assets/css/signupseeker.css";
import video from "../assets/images/finalsignupseekerbuyer.mp4";
import { FaUser, FaEnvelope, FaLock, FaMapMarkerAlt } from "react-icons/fa"; // Icons

interface SeekerData {
  seekerName: string;
  email: string;
  password: string;
  address: string;
}

function SignupSeeker() {
  const { register, handleSubmit, reset } = useForm<SeekerData>();
  const navigate = useNavigate();

  const saveApi = useMutation({
    mutationKey: ["SAVE_API_OF_SIGNUP_SEEKER"],
    mutationFn: (data: SeekerData) => {
      return axios.post("http://localhost:8080/user", data);
    },
    onSuccess: () => {
      alert("Signed up successfully");
      reset(); // Reset the form fields after successful submission
      navigate("/loginseeker"); // Navigate to the LoginSeeker page
    },
    onError: (error: any) => {
      alert("Error saving data: " + error.message);
    },
  });

  const submit = (data: SeekerData) => {
    saveApi.mutate(data);
  };

  return (
    <>
      <video className="signup-seeker-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="signup-seeker-box">
        <div className="back-button" onClick={() => navigate('/loginseeker')}>
          <button>Back</button>
        </div>
        <h1>Sign Up</h1>
        <h4>Become a registered book seeker</h4>
        <form onSubmit={handleSubmit(submit)}>
          <div className="input-box">
            <FaUser className="icon" />
            <input
              type="text"
              {...register("seekerName")}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="input-box">
            <FaEnvelope className="icon" />
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-box">
            <FaLock className="icon" />
            <input
              type="password"
              {...register("password")}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="input-box">
            <FaMapMarkerAlt className="icon" />
            <input
              type="text"
              {...register("address")}
              placeholder="Enter your address"
              required
            />
          </div>
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

export default SignupSeeker;
