import React, { useState, useEffect, useRef } from "react";
import {StlViewer} from "react-stl-viewer";
import {Button} from 'react-bootstrap';
import { MdClose } from "react-icons/md";
import './modals.css';

export default function DetailModal(props) {

  let detailsRef = useRef();
  const showDetailModal = () => {
    const x = document.getElementsByClassName('showDetailModal')[0];
    if(x.style.display == 'block') {
        x.style.display = 'none';
    }
    else {
        x.style.display = 'block';
    }
  }
  useEffect(() => {
    let handler = (event) => {
        if(!detailsRef.current.contains(event.target)){
            if (document.getElementsByClassName('showDetailModal')[0].style.display == 'block') showDetailModal();
        }
    }
    document.addEventListener('mousedown', handler)
    return () => {
        document.removeEventListener('mousedown', handler);
    }
  })

  const styling = {
    width: '100%',
    height: '100%',
  }
  // this will be dynamically set via state
  const url = "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl"

  return (
    <>
      {/* Item details, STL Viewer allows for 3d rendering */}
      <div className="showDetailModal">
        <div 
        className="modalWrap"
        ref={detailsRef}
        loading='lazy'
        >
          <button 
            aria-label='close details button'
            onClick={showDetailModal} 
            className='modalCloseButton'
            >
            <MdClose style={{ color: "#E4FDE1", width: "40px", height: "40px" }} />
          </button>
        <StlViewer
            style={styling}
            orbitControls
            shadows
            url={url}
        />
        </div>
      </div>
      
    </>
  )
}