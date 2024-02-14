import React from 'react'
import Header from '../components/Header'

import { Button, Card, Alert, Form, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsQuestionCircle } from "react-icons/bs";
export default function CreateStore() {
  return (
    <>
    <Header />
    <div className='pageWrap'>
        <h1>Create A Shop</h1>
        <div className='secondaryPageWrapper'>
            <Form>
                <Form.Group>
                    <Form.Label className="d-flex justify-content-between align-items-center" >
                        <div className="text-center">
                            Shop Name<span className="required-indicator">*</span>{" "}
                            {/* <OverlayTrigger
                            overlay={<Tooltip id="tooltip">{userFirstName}</Tooltip>}
                            > */}
                            <span className="question-icon">
                                <BsQuestionCircle />
                            </span>
                            {/* </OverlayTrigger> */}
                        </div>
                            {/* <sub>({defaultResume.firstName.length} / 25)</sub> */}
                    </Form.Label>
                    <Form.Control 
                    type='text' 
                    placeholder='first name'
                    // value={defaultResume.firstName}
                    // onChange={(e) => handleChange('firstName', e.target.value)}
                    maxLength='50'
                    className="mobile-textarea"
                    />
                    <br/>
                </Form.Group>
            </Form>
        </div>
    </div>
    </>
  )
}
