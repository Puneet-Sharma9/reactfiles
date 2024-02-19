import React from 'react'

const Forms = () => {
    function handle(){
        console.log("form was submitted");
    }
  return (
    <div>
        <input placeholder='write something'/>
        <submit onclick={handle}>Submit</submit>
    </div>
  )
}

export default Forms