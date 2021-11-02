import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../logo.png';

const Navbarx = () => {
    return (
        <div className='header wide'>
            <div>
                <Link className='NavbarBrand NavLink' to='/'>
                    <img alt='logo' className='logo' src={logo} />
                    <span>P</span>oints <span>O</span>f <span>R</span>
                    esponsibility <span>D</span>atabase
                </Link>
            </div>
            <div id='rightItms' className='header'>
                <div className='NavItem'>
                    <Link className='NavLink' to='/SignIn'>
                        Login
                    </Link>
                </div>
                <div className='NavItem'>
                    <Link className='NavLink' to='/Contribute'>
                        Contribute
                    </Link>
                </div>
                <div className='NavItem'>
                    <Link className='NavLink' to='/HowToUsePord'>
                        How To Use <span>Pord</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbarx;
