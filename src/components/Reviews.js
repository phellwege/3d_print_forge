import React from 'react'
import { Button, Card, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useStore } from '../context/StoreContext';
import { useUser } from '../context/UserContext';
import StarForDisplayComponent from './StarForDisplayComponent';

import '../views/main.css';

export default function Reviews() {
  const {
    ShopReviewsSwiper,
  } = useStore();
  const {
    user
  } = useUser();

  return (
    <>
    <Card id='reviewCard'>
        <Card.Body>
          <div>
            <h3>Shop Reviews</h3>
            <h5>Total average stars</h5>
          </div>
            <div className='cardInnerDiv' id='reviewCardInnerDiv'>
              <div className='reviewImgWindow'>
                <h5>Item Name</h5>
                {ShopReviewsSwiper()}
                <Link to='/Details'>Details</Link>
              </div>
                <ul>
                    <li>
                      <h6>User Who Purchased</h6>
                    </li>
                    <li><StarForDisplayComponent /></li>
                    <li>
                      <p>{user.reviews.reviewDescription}</p>
                    </li>
                </ul>
            </div>
            <h6> # / total</h6>
        </Card.Body>
    </Card>
    </>
  )
}
