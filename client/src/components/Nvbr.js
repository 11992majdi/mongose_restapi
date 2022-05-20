import React from 'react';
import './Nvbr.css';

const Nvbr = () => {
  return (
    <div className='nav'>
    <h2><a href="#" className="logo">mern</a></h2>
    
     <ul>
       <li><a href="/" className="active">homme</a></li>
       <li><a href="/add">ADD</a></li>
     </ul>
</div>
  )
}

export default Nvbr