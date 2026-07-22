import React from 'react'
import { ContentContainer } from '../ContentContainer/ContentContainer'
import { TextInput } from '../TextInput/TextInput'
import {Button} from '../Button/Button'
import { Text } from '../Text/Text'
import styles from './Form.module.css'




export const Form = () => {
  return (
    <ContentContainer  className={styles.form}>
        
        <Text>Add Link</Text>
        <TextInput  label='Link'/>
        <TextInput  label='URL'/>
        <TextInput  label='Description'/>
        <TextInput  label='Optional Tags'/>
        <Button >Add Link</Button>
        <Button>Cancel</Button>
        <p>GHJDBDJBHJSFHBEHS</p>
    </ContentContainer>
    
  )
}

