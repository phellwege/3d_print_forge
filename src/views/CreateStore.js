import React, {useState} from 'react'
import Header from '../components/Header'
import { Button, Card, Alert, Form, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { BsQuestionCircle } from "react-icons/bs";

import '../views/main.css';
import AddressInput from '../components/AddressInput';
import { useStore } from '../context/StoreContext';
import { useUser } from '../context/UserContext';

export default function CreateStore() {
    const history = useNavigate()
    const {
        hasPrinter, setHasPrinter,
        customPrints, setCustomPrints,
        printerInUse, setPrinterInUse,
        slaPrinter, setSlaPrinter,
        fdmPrinter, setFdmPrinter,
    } = useStore();
    const {
        setStoreOwnership,
    } = useUser();
    // handling checking if they have resin/filament printers and displaying appropriately
    const [resin, setResin] = useState(null);
    const [filament, setFilament] = useState(null);

    const shopNameTooltip = "Enter a Shop Name";
    const aboutMyShopTooltip ="Tell us about your shop";

    const handleResinChange = (e) => {
        setResin(e.target.checked);
        if (e.target.checked) {
            setSlaPrinter(1);
        } else {
            setSlaPrinter(null);
        }
    };
    const handleFilamentChange = (e) => {
        setFilament(e.target.checked);
        if (e.target.checked) {
            setFdmPrinter(1);
        } else {
            setFdmPrinter(null);
        }
    };
    const handleHasPrinter = (e) => {
        setHasPrinter(prevState => !prevState);
    }
    const handleCustomPrints = (e) => {
        setCustomPrints(prevState => !prevState);
    }
    const handleStoreOwnership = (e) => {
        setStoreOwnership(true);
        history('/Storefront');
    }
    const handleSettingAmountOfSla = (e) => {
        setSlaPrinter(parseInt(e.target.value))
    }
    const handleSettingAmountOfFdm = (e) => {
        setFdmPrinter(parseInt(e.target.value))
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
                                        <Form.Control 
                                        type="file"
                                        accept='image/*'
                                        />
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
                                            as={'textarea'} 
                                            rows={3}
                                            placeholder='About'
                                            // value={defaultResume.firstName}
                                            // onChange={(e) => handleChange('firstName', e.target.value)}
                                            maxLength='250'
                                            className="mobile-textarea"
                                            />
                                        </Form.Group>
                                    </Form>
                                </div>
                                <div className='cardInnerDivRight'>
                                    <h3>Questionnaire</h3>
                                <Form>
                                <Form.Group>
                                    <Form.Label>Do You have a 3d Printer?</Form.Label>
                                    <br/>
                                    <Form.Check
                                    inline
                                    label="Yes"
                                    type={'checkbox'}
                                    onChange={handleHasPrinter}
                                    checked={hasPrinter}
                                    />
                                    <Form.Check
                                    inline
                                    label="No"
                                    type={'checkbox'}
                                    onChange={handleHasPrinter}
                                    checked={!hasPrinter}
                                    />
                                    <br/>
                                    {hasPrinter && (
                                        <>
                                            <Form.Label>Sell Custom Prints?</Form.Label>
                                            <br/>
                                            <Form.Check
                                            inline
                                            label="Yes"
                                            type={'checkbox'}
                                            onChange={handleCustomPrints}
                                            checked={customPrints}
                                            />
                                            <Form.Check
                                            inline
                                            label="No"
                                            type={'checkbox'}
                                            onChange={handleCustomPrints}
                                            checked={!customPrints}
                                            />
                                            <br/>
                                            <Form.Label>What type of printers do you own?</Form.Label>
                                            <br/>
                                            <Form.Check
                                            inline
                                            label="SLA (Resin)"
                                            type={'checkbox'}
                                            onChange={handleResinChange}
                                            checked={slaPrinter >= 1}
                                            />
                                            <Form.Check
                                            inline
                                            label="FDM (Filament)"
                                            type={'checkbox'}
                                            onChange={handleFilamentChange}
                                            checked={fdmPrinter >= 1}
                                            />
                                            <br/>
                                        </>
                                    )}
                                    {/* these are used to calculate availability of jobs */}
                                    {resin && (
                                        <>
                                        <Form.Label>How Many SLA (Resin) Printers?</Form.Label>
                                        <select class="form-control" id="exampleFormControlSelect1" onChange={handleSettingAmountOfSla} value={slaPrinter}>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5+</option>
                                        </select>
                                        </>
                                    )}
                                    {filament && (
                                        <>
                                        <Form.Label>How Many FDM (Filament) Printers?</Form.Label>
                                        <select class="form-control" id="exampleFormControlSelect1" onChange={handleSettingAmountOfFdm} value={fdmPrinter}>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5+</option>
                                        </select>
                                        </>
                                    )}
                                </Form.Group>
                            </Form>
                                </div>
                            </div>
                            <br/>
                            <Button onClick={() => handleStoreOwnership()}>Submit</Button>
                        </div>
                    </Card.Body>
                </Card>
                {/* after submission create entity and redirect to mystore page */}
            </div>
        </div>
        </>
    )
}
