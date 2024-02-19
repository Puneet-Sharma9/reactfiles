import React, { useState } from 'react';

const Functional = () => {
    
    const [Objects, setObjects] = useState([]);

    const addObject = () => {
        const newObject = {
            // id: Objects.length + 1,
            name: 'Puneet',
            age: 23,
        };

        const updatedArray = [...Objects, newObject];
        
        setObjects(updatedArray);
    };
    const objRemove = () => {
        const totalValues = [...Objects];
        totalValues.pop()
        setObjects(totalValues)
    }

    return (
        <div>
            <h2>Adding values of name and age</h2>

            <button onClick={addObject}>Add Object</button>
            <button onClick={objRemove}>remove Object</button>
            <ul>
                {Objects.map((object,ind) => (
                    <li key={ind}>
                        {object.name} {object.age}
                        </li>
                ))}
            </ul>
        </div>
    );
};

export default Functional;
