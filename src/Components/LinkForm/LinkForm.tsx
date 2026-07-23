import React, { useState } from 'react'
import {Text} from '../Text/Text'
import { TextInput } from '../TextInput/TextInput';
import 'bootstrap-icons/font/bootstrap-icons.css';
 export const LinkForm = () => {
      const [title,setTitle] = useState("");
      const [url,setUrl] = useState("");
      const [description,setDescription] = useState("");
      const [tag,setTag] = useState("");
      const handleSubmit = (e)=> {
        e.preventDefault();
        addBook(title,url,description,tag);
        setTitle('');
        setUrl('');
        setDescription('');
        setTag('');
      }
     
  return (
   <form onSubmit={handleSubmit}>
     <i className="bi bi-x" ></i>
     <Text>Add  Link</Text>
            <TextInput value={title} onChange={(e)=>setTitle(e.target.value)} label='Title'/>
            <TextInput  value={url} onChange={(e)=>setUrl(e.target.value)} label='URL'/>
            <TextInput  value={description} onChange={(e)=>setDescription(e.target.value)}label='Description'/>
            <TextInput  value={tag} onChange={(e)=>setTag(e.target.value)}label='Optional Tags'/>
            <button type='submit' value="Add Link"></button>
   </form>
  )
}

export default LinkForm
