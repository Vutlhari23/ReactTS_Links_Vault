import React from 'react'
import {Button} from '../Button/Button'
import { Text } from '../Text/Text'



 type CardInfo = {
    title: string,
    url: string,
    description: string,
    tags: string,
    deleteLink: () => void,
    edit : () => void
 } 
 export const Card = ({title,url, description,tags,deleteLink,edit}: CardInfo) => {




  return (
    <div>
        <Text variant='h3'>Title : {title}</Text>
        <Text variant='h3'>URL : {url}</Text>
        <Text variant='h3'>Description : {description}</Text>
        <Text variant='h3'>Optional Tags : {tags}</Text>
        <button onClick={edit}>Edit</button>
        <button onClick={deleteLink}>Delete</button>

        
      
    </div>
  )
}

export default Card
