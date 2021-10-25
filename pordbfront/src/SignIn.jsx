import React from "react";
import { Link } from "react-router-dom";

const SignIn = (props) => {
    return (
      <div className="formBox">
        <h1>Already Have An Account?</h1>
        <h2>Sign In</h2>
        <br></br>
        <form>
          <input type="text" placeholder="Username" /><br></br>
          <br></br>
          <input type="password" placeholder="Password" /><br></br>
          <br></br>
          <button className="formBtn">Log In</button>
        </form>
        <br></br>
        <p>Don't Have An Account? <Link to="/SignUp">Create Account</Link></p>
        <p>Trouble Signing In? <Link to="/Contact" >Contact Us</Link></p>
      </div>
    );
  }
  
  export default SignIn;