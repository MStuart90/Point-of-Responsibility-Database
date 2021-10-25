import React from "react";
import { Link } from "react-router-dom";

const SignUp = (props) => {
    return (
      <div className="formBox">
        <h1>Create Account</h1>
        <br></br>
        <form className="col">
          <input type="text" placeholder="Username" /><br></br>
          <br></br>
          <input type="password" placeholder="Password" />
          <br></br>
          <br></br>
          <div className="row">
            <div>
                <input type="email" placeholder="email*" />   
            </div>
            <div>
                <p>*Used for registration only. We do not store your email address.</p>
            </div>
          </div>
          <button className="formBtn">Submit</button>
        </form>
        <br></br>
        <p>Trouble Signing Up? <Link to="/Contact" >Contact Us</Link></p>
      </div>
    );
    }

  
export default SignUp;