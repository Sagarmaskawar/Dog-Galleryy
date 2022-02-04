import React from 'react';
import Doglist from './Doglist';



function Dogcard({names,click}){
   
   
    
  return (
      
          
      
         names.map((name,i)=>{
             return <Doglist key={i} name={name} selecteddog={name} click={click}  />
                       
                   
                 }
             )
                    
          )
  

  
};

export default Dogcard;
