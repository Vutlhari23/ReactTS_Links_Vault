{/*}

import React from 'react'

import { ContentContainer } from '../ContentContainer/ContentContainer'
import { TextInput } from '../TextInput/TextInput'
import {Button} from '../Button/Button'
import { Text } from '../Text/Text'
import  {useState} from 'react'
import styles from './Add.module.css'

export const AddLink = () => {
      const [title,setTitle] = useState("");
      const [description,setDescription] = useState("");
      const [tag,setTag] = useState("");
      const [url,setUrl] = useState("");

    const LinkObject= {
        title:title,
        url: url,
        description: description,
        tag: tag,  
    }
    const stringToStorage= JSON.stringify(LinkObject);
    console.log(stringToStorage);
    localStorage.setItem('link',stringToStorage);


    
 const stringFromStorage=localStorage.getItem('link');


  return (


  <ContentContainer  className={styles.form}>
        
        <Text variant='h1'>Add Link</Text>

        <TextInput value={title} onChange={(e)=>setTitle(e.target.value)} label='Title'/>
        <TextInput  value={url} onChange={(e)=>setUrl(e.target.value)} label='URL'/>
        <TextInput  value={description} onChange={(e)=>setDescription(e.target.value)}label='Description'/>
        <TextInput  value={tag} onChange={(e)=>setTag(e.target.value)}label='Optional Tags'/>
        <Button action={()=>{
          if(localStorage.getItem("count")){

          }else{
            localStorage.setItem("count","1");
          }
          const entry = title+","+url+","+description+","+tag;
          localStorage.setItem("entry"+localStorage.getItem("count"),entry);
         
          localStorage.setItem("count", String(Number(localStorage.getItem("count"))+1));
          
               

        }}>Add Link</Button>
  

<ContentContainer/>

)
</ContentContainer>

*/}