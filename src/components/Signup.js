import React from 'react'
import { useState } from 'react'

const Calculator = () => {
    const [first,setFirst] = useState('');
    const [second,setSecond] = useState('');
    const [result,setResult] = useState('');

    const operator = (val) => {
        const num1 = parseInt(first);
        const num2 = parseInt(second);
    
        switch (val) {
            case 'add':
              setResult(num1 + num2);
              break;
            case 'sub':
              setResult(num1 - num2);
              break;
            case 'mul':
              setResult(num1 * num2);
              break;
            case 'divide':
              setResult(num1 / num2);
              break;
            default:
              setResult('Invalid operator');
              break;
          }
        };
const handleSubmit = (e) => {
    e.preventDefault();
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='number' name="A" value={first} onChange={(e) => setFirst(e.target.value)}/>
            <input type='number' name="B" value={second} onChange={(e) => setSecond(e.target.value)} />
            <br />
            <button onClick={() => operator('add')}>Add</button>
            <button onClick={() => operator('sub')}>Sub</button>
            <button onClick={() => operator('mul')}>Mul</button>
            <button onClick={
              () => operator('divide')}>Div</button>

            <input type="number" value={result}/>
        </form>
    </div>
  )
}

export default Calculator