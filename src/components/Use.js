import { useEffect, useState } from 'react'

function Use(){
  const [user,setUser]  = useState("puneet","guri","roshan")

 useEffect(()=>{
  console.log(`print ${user}`);
 }); 
return(
  <>
    <button onClick={() => setUser([...user,"jagpreet","sagar","sarthak"])}>click</button>
  </>
)
}

export default Use