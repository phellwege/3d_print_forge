import React, {useState} from 'react'
import { MdOutlineExpandCircleDown, MdExpandLess } from "react-icons/md";
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsQuestionCircle } from "react-icons/bs";
import { Button, Card, Alert, Table, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { useStore } from '../context/StoreContext';
import { usePrints } from '../context/PrintsContext';
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
    todo,
    handleCheckboxChange
  } = useStore();

  const {
    prints,
    orderNumber
  } = usePrints();
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
                    <td>{orderNumber}</td>
                  </tr>
                </tbody>
              </Table>
              <Table 
                striped 
                bordered 
                hover 
                variant='dark'  
                style={{ display: expanded ? '' : 'none' }} 
                className='todoExpandedTable'
              >
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
                      {todo.checkBoxes.orderChecked ? (
                        <FaRegCheckSquare 
                          className='checkedBox'
                        />
                        ) : (
                        <FaRegSquare 
                          className='checkBox' 
                          onClick={() => handleCheckboxChange('orderChecked')}
                        />
                      )}
                    </td>
                    <td style={{ textDecoration: todo.checkBoxes.orderChecked ? 'line-through' : 'none' }}>Order Recieved</td>
                    <td>
                      {todo.dates.orderDate ? todo.dates.orderDate : 'Date'}
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
                      {todo.checkBoxes.confirmChecked ? (
                        <FaRegCheckSquare className='checkedBox'/>
                        ) : (
                        <FaRegSquare className='checkBox' onClick={() => handleCheckboxChange('confirmChecked')}/>
                      )}
                    </td>
                    <td style={{ textDecoration: todo.checkBoxes.confirmChecked ? 'line-through' : 'none' }}>Order Confirmed</td>
                    <td>{todo.dates.confirmDate ? todo.dates.confirmDate : "Date"}</td>
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
                      {todo.checkBoxes.printedChecked ? (
                        <FaRegCheckSquare className='checkedBox'/>
                        ) : (
                        <FaRegSquare className='checkBox' onClick={() => handleCheckboxChange('printedChecked')}/>
                      )}
                    </td>
                    <td style={{ textDecoration: todo.checkBoxes.printedChecked ? 'line-through' : 'none' }}>Print Completed</td>
                    <td>
                      {todo.dates.printedDate ? todo.dates.printedDate : "Date"}
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
                      {todo.checkBoxes.shippedChecked ? (
                        <FaRegCheckSquare className='checkedBox'/>
                        ) : (
                        <FaRegSquare className='checkBox' onClick={() => handleCheckboxChange('shippedChecked')}/>
                      )}
                    </td>
                    <td style={{ textDecoration: todo.checkBoxes.shippedChecked ? 'line-through' : 'none' }}>Order Shipped</td>
                    <td>{todo.dates.shippedDate ? todo.dates.shippedDate : "Date"}</td>
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
                      {todo.checkBoxes.paidChecked ? (
                        <FaRegCheckSquare className='checkedBox'/>
                        ) : (
                        <FaRegSquare className='checkBox' onClick={() => handleCheckboxChange('paidChecked')}/>
                      )}
                    </td>
                    <td style={{ textDecoration: todo.checkBoxes.paidChecked ? 'line-through' : 'none' }}>Payment Completed</td>
                    <td>
                      {todo.dates.paidDate ? todo.dates.paidDate : "Date"}
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
                      {todo.checkBoxes.reviewedChecked ? (
                        <FaRegCheckSquare className='checkedBox'/>
                        ) : (
                        <FaRegSquare className='checkBox' onClick={() => handleCheckboxChange('reviewedChecked')}/>
                      )}
                    </td>
                    <td style={{ textDecoration: todo.checkBoxes.reviewedChecked ? 'line-through' : 'none' }}>Print Reviewed - optional</td>
                    <td>
                      {todo.dates.reviewedDate ? todo.dates.reviewedDate : "Date"}
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