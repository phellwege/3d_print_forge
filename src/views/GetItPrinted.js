import React from 'react'
import { Card, Button, Form } from 'react-bootstrap';
import Header from '../components/Header';

export default function GetItPrinted() {
  return (
    <>
        <Header />
        <div className='pageWrap'>
            <h1>Create Work Order</h1>
            <div className='secondaryPageWrapper'>
                <Card>
                    <Card.Body>
                        <h3>Print</h3>
                        <div className='cardInnerDiv'>
                            <Form>
                                <Form.Label>SLA (Resin) or FDM (Filament)?</Form.Label>
                                    <Form.Check
                                        inline
                                        label="SLA"
                                        type={'checkbox'}
                                        // onChange={handleHasPrinter}
                                        // checked={hasPrinter}
                                    />
                                    <Form.Check
                                        inline
                                        label="Resin"
                                        type={'checkbox'}
                                        // onChange={handleHasPrinter}
                                        // checked={!hasPrinter}
                                    />
                                <Form.Label>Price</Form.Label>
                                <Form.Control />
                                <Form.Label>Shipping Address</Form.Label>
                                <Form.Control />
                                <Form.Label>Notes</Form.Label>
                                <Form.Control />
                            </Form>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </>
  )
}
