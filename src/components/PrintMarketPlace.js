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
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
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
                    <Table striped bordered hover variant='dark' id='marketplaceTable'>
                        <thead>
                            <tr>
                                <th>Accept / Decline</th>
                                <th>STL File(s)</th>
                                <th>Date Ordered</th>
                                <th>Payment</th>
                                <th>City / State</th>
                                <th>Customer Notes</th>
                                <th>Contact Customer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <FaRegCircleCheck size={25} color={'#34b233'} /> 
                                    {/* onClick Accepts */}
                                    {' '}
                                    <FaRegCircleXmark size={25} color={'#e50000'} />
                                    {/* onClick Declines */}
                                </td>
                                <td>File(s)</td>
                                {/* files will be in a swiper and can be viewed in detail */}
                                <td>Date</td>
                                <td>$$$</td>
                                <td>Someplace, Somewhere</td>
                                <td>
                                    <MdNotes size={25} className='marketPlaceIcons' />
                                    {/* onclick opens a modal with notes */}
                                </td>
                                <td>
                                    <MdOutlineSpeakerNotes size={25} className='marketPlaceIcons' />
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
