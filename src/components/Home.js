import React from 'react';
import Navbar from './navbar/Navbar';
import Search from './Search/Search';
import { useState,useEffect} from 'react';
import Popup from './doglist/popup/Popup';
import Dogcard from './doglist/Dogcard';

const Home = () => {
 
    /* storing fetch data*/
    const[data, setData]= useState([]);
    /* store input value */
    const[search,setSearch] =useState('');
    const [popup,setPopup] = useState(false);
    const [dogclick,setDogclick]= useState({})
   
   
    /* fetching data of dog api list */
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
        .then(response=>response.json())
        .then(data=>{
            setData(Object.keys(data.message));
        })
    }, []);

    
  /* onchange event for search bar value*/
   function onchange(search){
         setSearch(search)

        
    } 
    function imageclick(selecteddog){
       setPopup(true);
       setDogclick(selecteddog);
     }
     function closeimage(){
       setPopup(false);
       setDogclick({});
     }
     
    
     /* filter data as per search  input*/
      const filteredName=data.filter((name) => {
        return name.toLowerCase().includes(search.toLowerCase())
      })

     
      
  return <>
           
         <div className='Home'>
               {popup?<Popup  close={closeimage} dogclick={dogclick} name={filteredName}/>:null}
                <Navbar name={data} />
                <Search onchange={onchange}/>
                <Dogcard names={filteredName} click={imageclick}/>
               
               
     
         </div>;
         </>
};

export default Home;
