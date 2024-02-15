import React, {useState, useEffect, useContext} from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button, Alert } from 'react-bootstrap';
import NavBar from './NavBar/NavBar';
import "./header.css";
import logo from '../static/logos/DwarvenForgeLogo3.PNG';
import UserAvatar from '../static/UserAvatars/Zebra.png'

function Header(props) {
    const history = useNavigate();
    const [error, setError] = useState('');
    const handleClickImg = () => {
        history('/UserProfile')
    }
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
            <div className='avatarWindow'>
                <img src={UserAvatar} alt='userAvatar' onClick={handleClickImg}/>
                <br/>
                <Link to='/UserProfile'>UserName</Link>
                <Link to='/'>Login/Logout</Link>
            </div>
        </div>
    </div>
    </>
);
}

export default Header;