import React from 'react'
import { Button, Card, Alert, Table} from 'react-bootstrap';
import { useUser } from '../context/UserContext';
import { Link } from 'react-router-dom';

import '../views/main.css';

export default function CurrentItemsForSale() {

    const {
        UserSwiper
    } = useUser();

  return (
    <>
    <Card className='itemsListedCard'>
        <Card.Body>
            <h3>Current Items Listed</h3>
            <div className='cardInnerDiv'>
                <Table striped bordered hover variant='dark' id='itemsForSaleTable'>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Description</th>
                            <th>Current Sale Price</th>
                            <th>Number Sold</th>
                            <th>Make Changes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className='userSwiperWrap'>
                                {UserSwiper()}
                                </div>
                                <Link to='/Details'>Details</Link>
                            </td>
                            <td>Bob Lob Law</td>
                            <td>$$$</td>
                            <td>#</td>
                            <td>
                                <Button className='itemsForSaleButtons'>Edit</Button>
                                <br/>
                                <Button className='itemsForSaleButtons' variant='danger'>Delete</Button>
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
