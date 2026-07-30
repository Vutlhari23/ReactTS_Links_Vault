import React from 'react'
import ContentContainer from '../ContentContainer/ContentContainer'
import {Text} from '../Text/Text'
import { Button } from '../Button/Button'
import styles from '../Modals/ComfirmModal.module.css'
import type { LinkItem } from "../../types";

type ConfirmProps ={
    id: string,
    onClose: () => void;
    onDelete: (id:string) => void;
}






export const ConfirmationModel = ({onClose,onDelete,id}:ConfirmProps) => {
  

    return (

        <ContentContainer className={styles.overlay}>
            <Text variant='h2'>Are you sure you want to delete?</Text>
            <Button
             label='Cancel'
             className={styles['no-btn']}
             onClick={onClose}
            
            />
            <Button
             label='Yes Delete'
             className={styles['yes-btn']}
             
             onClick={()=> {onDelete(id);
                onClose();
             }}
            //On delete had to get somewhere here
            //the problem is where are we doing to get the id of the 
             

         
            
            
            />

        </ContentContainer>
    )

}