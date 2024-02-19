import React,{createContext, useState} from 'react'
import Child from './Child'

const GlobalInfo = createContext();

const ConApp = () => {
    const [color,setColor] = useState('yellow');
  return (
    <GlobalInfo.Provider value={{appColor:color}}>
      <div>
        <h1>React context api topic. App component</h1>
        <Child />
      </div>
    </GlobalInfo.Provider>
  )
}

export default ConApp
export {GlobalInfo}