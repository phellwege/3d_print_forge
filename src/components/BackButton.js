import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

import '../views/main.css';

export default function BackButton() {
    const ifNotfrontPage = () => {
        if(window.location.pathname !== '/'){
            return (
                <Link to='/Storefront' className='backButton'>
                    <IoMdArrowRoundBack className='backButton'/>
                </Link>
            )
        }
    }
  return (
    <>
        {ifNotfrontPage()}
    </>
  )
}
