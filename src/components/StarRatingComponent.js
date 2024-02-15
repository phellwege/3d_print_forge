import React, {useState} from 'react'
import { FaStar } from "react-icons/fa";
// this component allows you to save a star rating in state

export default function starRatingComponent() {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = userState(null)

    return (
        <>
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                    <label>
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
            <p>current Rating is {rating}</p>
        </>
    )
}
