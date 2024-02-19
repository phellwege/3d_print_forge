import React from 'react'

export default function Chat() {
    function OpenChatComponent() {

    }
  return (
    <>
        <div onClick={OpenChatComponent}>
            Chat
            {/* user to shop - this will show up on all pages except on your store */}
            {/* if you're a shop owner then your shops chat will appear on your shops page and a notification will be displayed in the header */}
            {/* check to make sure it isn't malicious with dompurify */}
        </div>
    </>
  )
}