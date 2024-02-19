import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem } from 'react-bootstrap';
import './Header.css'
const Headers = () => {
  return (
    <div>
      <div className='container'>
        <div className='logo'>
          <img src=''/>
        </div>
      <h1>jkg</h1>
          <ul >
            <li>Locations</li>
            <li>FAQ</li>
            <li>Contact Us</li> 
          </ul>
        </div>
    </div>
  );
};

export default Headers;
