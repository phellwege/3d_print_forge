import React from 'react'
import Header from '../components/Header';
import { Card, Button, Table } from 'react-bootstrap';
import { FaCartShopping } from "react-icons/fa6";
import { CiSquareRemove } from "react-icons/ci";
import { Link } from 'react-router-dom';
import './main.css';

import { useUser } from '../context/UserContext';

export default function Cart() {
const {UserSwiper} = useUser();
  return (
    <>
    <Header />
        <div className='pageWrap'>
            <h1>My Cart <FaCartShopping /></h1>
            <div className='secondaryPageWrapper'>
                <Card id='cartCard'>
                    <Card.Body>
                        <div className='cardInnerDiv'>
                            <Table striped bordered hover variant='dark' id='purchaseHistoryTable'>
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Item Description</th>
                                        <th>Price</th>
                                        <th>Remove Item</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className='userSwiperWrap'>
                                            {UserSwiper()}
                                            <Link to='/Details'>Details</Link>
                                            </div>
                                        </td>
                                        <td>Item Description</td>
                                        <td>$$$</td>
                                        <td>
                                            <div className='cartRemoveItemIcon'>
                                                <CiSquareRemove size={40}/>
                                                <br/>
                                                Remove
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <br/>
                        <h6>Total: </h6>
                        <Button>Checkout</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </>
  )
}
