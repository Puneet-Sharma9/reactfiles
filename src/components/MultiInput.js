import React, { useState } from 'react'

function MultiInputs() {

const [userReg,setUserReg] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
});  

const [records, setRecords] = useState([]);
const handleInput = (e) => {
const name = e.target.name;
const value = e.target.value;

setUserReg({...userReg, [name] : value})
}

const handleSubmit = (e) => {
  e.preventDefault();
  
  const newRecord = { ...userReg, id: new Date().getTime().toString() }
  setRecords([...records, newRecord]);

  setUserReg({username:"", email:"", phone:"",password:""})
}

 
  return (
    <>
     <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor='username'>Fullname</label>
        <input type='text' name='username' id='username' value={userReg.username} onChange={handleInput} />
    </div>

    <div>
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' id='email' value={userReg.email} onChange={handleInput} />
    </div>

    <div>
        <label htmlFor='phone'>Phone</label>
        <input type='text' name='phone' id='phone' value={userReg.phone} onChange={handleInput} />
    </div>

    <div>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' value={userReg.password} onChange={handleInput} />
    </div>

    <button type='submit'>Submit</button>
    </form> 


     <table>
                    <thead>
                        <tr>
                            <th>Fullname</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((curElem) =>

                            <tr>
                                <td>{curElem.username}</td>
                                <td>{curElem.email}</td>
                                <td>{curElem.phone}</td>
                                <td>{curElem.password}</td>
                            </tr>

                        )}


                    </tbody>
                     </table> 
    </>
  )
}

export default MultiInputs