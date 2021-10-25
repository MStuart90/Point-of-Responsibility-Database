import React from 'react';
import { Link } from "react-router-dom";
import "./Navbarx.css";

  
const Navbarx = (props) => {
    return (
      <div className="header wide">
        <div>
            <img alt="logo" src="logo.svg" />
            <Link className="NavbarBrand NavLink" to="/"  >
                <span>P</span>oints <span>O</span>f <span>R</span>esponsibility <span>D</span>atabase
            </Link>
        </div>
        <div id="rightItms" className="header">
            <div className="NavItem">
                <Link className="NavLink" to="/SignIn">Login</Link>
            </div>
            <div className="NavItem">
                <Link className="NavLink" to="/Contribute">Contribute</Link>
            </div>
            <div className="NavItem">
                <Link className="NavLink" to="/HowToUsePord">How To Use <span>Pord</span></Link>
            </div>
        </div>
      </div>
    );
  };
  
  export default Navbarx;