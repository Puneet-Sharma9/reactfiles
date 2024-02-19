import React from 'react'

const Listners = () => {
function handleClick(e){
    console.log("hello");
    console.log(e);
}
function printby(){
    console.log("bty");
}
function handleDoubleclick(){
    console.log("double click me!");
}
  return (
    <div>
        <button onClick={handleClick}>click me!</button>
        {/* <p onClick={printby}> This is for event demo</p> */}

        {/* handling non click events */}
        <p onMouseOver={printby}>
            lorem ipsim
        </p>
        <button onDoubleClick={handleDoubleclick}>dbl click me</button>

        {/* event object */}

    </div>
  )
}

export default Listners