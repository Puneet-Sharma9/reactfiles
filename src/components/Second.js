import React from 'react'
import Third from './Third'

const Second = (props) => {
  return (
    <div>
        <Third itemSec = {props.item} />
    </div>
  )
}

export default Second