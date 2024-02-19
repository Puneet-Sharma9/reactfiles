import React,{useContext} from 'react'
import { GlobalInfo } from './ConApp'

const SuperChild = () => {
    const {appColor} = useContext(GlobalInfo);
    const day = "sunday";
 
  return (
    <div>
        <h1 style={{color:appColor}}>Super child component</h1>
    </div>
  ) 
}

export default SuperChild