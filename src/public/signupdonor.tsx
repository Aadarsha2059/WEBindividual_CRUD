import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import "../assets/css/signupdonor.css";
import video from "../assets/images/signupdonarr.mp4";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

function SignupDonar() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const saveApi = useMutation({
    mutationKey: ["SAVE_API_OF_SIGUP_DONOR"],
    mutationFn(data) {
      return axios.post("http://localhost:8080/user", data);
    }
  });

  const submit = (data: any) => {
    saveApi.mutate(data, {
      onSuccess(res) {
        alert("Signed up successfully as a donor!");
        navigate('/login'); 
      }
    });
    console.log(data);
  }

  return (
    <>
      <video className="signup-donor-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="signup-box">
        <div className="back-button" onClick={() => navigate('/login')}>
          <button>Back</button>
        </div>
        <h1>Sign Up</h1>
        <h4>Become a registered book donor</h4>
        <form onSubmit={handleSubmit(submit)}>
          <label>User Name</label>
          <input type="text" {...register("userName")} placeholder="" required />
          <label>Email</label>
          <input type="email" {...register("email")} placeholder="" required />
          <label>Password</label>
          <input type="password" {...register("password")} placeholder="" required />
          <label>Address</label>
          <input type="text" {...register("address")} placeholder="" required />
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

export default SignupDonar;
