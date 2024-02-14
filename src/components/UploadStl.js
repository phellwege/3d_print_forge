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
                    <BsPlusSquareDotted size={250} color={'lightgrey'}/>
                </div>
                
            </Card.Body>
        </Card>
        
    </>
  )
}
