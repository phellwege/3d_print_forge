import React, {useState, useEffect, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Alert } from 'react-bootstrap';
import NavBar from './NavBar/NavBar';
import "./header.css";
import logo from '../static/logos/DwarvenForgeLogo3.PNG';


function Header(props) {
    const history = useNavigate();
    const [error, setError] = useState('');

return (
    <>
    <NavBar />
    <div className="head_wrap">
        <div className='headerLeft'>
            
        </div>
        <div className="headerMid">
            <div className='logobkg'>
                <img src={logo} alt="Logo" id="LogoSmall2"/>
            </div>
            <h1>
                3D Forge <span className='betaTag'>Beta</span>
            </h1>
            {error && <Alert variant='danger' className='alerts' dismissible>{error}</Alert>}
        </div>
        <div className='headerRight'>
            USER STUFF
        </div>
    </div>
    </>
);
}

export default Header;