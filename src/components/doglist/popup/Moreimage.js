import React from 'react'
import { useState,useEffect } from 'react';

const Moreimage = ({clickedDog}) => {
    const[MoreImg,setMoreImg]=useState([])
    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${clickedDog}/images/random/4`)
            .then(response => response.json())
            .then(data => {
                // console.log(data.message);
                setMoreImg(data.message);
            })
    }, [clickedDog])
  return <div >
            <h4 className='morehead'>More Images</h4>
            <img className='moreimages'src={MoreImg[0]} alt="logo" />
            <img className='moreimages' src={MoreImg[1]} alt="logo" />
            <img  className='moreimages'src={MoreImg[2]} alt="logo" />
            <img className='moreimages' src={MoreImg[3]} alt="logo" />
</div>
};

export default Moreimage;
