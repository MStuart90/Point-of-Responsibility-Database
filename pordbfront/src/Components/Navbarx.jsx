//import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import LogIn from "../LogIn";
import Contribute from "../Contribute";
import HowToUsePord from "../HowToUsePord";

import {
    //Collapse,
    Navbar,
    //NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
    //UncontrolledDropdown,
    //DropdownToggle,
    //DropdownMenu,
    //DropdownItem,
    //NavbarText
  } from "reactstrap";
  import "./Navbarx.css";
  
  const Navbarx = (props) => {
    return (
      <div className="navBox">
        <BrowserRouter>
            <Navbar>
                <NavbarBrand className="NavbarBrand" to="/">
                    <span>P</span>oints <span>O</span>f <span>R</span>esponsibility{" "}
                    <span>D</span>atabase
                </NavbarBrand>
                <Nav className="flexRow" navbar>
                    <NavItem className="NavItem">
                    <NavLink className="NavLink" to="/Login">
                        Login
                    </NavLink>
                    </NavItem>
                    <NavItem className="NavItem">
                    <NavLink className="NavLink" to="/Contribute">
                        Contribute
                    </NavLink>
                    </NavItem>
                    <NavItem className="NavItem">
                    <NavLink className="NavLink" to="/HowToUsePord">
                        How To Use <span>Pord</span>
                    </NavLink>
                    </NavItem>
                </Nav>
                <Switch>
                    <Route path="/LogIn">
                        <LogIn />
                    </Route>
                    <Route path="/Contribute">
                        <Contribute />
                    </Route>
                    <Route path="/HowToUsePord">
                        <HowToUsePord />
                    </Route>
                    <Route path="/" exact>
                        <LogIn/>
                    </Route>
                </Switch>
            </Navbar>
        </BrowserRouter> 
      </div>
    );
  };
  
  export default Navbarx;