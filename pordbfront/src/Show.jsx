import React from "react";
import { Link } from "react-router-dom";

const Show = (props) => {
    return (
      <div>
        <Link to="/">X</Link>
        <div>
            <h1>{props.title}</h1>
            <div>
                <span role="img" aria-label="Search">
                🔍
                </span>
                <span role="img" aria-label="Search">
                🔍
                </span>
                <span role="img" aria-label="Search">
                🔍
                </span>
            </div>
        </div>
        <div>
            <p>IP Policy/ToS</p>
            <p>{props.tos}</p>
        </div>
        <div>
            <p>Report Email/Webform</p>
            <p>{props.contact}</p>
        </div>
        <div>
            <p>Notice Requirements</p>
            <p>{props.description}</p>
        </div>
      </div>
    );
  }
  
  export default Show;