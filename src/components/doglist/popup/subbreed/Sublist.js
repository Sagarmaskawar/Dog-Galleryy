import React from 'react';
import { useState,useEffect } from 'react/cjs/react.development';

const Sublist = ({clickedDog,subName}) => {
    const [subimage,setSubimage]=useState([]);

    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${clickedDog}/${subName}/images/random`)
            .then(response => response.json())
            .then(data => {
                
                setSubimage(data.message);
            })
    }, [clickedDog,subName]);
  return <div>
                 <div>
                    <img className='moreimages' src={subimage} alt="logo" />
                    <h4>{subName}</h4>
                   </div>

  </div>;
};

export default Sublist;
