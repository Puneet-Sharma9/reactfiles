import React, { useState } from 'react'

function Crud() {
    const[user,setUser]=useState(["anshul","jagpreet"]);
  function addItem(){
        user.push("puneet","rahul");
        setUser([...user])
   }
function deleteItem(){
    user.pop();
    setUser([...user])
}
const handleChange = (e)=>{
  console.log("event  ",e.target.name);
}
  return (
    <div>
        <p>{user}</p>;
        
        <form>
        < input type="text" name="Category" onChange={handleChange} />
        </form>

        <button onClick={addItem}>Add</button>;
        <button onClick={deleteItem}>Delete</button>

    </div>
  )
}

export default Crud




