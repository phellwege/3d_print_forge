import React from 'react'
import Header from '../components/Header'

import { Button, Card, Alert, Form, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsQuestionCircle } from "react-icons/bs";

import '../views/main.css';

export default function CreateStore() {

    const shopNameTooltip = "Enter a Shop Name";
    const businessAdressTooltip = "";
    const aboutMyShopTooltip ="";

    return (
        <>
        <Header />
        <div className='pageWrap'>
            <h1>Setup Shop</h1>
            <div className='secondaryPageWrapper'>
                <Card>
                    <Card.Body>
                        <div className='cardInnerDiv'>
                            <Form>
                                <Form.Group>
                                    <Form.Label className="d-flex justify-content-between align-items-center" >
                                        <div className="text-center">
                                            Shop Name
                                            <span className="required-indicator">*</span>{" "}
                                            <OverlayTrigger
                                            overlay={<Tooltip id="tooltip">{shopNameTooltip}</Tooltip>}
                                            >
                                                <span className="question-icon">
                                                    <BsQuestionCircle />
                                                </span>
                                            </OverlayTrigger>
                                        </div>
                                            {/* <sub>({defaultResume.firstName.length} / 25)</sub> */}
                                    </Form.Label>
                                    <Form.Control 
                                    type='text' 
                                    placeholder='Store Name'
                                    // value={defaultResume.firstName}
                                    // onChange={(e) => handleChange('firstName', e.target.value)}
                                    maxLength='50'
                                    className="mobile-textarea"
                                    />
                                    <br/>
                                    <Form.Label className="d-flex justify-content-between align-items-center" >
                                        <div className="text-center">
                                            Business Address
                                            <span className="required-indicator">*</span>{" "}
                                            <OverlayTrigger
                                            overlay={<Tooltip id="tooltip">{businessAdressTooltip}</Tooltip>}
                                            >
                                                <span className="question-icon">
                                                    <BsQuestionCircle />
                                                </span>
                                            </OverlayTrigger>
                                        </div>
                                            {/* <sub>({defaultResume.firstName.length} / 25)</sub> */}
                                    </Form.Label>
                                    <Form.Control 
                                    type='text' 
                                    placeholder='Address'
                                    // value={defaultResume.firstName}
                                    // onChange={(e) => handleChange('firstName', e.target.value)}
                                    maxLength='75'
                                    className="mobile-textarea"
                                    />
                                    <br/>
                                    <Form.Label className="d-flex justify-content-between align-items-center" >
                                        <div className="text-center">
                                            About My Shop
                                            <span className="required-indicator">*</span>{" "}
                                            <OverlayTrigger
                                            overlay={<Tooltip id="tooltip">{aboutMyShopTooltip}</Tooltip>}
                                            >
                                                <span className="question-icon">
                                                    <BsQuestionCircle />
                                                </span>
                                            </OverlayTrigger>
                                        </div>
                                            {/* <sub>({defaultResume.firstName.length} / 25)</sub> */}
                                    </Form.Label>
                                    <Form.Control 
                                    type='text' 
                                    placeholder='Store Name'
                                    // value={defaultResume.firstName}
                                    // onChange={(e) => handleChange('firstName', e.target.value)}
                                    maxLength='50'
                                    className="mobile-textarea"
                                    />
                                </Form.Group>
                            </Form>
                        </div>
                        <br/>
                        <Button>Submit</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
        </>
    )
}
