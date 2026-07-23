import React from 'react'
import {useState, useEffect} from 'react'
import {Text} from '../Text/Text'

export const Link = () => {

 const[links, setLinks] = useState([]);


 useEffect(()=>{
    const savedLinks = localStorage.getItem('links');

    if(savedLinks){
        setLinks(JSON.parse(savedLinks));       
    }
    },[]);

    if(links.length===0){
      return <Text variant='h1'>Add a Link to view Links</Text>;
    }
    

  return (
    <div>
   <>
   <Text variant='h1'>Links</Text>
   <ul id="MyLinks">
   
 
   </ul>
    </>



    </div>

  )
}

export default Link
