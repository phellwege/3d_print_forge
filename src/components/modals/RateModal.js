import React, { useEffect, useState, useRef } from 'react';
import {Button, Card, Form} from 'react-bootstrap';
import { MdClose } from "react-icons/md";

import { useUser } from '../../context/UserContext';
import StarRatingComponent from '../StarRatingComponent';

import './modals.css';


export default function RateModal(props) {


    let rateRef = useRef();

    const openRateWindow = () => {
        const x = document.getElementsByClassName('openRateWindow')[0];
        if(x.style.display == 'block') {
            x.style.display = 'none';
        }
        else {
            x.style.display = 'block';
        }
    }

    useEffect(() => {
        let handler = (event) => {
            if(!rateRef.current.contains(event.target)){
                if (document.getElementsByClassName('openRateWindow')[0].style.display == 'block') openRateWindow();
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler);
        }
    }, [])

    return (
        <div className="openRateWindow">
            <div 
            className="modalWrap" 
            ref={rateRef}
            loading='lazy'
            id='rateModalWrap'
            >
                <button 
                aria-label='change rate window button'
                onClick={openRateWindow} 
                className='modalCloseButton'
                >
                <MdClose style={{ color: "#E4FDE1", width: "40px", height: "40px" }} />
                </button>
                <div className='ratingModalInnerDiv'>
                    <h1>Leave A Review</h1>
                    <StarRatingComponent />
                    <br/>
                    <Form>
                        <Form.Group>
                            <Form.Label>
                            <div>
                                <h5>Reason For This Rating<span className="required-indicator">{" "}*</span></h5>
                                
                                </div>
                            </Form.Label>
                            <Form.Control 
                            as="textarea" 
                            rows={5} 
                            placeholder='Tell us More'
                            maxLength='300'
                            className="mobile-textarea"
                            />
                        </Form.Group>
                    </Form>
                    <br/>
                    <Button onClick={()=> openRateWindow()}>Submit</Button>
                </div>
                
            </div>
        </div>
    )
}
