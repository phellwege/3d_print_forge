import React, {useState} from 'react'
import { MdOutlineExpandCircleDown, MdExpandLess } from "react-icons/md";
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";

import { BsQuestionCircle } from "react-icons/bs";
import { Button, Card, Alert, Table, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useStore } from '../context/StoreContext';

import '../views/main.css'

export default function TodoComponent() {
  const OrderRecievedTooltip = "Checked automatically when an order is received";
  const ConfirmedTooltip = "must be confirmed within 2 business days, this is considered a formal commitment";
  const PrintedTooltip = "must be printed within 5 business days";
  const ShippedTooltip = "must be shipped within 5 business days";
  const PaidTooltip = "payment is processed once shipping confirmed";
  const ReviewedTooltip = "Once an item has been reviewed this will be automatically crossed off. The status will also be marked as completed";

  const [expanded, setExpanded] = useState(false);
  const {
    orderChecked, setOrderChecked,
    confirmChecked, setConfirmChecked,
    printedChecked, setPrintedChecked,
    shippedChecked, setShippedChecked,
    paidChecked, setPaidChecked,
    reviewedChecked, setReviewedChecked,

    orderDate, setOrderDate,
    confirmDate, setConfirmDate,
    printedDate, setPrintedDate,
    shippedDate, setShippedDate,
    paidDate, setPaidDate,
    reviewedDate, setReviewedDate,

    handleOrderChecked,
    handleConfirmChecked,
    handlePrintedChecked,
    handleShippedChecked,
    handlePaidChecked,
    handleReviewedChecked,
  } = useStore();
  function handleExpansion(){
    setExpanded(!expanded)
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
                    <td style={{ textDecoration: orderChecked ? 'line-through' : 'none' }}>Order Recieved</td>
                    <td>
                      {orderDate ? orderDate : "Date"}
                    </td>
                    <td>
                      <OverlayTrigger
                        overlay={
                        <Tooltip id='tooltip'>
                          {OrderRecievedTooltip}
                        </Tooltip>
                        }>
                        <span className='todoQuestionMark'>
                          <BsQuestionCircle size={20}/>
                        </span>
                      </OverlayTrigger>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {confirmChecked ? (
                        <FaRegCheckSquare className='checkedBox'/>
                        ) : (
                        <FaRegSquare className='checkBox' onClick={() => handleConfirmChecked()}/>
                      )}
                    </td>
                    <td style={{ textDecoration: confirmChecked ? 'line-through' : 'none' }}>Order Confirmed</td>
                    <td>{confirmDate ? confirmDate : "Date"}</td>
                    <td>
                    <OverlayTrigger
                        overlay={
                        <Tooltip id='tooltip'>
                          {ConfirmedTooltip}
                        </Tooltip>
                        }>
                        <span className='todoQuestionMark'>
                          <BsQuestionCircle size={20}/>
                        </span>
                      </OverlayTrigger>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {printedChecked ? (
                        <FaRegCheckSquare className='checkedBox'/>
                        ) : (
                        <FaRegSquare className='checkBox' onClick={() => handlePrintedChecked()}/>
                      )}
                    </td>
                    <td style={{ textDecoration: printedChecked ? 'line-through' : 'none' }}>Print Completed</td>
                    <td>
                      {printedDate ? printedDate : "Date"}
                    </td>
                    <td>
                    <OverlayTrigger
                        overlay={
                        <Tooltip id='tooltip'>
                          {PrintedTooltip}
                        </Tooltip>
                        }>
                        <span className='todoQuestionMark'>
                          <BsQuestionCircle size={20}/>
                        </span>
                      </OverlayTrigger>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {shippedChecked ? (
                        <FaRegCheckSquare className='checkedBox'/>
                        ) : (
                        <FaRegSquare className='checkBox' onClick={() => handleShippedChecked()}/>
                      )}
                    </td>
                    <td style={{ textDecoration: shippedChecked ? 'line-through' : 'none' }}>Order Shipped</td>
                    <td>{shippedDate ? shippedDate : "Date"}</td>
                    <td>
                    <OverlayTrigger
                        overlay={
                        <Tooltip id='tooltip'>
                          {ShippedTooltip}
                        </Tooltip>
                        }>
                        <span className='todoQuestionMark'>
                          <BsQuestionCircle size={20}/>
                        </span>
                      </OverlayTrigger>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {paidChecked ? (
                        <FaRegCheckSquare className='checkedBox'/>
                        ) : (
                        <FaRegSquare className='checkBox' onClick={() => handlePaidChecked()}/>
                      )}
                    </td>
                    <td style={{ textDecoration: paidChecked ? 'line-through' : 'none' }}>Payment Completed</td>
                    <td>
                      {paidDate ? paidDate : "Date"}
                    </td>
                    <td>
                    <OverlayTrigger
                        overlay={
                        <Tooltip id='tooltip'>
                          {PaidTooltip}
                        </Tooltip>
                        }>
                        <span className='todoQuestionMark'>
                          <BsQuestionCircle size={20}/>
                        </span>
                      </OverlayTrigger>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {reviewedChecked ? (
                        <FaRegCheckSquare className='checkedBox'/>
                        ) : (
                        <FaRegSquare className='checkBox' onClick={() => handleReviewedChecked()}/>
                      )}
                    </td>
                    <td style={{ textDecoration: reviewedChecked ? 'line-through' : 'none' }}>Print Reviewed - optional</td>
                    <td>
                      {reviewedDate ? reviewedDate : "Date"}
                    </td>
                    <td>
                    <OverlayTrigger
                        overlay={
                        <Tooltip id='tooltip'>
                          {ReviewedTooltip}
                        </Tooltip>
                        }>
                        <span className='todoQuestionMark'>
                          <BsQuestionCircle size={20}/>
                        </span>
                      </OverlayTrigger>
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
