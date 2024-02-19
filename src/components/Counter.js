import React, { useState } from 'react'

const Counter = () => {
    // let coun = 0; with js code
    // function incoun(){
    //     coun = coun +1;
    //     console.log(coun);
    // }

    const [count,setCount] = useState(0);

    function incCount(){
        setCount(count+1);
        console.log(count);
    }
  return (
    <div>
        {/*<h3>Count = {coun} </h3>
        <button onClick={incoun}>Increase count</button> with js*/}


        <h1>states in react</h1>
        <h3>Count = {count}</h3>
        <button onClick={incCount}>Increase count</button>
    </div>
  )
}

export default Counter