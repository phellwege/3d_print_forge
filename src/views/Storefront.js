import React from 'react'
import Header from '../components/Header'
import { Button, Card, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// this is where you will have a description of your store and show current items for sale from your shop
export default function Storefront() {
  return (
    <>
    <Header />
    <div className='pageWrap'>
      {/* TODO this will be renamed if the customer has a store */}
      <h1>My Store</h1>
      {/* TODO store image, with a place to upload new image */}
      <div className='secondaryPageWrapper'>
      <Card>
        <Card.Body>
          <h3>About</h3>
          <div className='cardInnerDiv'>
            <p>text</p>
            <Button>Edit</Button>
          </div>
        </Card.Body>
      </Card>

      {/* add service or item to your store */}
      {/* if doing prints for people how many printers do you have and what type of printer is it SL or FDM */}
      {/* Owner only -> can go to creationhub where they have a todo and list of current jobs */}

      </div>
    </div>
    </>
  )
}
