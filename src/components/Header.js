import React, {useState, useEffect, useContext} from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button, Alert, OverlayTrigger, Tooltip } from 'react-bootstrap';
import NavBar from './NavBar/NavBar';
import { useUser } from '../context/UserContext';

import { FiAlertCircle } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";

import "./header.css";
import logo from '../static/logos/DwarvenForgeLogo3.PNG';

function Header(props) {
    const {defaultUserAvatar} = useUser();
    const history = useNavigate();
    const [error, setError] = useState('');

    const handleClickImg = () => {
        history('/UserProfile')
    }
    const handleNavHome = () => {
        history('/')
    }

    const AlertNotificationMessage = "Notification";
    const ShoppingCartMessage = "Cart"
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
    function shoppingCart(){
        // logic for when there are items in cart
        return (
            <>
                <OverlayTrigger
                    overlay={
                    <Tooltip id='tooltip'>
                        {ShoppingCartMessage}
                    </Tooltip>
                }>
                    <span className='ShoppingCartIconDiv'>
                        <FaCartShopping size={25} />
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
                {shoppingCart()}
                <img src={defaultUserAvatar} alt='userAvatar' id='userAvatar' onClick={handleClickImg}/>
                <Link to='/UserProfile'>UserName</Link>
                <Link to='/'>Login/Logout</Link>
            </div>
        </div>
    </div>
    </>
);
}

export default Header;