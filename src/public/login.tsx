import { useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import "../assets/images/munamadan.png";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const {register,handleSubmit}=useForm();

  // const handleSubmit = (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();
  //   //email and password validation 

  //   // moving to donorspage
  //   navigate("/donorspage");
  // };

  const submit=(data:any)=>{
      axios.post("http://localhost:8080/user/login",data).then(res=>{
        console.log(res);
        localStorage.setItem("loggedUserID",res?.data)
        navigate("/donorspage");
      })
  }

  return (
    <div className="login-box">
      <h1>Login as A Donor</h1>
      <form onSubmit={handleSubmit(submit)}>
        <label>Username</label>
        <input type="text" placeholder="" required {...register('username')}/>
        <label>Password</label>
        <input type="password" placeholder="" required {...register('password')} />
        <input type="submit" value="Submit" />
      </form>
      <p className="para-2">
        Don't have an account? <a onClick={() => navigate("/singupdonar")}>Sign Up as Donor</a>
      </p>
    </div>
  );
}

export default Login;
