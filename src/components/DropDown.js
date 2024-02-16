import React, {useState} from 'react'
import { Button, Card, Alert} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';


export default function DropDown() {

  return (
    <>
        <Dropdown>
            <Dropdown.Toggle 
            variant='success'
            id='dropdown-basic-button'
            >
                Category Selection
            </Dropdown.Toggle>
        </Dropdown>
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
      </>
  )
}
