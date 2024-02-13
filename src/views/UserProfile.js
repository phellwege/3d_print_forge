import React from 'react'
import Header from '../components/Header';
import { Button, Card, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './main.css'

// this is where the user can view and edit their profile. see their jobs etc

export default function UserProfile() {
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
      </div>
    </div>
    </>
  )
}
