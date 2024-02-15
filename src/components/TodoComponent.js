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
            <h3>Printing Order Status</h3>
            <div className='cardInnerDiv'>
              <h4>Order Number</h4>
              <ul>
                {/* once completed click checkbox and it will line through li item */}
                <li><MdDoneOutline size={20}/> Order Recieved - Date Ordered</li>
                {/* this is automatic */}
                <li><MdDoneOutline size={20} /> Order Confirmed - Confirmed? (must be confirmed within 2 bus days) Date</li>
                {/* this is manual or automatic depending on how the user checks the order, if it isn't checked within the time frame then the order is cancelled */}
                <li><MdDoneOutline size={20} /> Print Completed - must be printed within 5 bus days - Date</li>
                {/* this is manual */}
                <li><MdDoneOutline size={20} /> Print Shipped - must be shipped within 5 bus days - Date</li>
                {/* this is automatic once shipping information entered */}
                <li><MdDoneOutline size={20} /> Payment Completed - paid once shipping confirmed - Date</li> 
                {/* this is automatic */}
                <li><MdDoneOutline size={20} /> Print Reviewed - optional - Date</li>
                {/* this is automatic once review is left */}
              </ul>
            </div>
          </Card.Body>
        </Card>
    </>
  )
}
