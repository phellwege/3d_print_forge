import React from 'react'
import { Button, Card, Alert, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsPlusSquareDotted } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";

import '../views/main.css'
export default function uploadStl() {
    
  return (
    <>
        <Card>
            <Card.Body>
                <h3>Upload STL(s)</h3>
                <div className='cardInnerDiv'>
                    <BsPlusSquareDotted size={250} color={'#E0AC9D'} className='uploadPlusSign' />
                    <Form>
                      <Form.Group>
                        <Form.Label className="d-flex justify-content-between align-items-center" >
                        <div className="text-center">
                                File Name<span className="required-indicator">*</span>{" "}
                                <span className="question-icon">
                                    <BsQuestionCircle />
                                </span>
                        </div>
                        </Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Name'
                        maxLength='50'
                        className="mobile-textarea"
                        />
                        <br/>
                        <Form.Label className="d-flex justify-content-between align-items-center" >
                        <div className="text-center">
                                Price<span className="required-indicator">*</span>{" "}
                                <span className="question-icon">
                                    <BsQuestionCircle />
                                </span>
                        </div>
                        </Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Price'
                        maxLength='50'
                        className="mobile-textarea"
                        />
                        <br/>
                        <Form.Label className="d-flex justify-content-between align-items-center" >
                        <div className="text-center">
                                Description<span className="required-indicator">*</span>{" "}
                                <span className="question-icon">
                                    <BsQuestionCircle />
                                </span>
                        </div>
                        </Form.Label>
                        <Form.Control
                        type='textArea'
                        placeholder='Description'
                        maxLength='300'
                        className="mobile-textarea"
                        />
                      </Form.Group>
                    </Form>
                    {/* <h5>Name</h5>
                    <p>description</p>
                    <h5>Price</h5> */}
                </div>
                <br/>
                <Button>Save</Button>
                <br/>
            </Card.Body>
        </Card>
        
    </>
  )
}
