import React from 'react'
import {Text}  from '../Text/Text'
import { ContentContainer } from '../ContentContainer/ContentContainer'
import { TextInput } from '../TextInput/TextInput'
import {Button} from  '../Button/Button'
const Modal = () => {
  return (
<ContentContainer>
    <Text>Add Link</Text>
    <TextInput  label='Link'/>
    <TextInput  label='URL'/>
    <TextInput  label='Description'/>
    <TextInput  label='Optional Tags'/>
    <Button >Add Link</Button>
    <Button>Cancel</Button>
    </ContentContainer>
  )
}

export default Modal
