import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductsData from './ProductsData'
// const API = 'https://fakestoreapi.com/products'
const Reactapi = () => {
    const [users, setUsers] = useState([]);
    // const fetchproducts = async (url) => {
    //     try{
    //       const res = await fetch(url);
    //       const data = await res.json();
    //       if(data.length > 0){
    //         setUsers(data);
    //       }
    //       console.log(data);
    //     }catch (e)  {
    //         console.error(e)
    //     }
    // }

    useEffect(() =>{
      axios.get('https://fakestoreapi.com/products')
      .then((res)=>setUsers(res.data))
        // fetchproducts(API);
    } ,[])
  return (
    <>
    <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <ProductsData users={users} />
        </tbody>
    </table>
    
    </>
  )
}

export default Reactapi