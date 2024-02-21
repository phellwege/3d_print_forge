import React, {useState} from 'react'
import { FaStar } from "react-icons/fa";
import { useUser } from '../context/UserContext';

// this component allows you to see a star rating's state
import '../views/main.css'
export default function StarForDisplayComponent() {
    const {rating} = useUser();

    return (
        <>
            <div  className='ratingComponent'>
                {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                        <label key={index}>
                            <FaStar 
                            className='star' size={20} 
                            color={currentRating <= (rating) ? '#ffc107' : '#e4e5e9'}
                            />
                        </label>
                    )
                })}
            </div>
        </>
    )
}
