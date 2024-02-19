import React, {useState} from 'react'
import { MdOutlineExpandCircleDown, MdExpandLess } from "react-icons/md";
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";

import { BsQuestionCircle } from "react-icons/bs";
import { Button, Card, Alert, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../views/main.css'
export default function TodoComponent() {
  const [expanded, setExpanded] = useState(false);

  // state management for check boxes so they can be individually checked 
  // TODO move to context file
  const [orderChecked, setOrderChecked] = useState(false);
  const [confirmChecked, setConfirmChecked] = useState(false);
  const [printedChecked, setPrintedChecked] = useState(false);
  const [shippedChecked, setShippedChecked] = useState(false);
  const [paidChecked, setPaidChecked] = useState(false);
  const [reviewedChecked, setReviewedChecked] = useState(false);
  
  function handleExpansion(){
    setExpanded(!expanded)
  }

  function handleOrderChecked() {
    setOrderChecked(!orderChecked)
  }
  function handleConfirmChecked() {
    setConfirmChecked(!confirmChecked)
  }
  function handlePrintedChecked() {
    setPrintedChecked(!printedChecked)
  }
  function handleShippedChecked() {
    setShippedChecked(!shippedChecked)
  }
  function handlePaidChecked() {
    setPaidChecked(!paidChecked)
  }
  function handleReviewedChecked() {
    setReviewedChecked(!reviewedChecked)
  }

  return (
    <>
        <Card className='todoCard'>
          <Card.Body>
            <h3>Current Print(s) Status</h3>
            <div className='cardInnerDiv'>
              <Table striped bordered hover variant='dark'>
                <thead>
                  <tr>
                    <th>Expand</th>
                    <th>Order Number</th>
                  </tr>
                </thead>
                <tbody>
                  {/* for each order */}
                  <tr>
                    <td>
                    {expanded ? (
                      <MdExpandLess
                        size={25}
                        color={'#E0AC9D'}
                        className="expandButton"
                        onClick={handleExpansion}
                      />
                    ) : (
                      <MdOutlineExpandCircleDown
                        size={25}
                        color={'#E0AC9D'}
                        className="expandButton"
                        onClick={handleExpansion}
                      />
                    )}
                    </td>
                    <td>#</td>
                  </tr>
                </tbody>
              </Table>
              <Table striped bordered hover variant='dark'  style={{ display: expanded ? '' : 'none' }} className='todoExpandedTable'>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Action</th>
                    <th>Date</th>
                    <th>Info</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {orderChecked ? (
                        <FaRegCheckSquare className='checkedBox'/>
                        ) : (
                        <FaRegSquare className='checkBox' onClick={() => handleOrderChecked()}/>
                      )}
                    </td>
                    <td>Order Recieved</td>
                    <td>Date</td>
                    <td><BsQuestionCircle size={20} className='todoQuestionMark'/></td>
                  </tr>
                  <tr>
                    <td>
                      {confirmChecked ? (
                        <FaRegCheckSquare className='checkedBox'/>
                        ) : (
                        <FaRegSquare className='checkBox' onClick={() => handleConfirmChecked()}/>
                      )}
                    </td>
                    <td>Order Confirmed</td>
                    <td>Date</td>
                    <td><BsQuestionCircle size={20} className='todoQuestionMark'/></td>
                  </tr>
                  <tr>
                    <td>
                      {printedChecked ? (
                        <FaRegCheckSquare className='checkedBox'/>
                        ) : (
                        <FaRegSquare className='checkBox' onClick={() => handlePrintedChecked()}/>
                      )}
                    </td>
                    <td>Print Completed</td>
                    <td>Date</td>
                    <td><BsQuestionCircle size={20} className='todoQuestionMark'/></td>
                  </tr>
                  <tr>
                    <td>
                      {shippedChecked ? (
                        <FaRegCheckSquare className='checkedBox'/>
                        ) : (
                        <FaRegSquare className='checkBox' onClick={() => handleShippedChecked()}/>
                      )}
                    </td>
                    <td>Order Shipped</td>
                    <td>Date</td>
                    <td><BsQuestionCircle size={20} className='todoQuestionMark'/></td>
                  </tr>
                  <tr>
                    <td>
                      {paidChecked ? (
                        <FaRegCheckSquare className='checkedBox'/>
                        ) : (
                        <FaRegSquare className='checkBox' onClick={() => handlePaidChecked()}/>
                      )}
                    </td>
                    <td>Payment Completed</td>
                    <td>Date</td>
                    <td><BsQuestionCircle size={20} className='todoQuestionMark'/></td>
                  </tr>
                  <tr>
                    <td>
                      {reviewedChecked ? (
                        <FaRegCheckSquare className='checkedBox'/>
                        ) : (
                        <FaRegSquare className='checkBox' onClick={() => handleReviewedChecked()}/>
                      )}
                    </td>
                    <td>Print Reviewed - optional</td>
                    <td>Date</td>
                    <td><BsQuestionCircle size={20} className='todoQuestionMark'/></td>
                  </tr>
                </tbody>
              </Table>
              {/* <ul style={{ display: expanded ? 'block' : 'none' }}>
                once completed click checkbox and it will line through li item 
                <li><MdDoneOutline size={20}/> Order Recieved - Date Ordered</li>
                this is automatic 
                <li><MdDoneOutline size={20} /> Order Confirmed - Confirmed? (must be confirmed within 2 bus days) Date</li>
                this is manual or automatic depending on how the user checks the order, if it isn't checked within the time frame then the order is cancelled 
                <li><MdDoneOutline size={20} /> Print Completed - must be printed within 5 bus days - Date</li>
                 this is manual 
                <li><MdDoneOutline size={20} /> Print Shipped - must be shipped within 5 bus days - Date</li>
                 this is automatic once shipping information entered 
                <li><MdDoneOutline size={20} /> Payment Completed - paid once shipping confirmed - Date</li> 
                 this is automatic 
                <li><MdDoneOutline size={20} /> Print Reviewed - optional - Date</li>
  this is automatic once review is left 
              </ul> */}
            </div>
          </Card.Body>
        </Card>
    </>
  )
}
