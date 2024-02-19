import React,{useContext} from 'react'
import { GlobalInfo } from './ConApp'
import SuperChild from './SuperChild'

const Child = () => {
    const {appColor} = useContext(GlobalInfo);

  return (
    <div>
        <h1 style={{color:appColor}}>child component</h1>
        <SuperChild />
    </div>
  ) 
}

export default Child