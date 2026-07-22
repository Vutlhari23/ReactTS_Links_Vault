import React, { useState } from 'react'
import { ContentContainer } from '../ContentContainer/ContentContainer'
import { TextInput } from '../TextInput/TextInput'
import {Button} from '../Button/Button'
import { Text } from '../Text/Text'
import styles from './Form.module.css'


export const Form = () => {
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [tag,setTag] = useState("");
  const [url,setUrl] = useState("");
  const [entry,setEntry] = useState("");
  return (
    <ContentContainer  className={styles.form}>
        
        <Text>Add Link</Text>

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


        <TextInput  value={entry} onChange={(e)=>setEntry(e.target.value)}label='entry to delete'/>
                <Button action={()=>{
          localStorage.removeItem(entry);
        }}>Delete Link</Button>



        <Button action={()=>{
          let link = localStorage.getItem(entry);
          const linkSplit = link?.split(',');
          if(linkSplit){
      
            setTitle(linkSplit[0]);


          
          
            setUrl(linkSplit[1]);
      
            setDescription(linkSplit[2]);

       
            setTag(linkSplit[3]);
          const entry = title+","+url+","+description+","+tag;
          localStorage.setItem("entry"+localStorage.getItem("count"),entry);

      
      }
        }}>update Link</Button>
        
    </ContentContainer>
    
  )
}

