import React, { useEffect } from 'react'

const Useeffect = () => {

    useEffect(() => {
        console.log('hello use effect');
    });
    console.log('first priority is this log load earlier');
  return (
    <div>
        <h3>hellow use effect </h3>
    </div>
  )
}

export default Useeffect