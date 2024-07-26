import { useForm } from "react-hook-form";
import "../assets/css/signupdonor.css";
import video from "../assets/images/signupdonarr.mp4"; // Add your video file path
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

function SingupDonar() {

  const {register,handleSubmit}=useForm();

  const saveApi=useMutation({
    mutationKey:["SAVE_API_OF_SIGUP_DONOR"],
    mutationFn(data) {
return axios.post("http://localhost:8080/user",data)
    }

  })

  const submit=(data)=>{
    saveApi.mutate(data,{
      onSuccess(res){
        alert("data saved")
      }
    })
    console.log(data);
  }
  return (
    <>
      <video className="signup-donor-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="signup-box">
        <h1>Sign Up</h1>
        <h4>Become a registered book donor</h4>
        <form onSubmit={handleSubmit(submit)}>
          <label>User Name</label>
          <input type="text" {...register("userName")} placeholder="" required />
          {/* <label>Last Name</label>
          <input type="text" placeholder="" required /> */}
          <label>Email</label>
          <input type="email" {...register("email")} placeholder="" required />
          <label>Password</label>
          <input type="password" {...register("password")} placeholder="" required />
          <label>Address</label>
          <input type="text" placeholder="" {...register("address")} required />
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
