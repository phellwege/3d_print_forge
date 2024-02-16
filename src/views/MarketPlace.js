import React, {useState} from 'react'
import Header from '../components/Header';
import DropDown from '../components/DropDown';
import { Button, Card, Alert} from 'react-bootstrap';

// this is where the user can purchase STL files or get a print produces
export default function MarketPlace() {
  return (
    <>
    <Header />
    <div className='pageWrap'>
      <div className='searchBar'>
        <div id='searchFilter'>
          <Button>Search</Button>
          <DropDown /> 
        </div>
        <textarea
        rows={1}
        cols={80}
        placeholder='Search'
        ></textarea>
      </div>
      <div className='secondaryPageWrapper'>
        <p>returns top 50 results on each page</p>
        <p>keeps going</p>
        <p>and going</p>
      </div>
    </div>
    </>
  )
}
