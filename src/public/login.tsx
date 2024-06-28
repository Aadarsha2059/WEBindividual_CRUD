import "../assets/css/login.css"

function Login(){

    return (<> <div className="login-box">
        <h1>Login</h1>
        <form>
          <label>Email</label>
          <input type="email" placeholder="" />
          <label>Password</label>
          <input type="password" placeholder="" />
          <input type="button" value="Submit" />
        </form>
        <p className="para-2">
          Don't have an account? <a href="signupindex.html">Sign Up as Donor</a>
        </p>
      </div></>)

}

export default Login;