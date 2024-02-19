import React from 'react'
import { Button, Card, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsPlusSquareDotted } from "react-icons/bs";

import '../views/main.css'

export default function UploadStoreImg() {
    
  return (
    <>
        <Card>
            <Card.Body>
                <h3>Upload Company Logo</h3>
                <div className='cardInnerDiv'>
                    <BsPlusSquareDotted size={200} className='uploadPlusSign'/>
                    <h3>Upload File</h3>
                </div>
                <br/>
                <Button>Save</Button>
                <br/>
            </Card.Body>
        </Card>
    </>
  )
}
