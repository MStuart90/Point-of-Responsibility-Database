import React from "react";

const Contribute = (props) => {
    return (
      <div className="formBox">
        <h1>Contribute</h1>
        <form>
          <label className="req">Required Field</label><br></br>
          <input type="text" name="name" placeholder="Company Name" /><br></br>
          <br></br>
          <label className="req">Required Field</label><br></br>
          <input type="text" name="link" placeholder="Link" /><br></br>
          <br></br>
          <input type="text" name="email" placeholder="Report Email/Webform" /><br></br>
          <br></br>
          <input type="text" name="tos" placeholder="Terms of Service/IP Policy" /><br></br>
          <br></br>
          <textarea rows="4" cols="50" name="comments" form="">Comments</textarea><br></br>
          <br></br>
          <button className="formBtn">Submit For Review</button>
        </form>
      </div>
    );
  }
  
  export default Contribute;