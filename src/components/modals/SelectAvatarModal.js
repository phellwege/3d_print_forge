import React, { useEffect, useState, useRef } from 'react';
import {Button, Card} from 'react-bootstrap';
// import {useAuth} from '../../context/authContext'
import { MdClose } from "react-icons/md";

import './modals.css';

export default function selectAvatar(props) {
  const openAvatarWindow = () => {
    const x = document.getElementsByClassName('openAvatarWindow')[0];
    if(x.style.display == 'block') {
        x.style.display = 'none';
    }
    else {
        x.style.display = 'block';
    }
}
    let avatarRef = useRef();
    useEffect(() => {
        let handler = (event) => {
            if(!avatarRef.current.contains(event.target)){
                if (document.getElementsByClassName('openAvatarWindow')[0].style.display == 'block') openAvatarWindow();
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler);
        }
    })
    // const {
    //     profilePic,
    //     setUserPic,
    //     profilePicBkgClr,
    //     avatarbkgClr,
    // } = useAuth();

  return (
    <div className="openAvatarWindow">
      <div 
      className="lightboxWrap" 
      ref={avatarRef}
      style={{backgroundColor: profilePicBkgClr}}
      loading='lazy'
      >
        <button 
        aria-label='change avatar window button'
        onClick={openAvatarWindow} 
        className='lightboxCloseButton'
        >
        <MdClose style={{ color: "#E4FDE1", width: "40px", height: "40px" }} />
        </button>
        {profilePic.key.map((pic, picIndex) => (
            <div key={picIndex} className='lightBoxAvatar'>
                <div  className='lightBoxAvatarImg'>
                    <img src={pic} alt='avatarPicture' loading='lazy'/>
                </div>
                    <Button 
                    aria-label='select avatar button'
                    onClick={(e) => {
                        setUserPic(picIndex);
                        openAvatarWindow();
                    }}>
                        Select
                    </Button>
            </div>
        ))}
      </div>
      <Card>
        <Card.Body>
          <div className='cardInnerDiv'>
            <h5>Select Background</h5>
            <div className='selectBkgClrButtons'>
              {profilePicBkg.key.map((color, bkgIndex) => (    
              <Button 
              aria-label='select Avatar'
              key={bkgIndex}
              style={{backgroundColor: color}} 
              className='selectBkgClrButton'
                  onClick={async (e) => {
                      await avatarbkgClr(bkgIndex)
                  }}
              >
                  Select
              </Button>
              ))}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
