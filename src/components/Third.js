import React, { useEffect } from 'react'
import Fourth from './Fourth'

const Third = (props) => {
  return (
    <div>
        <Fourth itemThi={props.itemSec} />
    </div>
  )
}

export default Third

useEffect(() => {
return function() {
  console.log("this");
}
},[]);