import React, { useState } from 'react'

function Crud() {
    const[user,setUser]=useState(["anshul","guri"]);
  function addItem(){
        user.push("puneet");
        setUser([...user])
   }
function deleteItem(){
    user.pop();
    setUser([...user])
}
  return (
    <div>
        <p>{user}</p>;
        <button onClick={addItem}>Add</button>;
        <button onClick={deleteItem}>Delete</button>

    </div>
  )
}

export default Crud

// to button show and hide for the text in js with use state