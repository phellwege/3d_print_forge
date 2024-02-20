import React, {useState, useEffect, useContext} from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button, Alert, OverlayTrigger, Tooltip } from 'react-bootstrap';
import NavBar from './NavBar/NavBar';

import { FiAlertCircle } from "react-icons/fi";

import "./header.css";
import logo from '../static/logos/DwarvenForgeLogo3.PNG';
import UserAvatar from '../static/UserAvatars/CatMan.png'

function Header(props) {

    const history = useNavigate();
    const [error, setError] = useState('');

    const handleClickImg = () => {
        history('/UserProfile')
    }
    const handleNavHome = () => {
        history('/')
    }

    const AlertNotificationMessage = "Notification";
    function AlertMessage(){
        // logic if a user has alerts
        return (
            <>
                <OverlayTrigger
                    overlay={
                    <Tooltip id='tooltip'>
                        {AlertNotificationMessage}
                    </Tooltip>
                }>
                    <span className='AlertMessageIconDiv'>
                        <FiAlertCircle size={25}/>
                    </span>
                    
                </OverlayTrigger>
            </>
        )
    }

return (
    <>
    <NavBar />
    <div className="head_wrap">
        <div className='headerLeft'>
            
        </div>
        <div className="headerMid">
            <div className='logobkg'>
                <img src={logo} alt="Logo" id="LogoSmall2" onClick={handleNavHome}/>
            </div>
            <h1>
                3D Forge <span className='betaTag'>Beta</span>
            </h1>
            {error && <Alert variant='danger' className='alerts' dismissible>{error}</Alert>}
        </div>
        <div className='headerRight'>
            <div className='avatarWindow'>
                {/* {AlertMessage()} */}
                <img src={UserAvatar} alt='userAvatar' id='userAvatar' onClick={handleClickImg}/>
                <Link to='/UserProfile'>UserName</Link>
                <Link to='/'>Login/Logout</Link>
            </div>
        </div>
    </div>
    </>
);
}

export default Header;