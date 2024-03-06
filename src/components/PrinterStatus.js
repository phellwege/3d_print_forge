import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Alert, Table, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { MdOutlinePauseCircleOutline, MdOutlinePlayCircle } from "react-icons/md";

import '../views/main.css';
import { useStore } from '../context/StoreContext';
import { usePrints } from '../context/PrintsContext';


export default function PrinterStatus() {

    const {
        myStore
    } = useStore();
    const {
        prints,
        orderNumber
    } = usePrints()
    const range = (count) => [...Array(count).keys()];
  return (
    <>
        <Card id='printerStatusCard'>
            <Card.Body>
                <h3>Printer Status</h3>
                <div className='cardInnerDiv'>
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
                        {range(myStore.printer.slaPrinter).map((printer, index) => (
                            <tr key={`slaPrinter-${index}`}>
                                <td>
                                {myStore.printer.slaPrinterInUseStatus[index] ? (
                                        <>
                                            In Use
                                            <br/>
                                            <MdOutlinePauseCircleOutline size={25} color='	#f0ad4e'/>
                                        </>
                                        
                                    ) : (
                                    <>
                                        Available
                                        <br/>
                                        <MdOutlinePlayCircle size={25} color='#22bb33'/>
                                    </>
                                    )}
                                </td>
                                <td>SLA</td>
                                <td>
                                    {myStore.printer.slaPrinterInUseStatus[index] ? (
                                        <>
                                            {orderNumber}
                                            <br/>
                                            <Link to='/Details'>Details</Link>
                                        </>
                                    ) : (
                                        <>
                                            Not In Use
                                        </>
                                    )}
                                </td>
                                <td>
                                    {myStore.printer.slaPrinterInUseStatus[index] ? (
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
                        ))}
                        {range(myStore.printer.fdmPrinter).map((printer, index) => (
                            <tr key={`fdmPrinter-${index}`}>
                                <td>
                                {myStore.printer.fdmPrinterInUseStatus[index] ? (
                                        <>
                                            In Use
                                            <br/>
                                            <MdOutlinePauseCircleOutline size={25} color='	#f0ad4e'/>
                                        </>
                                        
                                    ) : (
                                    <>
                                        Available
                                        <br/>
                                        <MdOutlinePlayCircle size={25} color='#22bb33'/>
                                    </>
                                    )}
                                </td>
                                <td>FDM</td>
                                <td>
                                    {myStore.printer.fdmPrinterInUseStatus[index] ? (
                                        <>
                                            {orderNumber}
                                            <br/>
                                            <Link to='/Details'>Details</Link>
                                        </>
                                    ) : (
                                        <>
                                            Not In Use
                                        </>
                                    )}
                                </td>
                                <td>
                                    {myStore.printer.fdmPrinterInUseStatus[index] ? (
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
                        ))}
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
        </>
  )
}
