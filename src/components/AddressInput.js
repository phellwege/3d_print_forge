import React from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import usStates from 'states-us';
import '../views/main.css';

export default function AddressInput({onChange}) {
    return (
        <div className='addressForm'>
            <Form.Group as={Row} controlId="addressStreet">
            <Form.Label column sm="2">Street:</Form.Label>
            <Col sm="15">
                <Form.Control 
                type="text" 
                placeholder="Street Address" 
                onChange={e => onChange({ street: e.target.value })} 
                maxLength='50'
                />
            </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="addressCity">
            <Form.Label column sm="2">City</Form.Label>
            <Col sm="7">
                <Form.Control 
                type="text" 
                placeholder="City" 
                onChange={e => onChange({ city: e.target.value })} 
                maxLength='50'
                />
            </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="addressState">
            <Form.Label column sm="2">State</Form.Label>
                <Col sm="5">
                <Form.Control as="select" onChange={e => onChange({ state: e.target.value })}>
                    {usStates.map(state => (
                        <option key={state.name} value={state.abbr}>{state.name}</option>
                    ))}
                </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="addressZip">
            <Form.Label column sm="2">ZIP Code</Form.Label>
            <Col sm="5">
                <Form.Control 
                type="text" 
                placeholder="ZIP" 
                onChange={e => onChange({ zip: e.target.value })} 
                maxLength='50'
                />
            </Col>
            </Form.Group>
        </div>
        );
    };
