import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count,setCount] = useState(0);

    useEffect(() => {
        console.log('the count is',count);

    },[count]);
  return (
    <div>
        <h1>count: {count}</h1>
        <button onClick={() => setCount(count-1)}>Decrement</button>
        <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}



export default Effect