import React, {useRef} from 'react'
import { Button, Card, Alert, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsPlusSquareDotted } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import CurrencyInput from 'react-currency-input-field';

import '../views/main.css'

export default function UploadStl() {

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  function CurrencyInputField() {
    return(
      <>
        <CurrencyInput
          id="currencyInput"
          name="UploadSTLCurrencyInput"
          placeholder="$0.00"
          allowNegativeValue={false}
          decimalsLimit={2}
          decimalScale={2}
          disableAbbreviations={true}
          step={1}
          prefix='$'
          groupSeparator=','
          onValueChange={(value, name, values) => console.log(value, name, values)}
        />
      </>
    )
  }

    
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
                        />
                      </Form.Group>
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
                        as={CurrencyInputField}
                        placeholder='Price'
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
                        as="textarea"
                        rows={3}
                        placeholder='Description'
                        maxLength='300'
                        className="mobile-textarea"
                        />
                      </Form.Group>
                    </Form>
                </div>
                <br/>
                <Button>Save</Button>
                <br/>
            </Card.Body>
        </Card>
        
    </>
  )
}
