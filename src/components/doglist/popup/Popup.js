import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Subbreed from './subbreed/Subbreed'
import Moreimage from './Moreimage'

const Popup = ({close ,dogclick, filteredName}) => {

       const [subBreed, setSubBreed] =useState([]);

      
        useEffect(()=>{
             fetch(`https://dog.ceo/api/breed/${dogclick}/list`)
                  .then(response=>response.json())
                   .then(data=>{
                       setSubBreed(data.message)
                   })

        },[dogclick])
        
       
         
  return <div className='popup'>
      
              <div className='pophead'>
                  <h3 className='popsub'>{dogclick}</h3>
                  <div className='popclose' onClick={close}><i class="fas fa-2x fa-times-circle" ></i></div>
              </div>
              {subBreed.length===0?<h3 className='nobreed'>No SubBreed Found</h3>:<Subbreed clickedDog={dogclick} subBreedName={subBreed}/>}
              <Moreimage name={filteredName} clickedDog={dogclick}/>     
         </div>;
};

export default Popup;
                





