import React from 'react'
import { useState } from 'react'
import {Text}  from '../Text/Text'
import { ContentContainer } from '../ContentContainer/ContentContainer'
import { TextInput } from '../TextInput/TextInput'
import {Button} from  '../Button/Button'
import styles from './Overlay.module.css'






export const Modal = () => {






  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [tag,setTag] = useState("");
  const [url,setUrl] = useState("");
  return (
<ContentContainer className={styles['modal-container']}>
     <Text>Add Link</Text>
    
            <TextInput value={title} onChange={(e)=>setTitle(e.target.value)} label='Title'/>
            <TextInput  value={url} onChange={(e)=>setUrl(e.target.value)} label='URL'/>
            <TextInput  value={description} onChange={(e)=>setDescription(e.target.value)}label='Description'/>
            <TextInput  value={tag} onChange={(e)=>setTag(e.target.value)}label='Optional Tags'/>
            <Button>Add Link</Button>
    </ContentContainer>
  )
}

export default Modal
