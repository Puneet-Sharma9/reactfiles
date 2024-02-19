// import logo from './logo.svg';
import '../App.css';
import React , {createContext} from 'react';
import CompA from './CompA';


const data = createContext();
const data1 = createContext();

function App1() { 
  const name = "puneet";
  const gender = "male";
  return (
    <>
     
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <CompA />
        </data1.Provider>
      </data.Provider>
      
      
  </>
  );
}

export default App1; 
export {data,data1}