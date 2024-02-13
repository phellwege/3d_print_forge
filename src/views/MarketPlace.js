import React from 'react'
import Header from '../components/Header';
// this is where the user can purchase STL files or get a print produces
export default function MarketPlace() {
  return (
    <>
    <Header />
    <div className='pageWrap'>
      <p>searchbar | category selection filter</p>
      <div className='secondaryPageWrapper'>
        <p>returns top 50 results on each page</p>
        <p>keeps going</p>
        <p>and going</p>
      </div>
    </div>
    </>
  )
}
