import React from 'react'
import { MdDoneOutline } from "react-icons/md";
import { Button, Card, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function TodoComponent() {
  return (
    <>
        {/* for each order */}
        <Card>
          <Card.Body>
            <h4>Item Ordered</h4>
            <div className='cardInnerDiv'>
              <ul>
                {/* once completed click checkbox and it will line through li item */}
                <li><MdDoneOutline /> Order Recieved - Date Ordered</li>
                <li><MdDoneOutline /> Order Confirmed - Confirmed? (must be confirmed within 2 bus days) Date</li>
                <li><MdDoneOutline /> Print Completed - must be printed within 5 bus days - Date</li>
                <li><MdDoneOutline /> Print Shipped - must be shipped within 5 bus days - Date</li>
                <li><MdDoneOutline /> Payment Completed - paid once shipping confirmed - Date</li>
                <li><MdDoneOutline /> Print Reviewed - optional - Date</li>
              </ul>
            </div>
          </Card.Body>
        </Card>
    </>
  )
}
