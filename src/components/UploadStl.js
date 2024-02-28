import React, {useState, useRef} from 'react'
import { Button, Card, Alert, Form, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsPlusSquareDotted } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import CurrencyInput from 'react-currency-input-field';

import '../views/main.css'
import { useStore } from '../context/StoreContext';

export default function UploadStl() {

  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const fileNameTooltip = "Title of what you're uploading";
  const priceTooltip = "How much you're asking";
  const descriptionTooltip = 'Tell us about this STL or group of STLs';

  function CurrencyInputField() {
    const handlePriceChange = (value) => {
      setFormData(prevState => ({
        ...prevState,
        price: value
      }));
    };
    return (
      <CurrencyInput
        id="UploadSTLCurrencyInput"
        name="price"
        placeholder="$0.00"
        allowNegativeValue={false}
        decimalsLimit={2}
        decimalScale={2}
        disableAbbreviations={true}
        step={1}
        prefix="$"
        groupSeparator=","
        value={formData.price}
        onValueChange={(value, name, values) => handlePriceChange(value)}
      />
    );
  };

  const {
    upload, setUpload,
  } = useStore();

  const [formData, setFormData] = useState({
    fileName: '',
    price: '',
    description: ''
  });

  const handleFileChange = (event) => {
    const files = event.target.files;
    setUpload(prevUpload => ({
      ...prevUpload,
      files: [...prevUpload.files, ...Array.from(files)]
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpload(prevUpload => ({
      ...prevUpload,
      title: formData.fileName,
      price: formData.price,
      description: formData.description
    }));

    setFormData({
      fileName: '',
      price: '',
      description: ''
    });
  };
    
  return (
    <>
        <Card>
            <Card.Body>
                <h3>Upload STL(s)</h3>
                <div className='cardInnerDiv'>
                  <Form>
                      <Form.Group controlId="formFileMultiple" className="mb-3">
                        <div className="image-container" onClick={handleImageClick}>
                          <BsPlusSquareDotted size={200} color={'#E0AC9D'} className='uploadPlusSign' />
                        </div>
                        <Form.Label>Multiple STL files</Form.Label>
                        <Form.Control 
                        ref={fileInputRef} 
                        type="file" 
                        multiple
                        accept='.stl'
                        name="fileName" 
                        onChange={handleFileChange}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="d-flex justify-content-between align-items-center" >
                        <div className="text-center">
                          <div>
                            File Name
                            <span className="required-indicator">{" "}*</span>
                          </div>
                          <OverlayTrigger
                          overlay={<Tooltip id="tooltip">{fileNameTooltip}</Tooltip>}
                          >
                            <span className="question-icon">
                              <BsQuestionCircle />
                            </span>
                          </OverlayTrigger>
                        </div>
                        </Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Name'
                        maxLength='50'
                        className="mobile-textarea"
                        name = 'fileName'
                        value={formData.fileName}
                        onChange={handleChange}
                        />
                        <br/>
                        <Form.Label className="d-flex justify-content-between align-items-center" >
                        <div className="text-center">
                          <div>
                            Price
                            <span className="required-indicator">{" "}*</span>
                          </div>
                            <OverlayTrigger
                            overlay={<Tooltip id="tooltip">{priceTooltip}</Tooltip>}
                            >
                              <span className="question-icon">
                                <BsQuestionCircle />
                              </span>
                            </OverlayTrigger>
                        </div>
                        </Form.Label>
                        {CurrencyInputField()}
                        <br/>
                        <Form.Label className="d-flex justify-content-between align-items-center" >
                        <div className="text-center">
                                <div>
                                Description
                                <span className="required-indicator">{" "}*</span>
                                </div>
                                <OverlayTrigger
                                overlay={<Tooltip id="tooltip">{descriptionTooltip}</Tooltip>}
                                >
                                    <span className="question-icon">
                                        <BsQuestionCircle />
                                    </span>
                                </OverlayTrigger>
                        </div>
                        </Form.Label>
                        <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder='Description'
                        maxLength='300'
                        className="mobile-textarea"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        />
                      </Form.Group>
                      
                    </Form>
                </div>
                <br/>
                <Button onClick={handleSubmit}>Save</Button>
            </Card.Body>
        </Card>
        
    </>
  )
}
