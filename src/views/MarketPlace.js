import React, {useState} from 'react'
import Header from '../components/Header';
import DropDown from '../components/DropDown';
import { Button, Card, Alert} from 'react-bootstrap';
import { IoStorefrontOutline } from "react-icons/io5";

import SearchBar from '../components/SearchBar';
// this is where the user can purchase STL files or get a print produces
export default function MarketPlace() {
  return (
    <>
    <Header />
    <div className='pageWrap'>
      <h1>Marketplace <IoStorefrontOutline/> </h1>
      <div className='homeSearchWrap'>
        <SearchBar />
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
