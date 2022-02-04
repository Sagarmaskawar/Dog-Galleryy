import React, {useState, createContext} from 'react';





const Search = ({onchange}) => {
       
    
   
  return <div className='search'>
      <input type="text" placeholder='  Type here to filter by breed' onChange={(e)=>onchange(e.target.value)} />
     
  </div>;
};

export default Search;
