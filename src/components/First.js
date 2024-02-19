import React from 'react'
import Second from './Second'

const First = () => {
let product = {
  pid : 101,
  pname : "webkitURL",
  price : 20000,
  descripion : "testing"
}
  return (
    <div>
        <Second item={product}/>
    </div>
    
    
  )
}

export default First

