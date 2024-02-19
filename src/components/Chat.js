import React from 'react'

export default function Chat() {
    function OpenChatComponent() {

    }
  return (
    <>
        <div onClick={OpenChatComponent}>
            Chat
            {/* check to make sure it isn't malicious with dompurify */}
        </div>
    </>
  )
}