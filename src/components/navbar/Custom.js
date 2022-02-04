import React from 'react';
import { useState,useCallback} from 'react/cjs/react.development';

const Custom = ({handle,name}) => {
  /* for storing option data*/
  const [selectedOption,setOption] = useState('');
   /* for storing input number */
  const [number,setNumber]= useState(0);
   /* for storing fetch data */
  const [custimage, setCustimage]= useState([]);
   const[render, setRender] = useState(false);
   /* handle option input*/
  const handleoption=(e)=>{
    setOption(e.target.value);
  }
    /* handleing number of input*/
  const handlenumber=(e)=>{
      
    setNumber(e.target.value);
  }

  
    /* maping name component */
  let option= name.map((names,i)=>{
      return <option key={i}>{names}</option>

  })
  
  const getImg= useCallback(()=>{
       
    fetch(`https://dog.ceo/api/breed/${selectedOption}/images/random/${number}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        setCustimage(data.message);
        
    })

},[selectedOption,number,setCustimage])

const handleSubmit = useCallback(() => {
    
    if(number && selectedOption){
        getImg();
    setRender(true)
    }
    console.log(number)
   console.log('inside click')
},[getImg,setRender,number,selectedOption])



  return <div className='custom'>
              <div className='cust-top'>
                   <h3 className='custname'> Custom Search</h3>
                    <div className='close' onClick={handle}><i class="fas fa-2x fa-times-circle" ></i></div>
              </div>
              <div className='select' > 
                 
                  <select className='select2' onChange={handleoption}>
                      <option value={selectedOption}>Select Dog</option>
                      {option}
                       
                  </select>
                  <input type="number" className='input' onChange={handlenumber} value={number}/>
              </div>

              <button type='submit' className='submitbtn' onClick={handleSubmit}>GET IMAGES</button>

            {render?<>
              <h3 className='value2'>{`Showing ${number} images of ${selectedOption}`}</h3>
              {custimage && custimage.map((image,i) => {

return <img  className='imagerender' src={image} key={i} alt='dog'></img>
})}
            
            </>:<h3 className='values'>Enter The values</h3>
            
          
          }
  </div>;
};

export default Custom;
