import React from 'react';
import Sublist from './Sublist'

const Subbreed = ({clickedDog,subBreedName}) => {
     let Subbreedname=subBreedName.slice(0,4);
  return Subbreedname.map((subName)=>{
    return <Sublist subName={subName} clickedDog={clickedDog}/>
  })
      
};


export default Subbreed;
