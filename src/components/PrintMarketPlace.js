// a user may create a contract which is available to be printed by anyone who has a business and a registered a printer
// these will appear in this table

// they will have the STL file, the fullfillment date, city/state shipping dest with shipping estimate, price, notes
// a shopowner may accept / decline these, 
// if declined they will no longer appear in his list.

// if accepted 
// - a todo tasklist will be created for the shop
// - a notification will be sent to the user who created the contract.
// - the confirmation on the todo tasklist will be marked through


import React, {useState} from 'react'
import Table from 'react-bootstrap/Table';
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
import { MdNotes, MdOutlineSpeakerNotes } from "react-icons/md";
import { Button, Card, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import '../views/main.css';
import { usePrints } from '../context/PrintsContext';

export default function PrintMarketPlace() {
    const [hiddenItem, setHiddenItem] = useState(false)
    const {
        myStore, setMyStore
    } = useStore()
    const {
        generateOrderNumber,
        prints, setPrints
    } = usePrints()
    const handleHiddenItem = () => {
        setHiddenItem(true)
    }
    function handleSetPrinterStatus(){
        generateOrderNumber();
        const newStore = { ...myStore }; // Create a copy of myStore
        // Check if the printer type matches and it's not already in use
        if (newStore.printer.slaPrinter > 0 && !newStore.printer.printerInUse) {
            newStore.printer.printerInUse = 'sla'; // Mark the SLA printer as in use
        } else if (newStore.printer.fdmPrinter > 0 && !newStore.printer.printerInUse) {
            newStore.printer.printerInUse = 'fdm'; // Mark the FDM printer as in use
        }
        setMyStore(newStore);
    }
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
                                <th>SLA (Resin) or FDM (Filament)</th>
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
                                    <div className='marketplaceIconsSpacingDiv'>
                                        <FaRegCircleCheck size={25} color={'#34b233'} className='marketplaceYesNoIcons' onClick={handleSetPrinterStatus}/> 
                                        {/* onClick Accepts */}
                                        <FaRegCircleXmark size={25} color={'#e50000'} className='marketplaceYesNoIcons' />
                                        {/* onClick Declines */}
                                    </div>
                                </td>
                                <td>File(s)</td>
                                {/* files will be in a swiper and can be viewed in detail */}
                                <td>setType</td>
                                <td>Date</td>
                                <td>$$$</td>
                                <td>{prints.address.city}, {prints.address.state}</td>
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
