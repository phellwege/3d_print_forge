import React, { useEffect, useState, useRef } from "react";
import { Button, Card } from "react-bootstrap";
import { MdClose } from "react-icons/md";

import { useUser } from "../../context/UserContext";

import "./modals.css";

export default function SelectAvatar(props) {
  const avatarRef = useRef();
  const { 
    user, 
    setUser,
    userAvatars
  } = useUser();
  

  const openAvatarWindow = () => {
    const x = document.getElementsByClassName("openAvatarWindow")[0];
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };

  useEffect(() => {
    let handler = (event) => {
      if (!avatarRef.current.contains(event.target)) {
        if (
          document.getElementsByClassName("openAvatarWindow")[0].style
            .display == "block"
        )
          openAvatarWindow();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleSelectAvatar = (picIndex) => {
    setUser({ ...user, defaultUserAvatar: userAvatars[picIndex] });
    openAvatarWindow();
  };

  return (
    <div className="openAvatarWindow">
      <div 
        ref={avatarRef} 
        className="modalWrap" 
        loading="lazy"
      >
        
        <button
          aria-label="change avatar window button"
          onClick={openAvatarWindow}
          className="modalCloseButton"
        >
          <MdClose
            style={{ color: "#E4FDE1", width: "40px", height: "40px" }}
          />
        </button>
        {userAvatars.map((pic, picIndex) => (
          <div key={picIndex} className="modalAvatar">
            <div className="modalAvatarImg">
              <img src={pic} alt="avatarPicture" loading="lazy" />
            </div>
            <Button
              aria-label="select avatar button"
              onClick={() => {
                handleSelectAvatar(picIndex);
              }}
            >
              Select
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
