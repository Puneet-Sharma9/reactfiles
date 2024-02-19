import React from 'react'
import Third from './Third'

const Fourth = (props) => {
  return (
    <div>
        <h1>Fourth page</h1>
        <h2>Id : {props.itemThi.pid}</h2>
        <h2>Name  : {props.itemThi.pname}</h2>
        <h2>Price : {props.itemThi.price}</h2>
        <h2>description : {props.itemThi.descripion}</h2>
    </div>
  )
}

export default Fourth