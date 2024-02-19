import React from 'react'
import { useState } from 'react'

const HideShow = () => {

    const [name,showName] = useState();

    const show = () => {
        showName("Show hide this");
    }

    const hide = () => {
        showName();
    }
  return (
    <div>
        
        <p>{name}</p>
        <button onClick={show}>Show</button>
        <button onClick={hide}>Hide</button>
        
    </div>
  )
}

export default HideShow
