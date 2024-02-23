import React, {useState} from 'react';
import { Button, Card, Alert, Table, OverlayTrigger, Tooltip} from 'react-bootstrap';

import { MdEventAvailable } from "react-icons/md";
import { CgUnavailable } from "react-icons/cg";

import '../views/main.css';

export default function PrinterStatus() {
  return (
    <>
        <Card id='printerStatusCard'>
            <Card.Body>
                <div className='cardInnerDiv'>
                    {/* for each printer */}
                    {/* SLA */}
                    <Table striped bordered hover variant='dark'>
                        <thead>
                            <tr>
                                <th>Icon</th>
                                <th>Printer Type</th>
                                <th>Availability</th>
                                <th>Working On</th>
                                <th>Calendar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><MdEventAvailable size={25}/></td>
                                <td>FDM || SLA</td>
                                <td>in use || Available</td>
                                <td>if in use order# with link to todo</td>
                                <td>
                                    Started Printing:
                                    <br/>
                                    Deadline:
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    {/* FDM */}
                </div>
            </Card.Body>
        </Card>
    </>
  )
}
