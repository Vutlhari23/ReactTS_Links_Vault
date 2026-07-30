import React from 'react'
import type {LinkItem} from '../../types'
import {Text}  from  '../Text/Text'
import {Button} from '../Button/Button'
import styles from '../LinkCard/LinkCard.module.css'
import {ContentContainer} from '../ContentContainer/ContentContainer'
import { useState } from 'react'



type LinkCardProps ={
  data: LinkItem;
  openModal?: () => void;
  onEdit: (link :LinkItem) => void;
  onConfirmModal?:() => void;
  onDelete: (id:string)=>void; 


}




export const LinkCard =({data,openModal,onEdit,onConfirmModal,onDelete, } : LinkCardProps) => { 





return(

  <article className={styles.card}>
    <ContentContainer className={styles['card-content']}>
      <Text variant='h2'>{data.title}</Text>
      <Text variant='p'>{data.url}</Text>
      <Text variant='h2'>{data.description}</Text>
      <Text variant='p'>{data.optionalTags}</Text> 
      <ContentContainer className={styles.btn}>
        <Button className={styles['edit-btn']} 
        label='Edit'
         onClick={() => onEdit(data)} 
         />
        <Button 
        className={styles['delete-btn']}
         label='Delete'
         onClick={()=> onDelete(data.id)} //opens the Comfirmn Delete Modal
        />
      </ContentContainer>
    </ContentContainer>

    
    

  </article>
)
};