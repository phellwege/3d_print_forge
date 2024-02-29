import React from 'react'
import Header from '../components/Header';
import { Button, Card, Alert} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineFileDownload } from "react-icons/md";
import { useUser } from '../context/UserContext';
import { useStore } from '../context/StoreContext';
import { CgProfile } from "react-icons/cg";

import SelectAvatar from '../components/modals/SelectAvatarModal';
import RateModal from '../components/modals/RateModal';

import StarForDisplayComponent from '../components/StarForDisplayComponent';

import './main.css';

// this is where the user can view and edit their profile. see the progress on their prints etc
export default function UserProfile() {
  const {
    user,
    UserSwiper,
  } = useUser();
  const {
    myStore
  } = useStore()
  const history = useNavigate();
  function handleNavCreateStore(){
    history('/CreateStore')
  }

  const OpenAvatarWindow = () => {
    const x = document.getElementsByClassName('openAvatarWindow')[0];
    if(x.style.display === 'block') {
        x.style.display = 'none';
    }
    else {
        x.style.display = 'block';
    }
  }

  function hasBeenReviewed(){
    if(user.reviews.reviewed){
        return(
            <>
              Already Reviewed
              {StarForDisplayComponent(user.reviews.rating)}
            </>
        )
    } else {
        return(
            <>
              <Button onClick={() => openRateWindow()}>OK</Button>
            </>
        )
    }
  }
  const openRateWindow = (clickedToReview) => {
    const x = document.getElementsByClassName('openRateWindow')[0];
    if(x.style.display === 'block') {
        x.style.display = 'none';
    }
    else {
        x.style.display = 'block';
    }
  }

  return (
    <>
    <Header />
    <SelectAvatar />
    <RateModal />
    <div className='pageWrap'>
      <h1>My Profile <CgProfile /></h1>
      <div className='secondaryPageWrapper'>
        <Card>
          <Card.Body>
            <h3>Profile</h3>
            <div className='cardInnerDiv'>
              <div>
                <img 
                  src={user.defaultUserAvatar} 
                  className='userProfileAvatarImg' 
                  alt='user Avatar'
                />
                <h5>Choose Avatar</h5>
                <Button onClick={()=> OpenAvatarWindow()}>Select</Button>
              </div>
              <div>
                <h5>Bio</h5>
                <p>lorem ipsum</p>
                <Button>Edit Bio</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
            <Card>
              <Card.Body>
                <h3>My Shop</h3>
                <div className='cardInnerDiv'>
                  {user.storeOwnership ? (
                    <>
                    <img 
                      src={myStore.logo} 
                      alt='Store Logo' 
                      className='storeImgPlaceholder'
                    />
                    <br/>
                    <h3>{myStore.shopName}</h3>
                    <p>{myStore.about}</p>
                    <Button>Edit</Button>
                    </>
                  ) : (
                    <>
                    <div>
                      <p>
                        You don't currently have a storefront
                      </p>
                      <Button onClick={handleNavCreateStore}>Open Shop</Button>
                    </div>
                    </>
                  )}
                </div>
              </Card.Body>
            </Card>
        <Card id='purchaseHistory'>
          <Card.Body>
            <h3>My Purchases</h3>
            <div className='cardInnerDiv'>
            <Table striped bordered hover variant='dark' id='purchaseHistoryTable'>
              <thead>
                <tr>
                  <th>Order Number</th>
                  <th>Date Purchased</th>
                  <th>Purchase Price</th>
                  <th>Get it printed</th>
                  <th>Leave a Review</th>
                  <th>Download Files</th>
                  <th>Need Help</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className='userSwiperWrap'>
                      {UserSwiper()}
                    </div>
                    <Link to='/Details'>Order #</Link>
                  </td>
                  <td>Date</td>
                  <td>$$$</td>
                  <td>Yes / No</td>
                  <td>{hasBeenReviewed()}</td>
                  <td><MdOutlineFileDownload size={25} className='purchasesIcon'/></td>
                  <td>Yes / No</td>
                </tr>
              </tbody>
            </Table>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
    </>
  )
}
