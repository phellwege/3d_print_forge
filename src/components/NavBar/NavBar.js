import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { ThemeProvider } from 'styled-components';
import Toggle from '../Toggle/DayNight_Mode';
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import GlobalStyle from '../globalStyle';

import { FaHome } from "react-icons/fa";
import { IoStorefrontSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaShop } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

import "./NavBar.css";
import { useUser } from '../../context/UserContext';


const NavBar = () => {
    const history = useNavigate();
    const [toggled, setToggled] = useState(false);
    const [theme, setTheme] = useState({mode: 'dark'})
    const {
        user
    } = useUser()
    const handleClick =() => {
        setToggled((s)=>!s);
        setTheme(theme.mode === 'dark' ? {mode: 'light'}: {mode:'dark'})
    }
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }
    useEffect(() => {
        const data = window.localStorage.getItem('UnleashedCVWizardThemeKey')
        if(data != null) setTheme(JSON.parse(data))
    }, [])

    useEffect(() => {
        window.localStorage.setItem('UnleashedCVWizardThemeKey', JSON.stringify(theme)) 
    }, [theme])
    let menuRef = useRef();

    useEffect(() => {
        let handler = (event) => {
            if(!menuRef.current.contains(event.target)){
                setNavbarOpen(false);
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler);
        }
    })

// the first set is dark mode the second is light mode
// dark contrast color b1b1b3
// light contrast color #111
    return (
        <>
        <ThemeProvider theme={theme}>
        <GlobalStyle />
            <div id="Hamburger_Menu">
                <nav ref={menuRef} className="navBar">
                    <button 
                    id='openCloseButton'
                    aria-label='hamburger menu button'
                    onClick={handleToggle}>
                        {navbarOpen ? (
                        <MdClose style={{ color: "#E0AC9D", width: "40px", height: "40px" }} />
                        ) : (
                        <FiMenu style={{ color: "#E0AC9D", width: "40px", height: "40px" }} />
                        )}
                    </button>
                        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                            <li>
                                <Link to='/' onClick={() => closeMenu()}>
                                    <FaHome className='navIcons'/> Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/MarketPlace' onClick={() => closeMenu()}>
                                    <IoStorefrontSharp className='navIcons'/> Marketplace
                                </Link>
                            </li>
                            <li>
                                <Link to='/Cart' onClick={() => closeMenu()}>
                                    <FaCartShopping className='navIcons'/> My Cart
                                </Link>
                            </li>
                            {user.storeOwnerShip && (
                                <li>
                                    <Link to="/Storefront" onClick={() => closeMenu()}>
                                        <FaShop className='navIcons'/> My Shop
                                    </Link>
                                </li>
                            )}
                            {user.id ? (
                                <li>
                                    <Link to="/UserProfile" onClick={() => closeMenu()}>
                                        <CgProfile className='navIcons'/> Profile
                                    </Link>
                                </li>
                            ):(
                                <li>
                                    <Link to="/setupUser" onClick={() => closeMenu()}>
                                        Create Profile
                                    </Link>
                                </li>
                            )}
                            <li>
                                <div className="Mode" id='menu_toggle' onClick={() => closeMenu()}>
                                    <Toggle toggled={toggled} onClick={handleClick} />
                                    {theme.mode === 'dark' ? "Dark" : "Light"}
                                </div>
                            </li>
                        </ul>
                </nav>
            </div>
            </ThemeProvider>
        </>
    )
}
export default NavBar;