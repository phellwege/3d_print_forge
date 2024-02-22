import React, {useState} from 'react'
import Header from '../components/Header'

import { Button, Card, Alert, Form, OverlayTrigger, Tooltip, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsQuestionCircle } from "react-icons/bs";

import '../views/main.css';
import AddressInput from '../components/AddressInput';

export default function CreateStore() {

    const shopNameTooltip = "Enter a Shop Name";
    const businessAdressTooltip = "Enter a Business Address for your shop";
    const aboutMyShopTooltip ="Tell us about your shop";


    // address input
    const [address, setAddress] = useState({});
    const handleAddressChange = newAddress => {
        setAddress(prevAddress => ({
            ...prevAddress,
            ...newAddress
        }));
    };

    return (
        <>
        <Header />
        <div className='pageWrap'>
            <h1>Setup Shop</h1>
            <div className='secondaryPageWrapper'>
                <Card id='setupShopCard'>
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
                                    <AddressInput onChange={handleAddressChange}/>
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
                            <Form>
                                <Form.Group>
                                    <Form.Label>Do you want to print things</Form.Label>
                                    <Form.Control/>
                                    <br/>
                                    <Form.Label>How many 3d printers do you have?</Form.Label>
                                    <Form.Control/>
                                    <br/>
                                    <Form.Label>How about custom prints?</Form.Label>
                                    <Form.Control/>
                                    <br/>
                                    <Form.Label></Form.Label>
                                    <Form.Control/>
                                </Form.Group>
                            </Form>
                        </div>
                        <br/>
                        <Button>Submit</Button>
                    </Card.Body>
                </Card>
                {/* after submission create entity and redirect to mystore page */}
            </div>
        </div>
        </>
    )
}
