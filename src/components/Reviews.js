import React from 'react'
import { Button, Card, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

import '../views/main.css';

export default function Reviews() {
  const {
    ShopReviewsSwiper
  } = useStore();

  const showDetailModal = () => {
    const x = document.getElementsByClassName('showDetailModal')[0];
    if(x.style.display == 'block') {
        x.style.display = 'none';
    }
    else {
        x.style.display = 'block';
    }
  }
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
                {/* images here swiper probably */}
                <br/>
                <div onClick={showDetailModal()}>Details</div>
              </div>
                <ul>
                    <li>User Who Purchased</li>
                    <li>stars 0 - 5</li>
                    <li>Things to say</li>
                </ul>
            </div>
            <h6> # / total</h6>
        </Card.Body>
    </Card>
    </>
  )
}
