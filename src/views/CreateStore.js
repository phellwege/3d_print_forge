import React, {useState} from 'react'
import Header from '../components/Header'

import { Button, Card, Alert, Form, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsQuestionCircle } from "react-icons/bs";

import '../views/main.css';
import AddressInput from '../components/AddressInput';

export default function CreateStore() {

    // handling checking if they have resin/filament printers and displaying appropriately
    const [resin, setResin] = useState(null);
    const [filament, setFilament] = useState(null);

    const shopNameTooltip = "Enter a Shop Name";
    const businessAdressTooltip = "Enter a Business Address for your shop";
    const aboutMyShopTooltip ="Tell us about your shop";

    function hasResinPrinter(){
        if(resin){
            return(
                <>
                <Form.Label>How Many SLA (Resin) Printers?</Form.Label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5+</option>
                    </select>
                </>
            )
        } 
    }
    function hasFilamentPrinter(){
        if(filament){
            return(
                <>
                    <Form.Label>How Many FDM (Filament) Printers?</Form.Label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5+</option>
                        </select>
                </>
            )
        }
    }

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
                            <div className='cardInnerDivSeparator'>
                                <div className='cardInnerDivLeft'>
                                    <h3>Main Setup</h3>
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
                                </div>
                                <div className='cardInnerDivRight'>
                                    <h3>Questionnaire</h3>
                                <Form>
                                <Form.Group>
                                    <Form.Label>Do you want to sell printing services?</Form.Label>
                                    <br/>
                                    <Form.Check
                                    inline
                                    label="Yes"
                                    type={'checkbox'}
                                    />
                                    <Form.Check
                                    inline
                                    label="No"
                                    type={'checkbox'}
                                    />
                                    <br/>
                                    <Form.Label>Custom Prints too?</Form.Label>
                                    <br/>
                                    <Form.Check
                                    inline
                                    label="Yes"
                                    type={'checkbox'}
                                    />
                                    <Form.Check
                                    inline
                                    label="No"
                                    type={'checkbox'}
                                    />
                                    <br/>
                                    <Form.Label>What type of printers do you own?</Form.Label>
                                    <br/>
                                    <Form.Check
                                    inline
                                    label="SLA (Resin)"
                                    type={'checkbox'}
                                    onChange={setResin(true)}
                                    />
                                    <Form.Check
                                    inline
                                    label="FDM (Filament)"
                                    type={'checkbox'}
                                    onChange={setFilament(true)}
                                    />
                                    <br/>
                                    {/* these are used to calculate availability of jobs */}
                                    
                                    {hasResinPrinter()}
                                    {hasFilamentPrinter()}
                                </Form.Group>
                            </Form>
                                </div>
                            </div>
                            <br/>
                            <Button>Submit</Button>
                        </div>
                    </Card.Body>
                </Card>
                {/* after submission create entity and redirect to mystore page */}
            </div>
        </div>
        </>
    )
}
