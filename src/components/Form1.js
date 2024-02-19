import React, { useState } from 'react';

const Form1 = () => {
  const [names, setNames] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };// Updating userVal with the input field value

  const addName = () => {
    setNames([...names, inputValue]);
    setInputValue('');
  };

  const removeName = () => {
    const updatedNames = [...names];
    updatedNames.pop();
    setNames(updatedNames);
  };

  return (
    <>
      <div>
        <h2>{names.join(', ')}</h2>
        <form>
          <input
            type="text"
            name="userName"
            value={inputValue}
            onChange={handleChange}
          />
        </form>
        <button onClick={addName}>Add Name</button>
        <br />
        <button onClick={removeName}>Delete Name</button>
      </div>
    </>
  );
};

export default Form1;
