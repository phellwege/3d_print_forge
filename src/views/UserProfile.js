import React from 'react'
import Header from '../components/Header';
import { Button, Card, Alert} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { MdOutlineFileDownload } from "react-icons/md";
import { useUser } from '../context/UserContext';
import BackButton from '../components/BackButton';
import './main.css';

// this is where the user can view and edit their profile. see their jobs etc

export default function UserProfile() {

  const {
    UserSwiper
  } = useUser();

  // edit function to operate properly if user has registered a store
  function storeOwner() {
      return (
        <div>
          <p>You don't currently have a storefront</p>
          <Button>Open Shop</Button>
        </div>
      )
  }
  return (
    <>
    <Header />
    <div className='pageWrap'>
      <div className='secondaryPageWrapper'>
        <Card>
          <Card.Body>
            <h3>Profile</h3>
            <div className='cardInnerDiv'>
              <div>
                <h5>Choose Avatar</h5>
                <Button>Select</Button>
              </div>
              <div>
                <h5>Bio</h5>
                <p>lorem ipsum</p>
                <br/>
                <Button>Edit Bio</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <h3>My Shop</h3>
            <div className='cardInnerDiv'>
            {/* ternary if store owner or not */}
            {storeOwner()}
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
                  <td>Yes | Already Reviewed</td>
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
