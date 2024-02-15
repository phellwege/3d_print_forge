// a user may create a contract which is available to be printed by anyone who has a business and a registered a printer
// these will appear in this table

// they will have the STL file, the fullfillment date, city/state shipping dest with shipping estimate, price, notes
// a shopowner may accept / decline these, 
// if declined they will no longer appear in his list.

// if accepted 
// - a todo tasklist will be created for the shop
// - a notification will be sent to the user who created the contract.
// - the confirmation on the todo tasklist will be marked through


import React from 'react'
import Table from 'react-bootstrap/Table';
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { MdNotes, MdOutlineSpeakerNotes } from "react-icons/md";
import { Button, Card, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../views/main.css'
export default function PrintMarketPlace() {
  return (
    <>
        <Card className='marketPlaceCard'>
            <Card.Body>
                <h3>Printing marketplace</h3>
                <div className='cardInnerDiv'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Accept / Decline</th>
                                <th>STL File(s)</th>
                                <th>Date Ordered</th>
                                <th>Price</th>
                                <th>City / State</th>
                                <th>Customer Notes</th>
                                <th>Contact Customer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <AiOutlineCheck /> 
                                    {/* onClick Accepts */}
                                    |
                                    <AiOutlineClose />
                                    {/* onClick Declines */}
                                </td>
                                <td>File(s)</td>
                                <td>Date</td>
                                <td>$$$</td>
                                <td>Someplace, Somewhere</td>
                                <td>
                                    <MdNotes />
                                    {/* onclick opens a modal with notes */}
                                </td>
                                <td>
                                    <MdOutlineSpeakerNotes />
                                    {/* onclick opens chat */}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
        
    </>
  )
}
