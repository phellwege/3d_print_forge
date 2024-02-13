import React from 'react'
import { Button, Card, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';

// this is where a creator can upload a STL file to the marketplace, or offer their services for creating prints
export default function CreatorsHub() {
  return (
    <>
      <Card>
        <Card.Body>
          <h3>Sell File</h3>
          <div className='cardInnerDiv'>
            {/* upload area */}
            {/* Filename */}
            {/* description */}
            {/* cost */}
            <Button>Submit</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}
