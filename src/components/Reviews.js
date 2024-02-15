import React from 'react'
import { Button, Card, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../views/main.css'
export default function Reviews() {
  return (
    <>
    <Card>
        <Card.Body>
            <h3>Shop Reviews</h3>
            <h3>Total average stars</h3>
            <div className='cardInnerDiv'>
                <ul>
                    <li>Item - User Who Purchased</li>
                    <li>stars 0 - 5</li>
                    <li>Things to say</li>
                </ul>
            </div>
        </Card.Body>
    </Card>
    </>
  )
}
