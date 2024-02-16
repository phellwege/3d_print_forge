import React, {useState} from 'react'
import { Button, Card, Alert} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function DropDown() {

  return (
    <>
        {/* <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                Category Selection
            </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item>SciFi</Dropdown.Item>
            <Dropdown.Item>Fantasy</Dropdown.Item>
            <Dropdown.Item>Space</Dropdown.Item>
            <Dropdown.Item>Characters</Dropdown.Item>
            <Dropdown.Item>Machines</Dropdown.Item>
            <Dropdown.Item>TableTop</Dropdown.Item>
            <Dropdown.Item>Creatures</Dropdown.Item>
            <Dropdown.Item>Vehicles</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown> */}
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </>
  )
}
