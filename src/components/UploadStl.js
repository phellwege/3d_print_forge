import React from 'react'
import { Button, Card, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsPlusSquareDotted } from "react-icons/bs";

import '../views/main.css'
export default function uploadStl() {
    
  return (
    <>
        <Card>
            <Card.Body>
                <h3>Upload STL</h3>
                <div className='cardInnerDiv'>
                    <BsPlusSquareDotted size={250} color={'#E0AC9D'} className='uploadPlusSign' />
                    <h3>Upload File</h3>
                    <h5>Name</h5>
                    <p>description</p>
                    <h5>Price</h5>
                </div>
                <br/>
                <Button>Save</Button>
                <br/>
            </Card.Body>
        </Card>
        
    </>
  )
}
