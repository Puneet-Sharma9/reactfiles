import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Consumer from './Consumer';

const DataVal = createContext();

function ContextApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https:fakestoreapi.com/users')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Fetching Data using Context</h1>
      <DataVal.Provider value={data}>
        <Consumer />
      </DataVal.Provider>
    </div>
  );
}



export default ContextApi;
export  {DataVal}