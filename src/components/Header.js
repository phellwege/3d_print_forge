import React, {useState, useEffect, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Alert } from 'react-bootstrap';
import NavBar from './NavBar/NavBar';
import "./header.css";
// import {useAuth} from '../context/authContext';
import logo from '../static/logos/DwarvenForgeLogo5';
// import {IoReturnUpBackSharp} from 'react-icons/io5';

function Header(props) {
    const history = useNavigate();
    const [error, setError] = useState('');
    // const {
    //     currentUser, 
    //     logout, 
    //     defaultUserPic,
    //     profilePicBkgClr,
    //     } = useAuth();
    
    async function handleLogout(){
        setError('')
        try {
            await logout()
            history('/SignIn');
        } catch {
            setError('Failed to Logout')
        }
    }
    // const ifNotfrontPage = () => {
    //     if(window.location.pathname !== '/'){
    //         return (
    //             <Link to='/' className='backButton'>
    //                 <IoReturnUpBackSharp className='backButton'/>
    //             </Link>
    //         )
    //     }
    // }
    const profileSection = () => {
        // if(currentUser) {
        //     return (
        //         <>
        //             <div className='avatarWindow' style={{backgroundColor:profilePicBkgClr}}>
        //                 <img src={defaultUserPic} alt='avatar profile image' />
        //             </div>
        //             <div className="w-100 text-center mt-2">
        //                 <Link to="/Profile">
        //                     Profile
        //                 </Link>
        //                 <br/>
        //                 {currentUser.email}
        //                 <br/>
        //                 <Link to='/SignIn' onClick={() => handleLogout()}>Logout</Link>
        //             </div>
        //         </>
        //     )
        // } else {
            return (
            <div className="w-100 text-center mt-2">
            <Link to='/SignIn'>Login</Link>
            <h6 id='loginOrRegisterTags'>OR</h6>
            <Link to='/SignUp'>Register</Link>
        </div> 
        )}
    // }
return (
    <>
    <NavBar />
    <div className="head_wrap">
        <div className='headerLeft'>
            <div className='logobkg'>
                <img src={logo} alt="Logo" id="LogoSmall2"/>
            </div>
        </div>
        <div className="headerMid">
            <h1>
                Resumancy <span className='betaTag'>Beta</span>
            </h1>
            <h4 id="beta_tag">
                AI Resume Builder
            </h4>
            {error && <Alert variant='danger' className='alerts' dismissible>{error}</Alert>}
        </div>
        <div className='headerRight'>
            {profileSection()}
        </div>
    </div>
    {/* {ifNotfrontPage()} */}
    </>
);
}

export default Header;