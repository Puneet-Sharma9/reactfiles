import React, { useContext } from 'react'
import {data,data1} from './App1';

const CompC = () => {
const Fname = useContext(data);
const gender = useContext(data1);
  return (
    <>
            <h2>my name is {Fname} && gender is {gender} </h2>
    </>
  );
};

export default CompC