import React from 'react'
import { useState } from 'react'

const Check = () => {

    const[count,setCount] = useState(0);
   
    const inc = () => {
        setCount(count + 1);
    }
    const dec = ()=>{
        return count!=0 ? setCount(count - 1) : null;
    }
    const reset = ()=>{
        setCount(0);
    }

    const [name,showName] = useState("name");

    const show = () => {
        showName("name");
    }

    const hide = () => {
        showName();
    }
  return (
    <div>
        <h1>{count}</h1><br />
        <button onClick={inc}>inc</button>
        <button onClick={dec}>dec</button>
        <button onClick={reset}>Reset</button>
        <hr />
        
        <p>{name}</p>
        <button onClick={show}>Show</button>
        <button onClick={hide}>Hide</button>
        
    </div>
  )
}

export default Check


// const CounterFnSetState = () => {
//     const [count, setCount] = useState(0);
//     return (
//       <>
//         <p>Count value is: {count}</p>
//         <button onClick={() => setCount(0)}>Reset</button>
//         <button 
//           onClick={() => setCount(prevCount => prevCount + 1)}>
//           Plus (+)
//         </button>
//         <button 
//           onClick={() => setCount(prevCount => prevCount - 1)}>
//          Minus (-)
//         </button>
//       </>
//     );
//   }