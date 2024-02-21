import React from 'react'
import Header from '../components/Header'

import { Button, Card, Alert, Form, OverlayTrigger, Tooltip, FormGroup, FormLabel, FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsQuestionCircle } from "react-icons/bs";

import '../views/main.css';

export default function CreateStore() {

    const shopNameTooltip = "Enter a Shop Name";
    const businessAdressTooltip = "Enter a Business Address for your shop";
    const aboutMyShopTooltip ="Tell us about your shop";

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
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Upload Shop Logo</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>

                                <Form.Group>
                                    <Form.Label className="d-flex justify-content-between align-items-center" >
                                        <div className="text-center">
                                            <div>
                                                Shop Name
                                                <span className="required-indicator">{" "}*</span>
                                            </div>
                                            
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
                                            <div>
                                                Business Address
                                                <span className="required-indicator">{" "}*</span>
                                            </div>
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
                                            <div>
                                                About My Shop
                                                <span className="required-indicator">{" "}*</span>
                                            </div>
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
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <h3>Questionaire</h3>
                        <div className='cardInnerDiv'>
                            <Form>
                                <FormGroup>
                                    <FormLabel>Do you want to print things</FormLabel>
                                    <FormControl/>
                                    <br/>
                                    <FormLabel>How many 3d printers do you have?</FormLabel>
                                    <FormControl/>
                                    <br/>
                                    <FormLabel>How about custom prints?</FormLabel>
                                    <FormControl/>
                                    <br/>
                                    <FormLabel></FormLabel>
                                    <FormControl/>
                                </FormGroup>
                            </Form>
                        </div>
                    </Card.Body>
                </Card>
                <Button>Submit</Button>
                {/* after submission create entity and redirect to mystore page */}
            </div>
        </div>
        </>
    )
}
