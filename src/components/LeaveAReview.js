import React from 'react'
import StarRatingComponent from './StarRatingComponent';
import { BsEmojiAngryFill } from "react-icons/bs";
import { Button, Card, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';

// leave a review for something you've purchased option only available after item has arrived or 1 day after purchasing STL
export default function LeaveAReview() {
  return (
    <>
        <Card>
            <Card.Body>
                <h3>Item Purchased</h3>
                <div className='cardInnerDiv'>
                    <StarRatingComponent/>
                    <div>
                        <h6>Tell us Why</h6>
                        <textarea />
                    </div>
                    <Button>Submit</Button>
                    <br/>
                    <sub>
                        Have a more serious issue with your order? 
                        <br/> 
                        <BsEmojiAngryFill size={20} color={'darkred'}/> 
                    </sub>
                </div>
            </Card.Body>
        </Card>
    </>
  )
}
