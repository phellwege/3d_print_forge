import React, {useState} from 'react';
import { Button, Card, Alert, Table, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { MdOutlinePauseCircleOutline, MdOutlinePlayCircle } from "react-icons/md";

import '../views/main.css';
import { useStore } from '../context/StoreContext';

export default function PrinterStatus() {

    const {
        printerInUse
    } = useStore();

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
                                <th>Availability</th>
                                <th>Printer Type</th>
                                <th>Working On</th>
                                <th>Calendar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                {printerInUse ? (
                                        <>
                                            In Use
                                            <MdOutlinePauseCircleOutline size={25} />
                                        </>
                                        
                                    ) : (
                                    <>
                                        Available
                                        <br/>
                                        <MdOutlinePlayCircle size={25} />
                                    </>
                                    )}
                                </td>
                                <td>FDM || SLA</td>
                                <td>
                                    {printerInUse ? (
                                        <>
                                            Order #
                                        </>
                                    ) : (
                                        <>
                                            Not In Use
                                        </>
                                    )}
                                </td>
                                <td>
                                    {printerInUse ? (
                                        <>
                                            Started Printing:
                                            <br/>
                                            Deadline:
                                        </>
                                    ) : (
                                        <>
                                            Not In Use
                                        </>
                                    )}
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
