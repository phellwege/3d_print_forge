import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

import '../views/main.css';

export default function BackButton() {
    const history = useNavigate();
    const handleGoBack = () => {
        history(-1);
    };
    const ifNotfrontPage = () => {
        return (
            <div onClick={handleGoBack} className='backButton'>
                <IoMdArrowRoundBack className='backButton'/>
            </div>
        )
    }
  return (
    <>
        {ifNotfrontPage()}
    </>
  )
}
