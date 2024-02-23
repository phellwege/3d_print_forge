import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, Alert} from 'react-bootstrap';
import { FaShop } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { useUser } from '../context/UserContext';
import { useStore } from '../context/StoreContext';

import StoreImagePlaceHolder from '../static/logos/DwarvenForgeLogo5.PNG';

import './main.css';

import Header from '../components/Header';
import UploadStl from '../components/UploadStl';
import TodoComponent from '../components/TodoComponent';
import PrintMarketPlace from '../components/PrintMarketPlace';
import Reviews from '../components/Reviews';
import CurrentItemsForSale from '../components/CurrentItemsForSale';
import PrinterStatus from '../components/PrinterStatus';


// this is where you will have a description of your store and show current items for sale from your shop
export default function Storefront() {

  // this will come from an average rating of all items shop has
  const {
    rating, 
    reviewed,
  } = useUser();
  const {
    hasPrinter,
  } = useStore();
  return (
    <>
    <Header />
    <div className='pageWrap'>
      {/* TODO this will be renamed if the customer has a store */}
      <h1>My Store <FaShop /></h1>
      {reviewed && (
        <>
          <div className='ratingComponent'>
            <h3>Average Rating</h3>
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
              return (
                <label key={index}>
                  <FaStar 
                    size={20} 
                    color={currentRating <= (rating) ? '#ffc107' : '#e4e5e9'}
                  />
                </label>
              )
            })}
          </div>
        </>
      )}
      {/* TODO store image, with a place to upload new image, use nsfwjs to keep bad images from being used */}
      <div className='secondaryPageWrapper'>
      <Card>
        <Card.Body>
          <h3>About</h3>
          <div className='cardInnerDiv'>
            <img src={StoreImagePlaceHolder} alt='Store Logo' className='storeImgPlaceholder'/>
            <br/>
            <Button>Upload New Logo</Button>
            <h5>Address</h5>
            <Button>Edit</Button>
            <p>Info About My shop</p>
            <Button>Edit</Button>
          </div>
        </Card.Body>
      </Card>
      {reviewed && (
        <Reviews />
      )}
      <UploadStl />
      <CurrentItemsForSale />
      </div>
      {hasPrinter && (
        <>
          <h1>3D Printing Section</h1>
          <div className='secondaryPageWrapper'>
            <PrinterStatus />
            <TodoComponent />
            <PrintMarketPlace />
          </div>
        </>
      )}
    </div>
    </>
  )
}
