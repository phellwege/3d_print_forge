import React, {useState} from 'react'
import { FaStar } from "react-icons/fa";
import { useUser } from '../context/UserContext';
// this component allows you to save a star rating in state
import '../views/main.css'
export default function StarRatingComponent() {
    const {user, setUser} = useUser();
    const [hover, setHover] = useState(null)
    const handleRatingClick = (rating) => {
        setUser({
            ...user,
            reviews: {
                ...user.reviews,
                rating: rating
            }
        });
    };
    return (
        <>
            <div  className='ratingComponent'>
                {[...Array(5)].map((star, index) => {
                    const rating = index + 1;
                    return (
                        <label key={index}>
                            <input 
                                type='radio'
                                name='rating'
                                value={rating}
                                onClick={() => handleRatingClick(rating)}
                            />
                            <FaStar 
                            className='star' size={25} 
                            color={rating <= (hover || user.reviews.rating) ? '#ffc107' : '#e4e5e9'}
                            onMouseEnter={() => setHover(rating)}
                            onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    )
                })}
            </div>
        </>
    )
}
