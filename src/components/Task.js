import React, { useState } from 'react';

const Task = () => {
  const [name, setName] = useState([]);
  const [userVal, setUserVal] = useState('');
  const [isVisible,setIsVisible] = useState(false);

  const add = () => {
    setName([...name, userVal]);
    setUserVal(''); 
  }

  const remove = () => {
    const totalNames = [...name];
    totalNames.pop();
    setName(totalNames);
  }
  
  const handleChange = (e) => {
    setUserVal(e.target.value); 
  }
  const Show = () => {
    setIsVisible(!isVisible);
  }
  console.log(isVisible);
  return (
    <>
      <div>
        <button onClick={ () => Show() }>
            {isVisible ? "hide" : "show"}
          </button>

        {isVisible && <h2>{name}</h2>}
        <form>
          <input type="text" name='userName' value={userVal} onChange={handleChange} />
        </form> <br />
        <button onClick={add}>addName</button>
        <button onClick={remove}>deleteName</button>
      </div>
    </>
  )
}

export default Task;
