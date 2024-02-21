import React, {useState} from 'react'
import { FaStar } from "react-icons/fa";
import { useUser } from '../context/UserContext';
// this component allows you to save a star rating in state
import '../views/main.css'
export default function StarRatingComponent() {
    const {rating, setRating} = useUser();
    const [hover, setHover] = useState(null)

    return (
        <>
            <div  className='ratingComponent'>
                {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                        <label key={index}>
                            <input 
                                type='radio'
                                name='rating'
                                value={currentRating}
                                onClick={() => setRating(currentRating)}
                            />
                            <FaStar 
                            className='star' size={25} 
                            color={currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    )
                })}
            </div>
        </>
    )
}
