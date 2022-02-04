import React from 'react';
import Custom from './Custom';
import {useState} from 'react'

function Navbar({name}) {
     /*  storing custom click event*/
     const [custom,setCustom]= useState(false);
  
   /* onclick function call for custom search button click in nav bar*/
   function cust(){
    setCustom(true);
    }
    function customclose(){
      setCustom(false);
    }
  return <div className='navbar'>
    <h3 className='navdog'>Dog Gallery</h3>
    <button type='submit' className='navbtn' onClick={cust}>Custom Search</button>
    {custom?<Custom  handle={customclose} name={name}/>:null}
  </div>;
}

export default Navbar;
