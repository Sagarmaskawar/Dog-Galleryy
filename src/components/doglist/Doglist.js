import React from 'react';
import { useState,useEffect} from 'react';







const Doglist = ({name, selecteddog, click}) => {
    
    const[image, setImage] =useState([]);
    
    
    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${name}/images/random`)
        .then(response=>response.json())
        .then(data=>{
            setImage(data.message);
        
        })
       
       
    },[])
    
    
     
    
    
  return <div className='dog-map' onClick={()=>click(selecteddog)}>
              
                 
                   <img className='img' src={image} alt="logo"/>
                   <h4>{name}</h4>
                
        </div>;         
        
};

export default Doglist;
















  

