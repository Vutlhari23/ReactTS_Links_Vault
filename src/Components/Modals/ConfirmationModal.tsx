import React from 'react'
import ContentContainer from '../ContentContainer/ContentContainer'
import {Text} from '../Text/Text'
import { Button } from '../Button/Button'
import styles from '../Modals/ComfirmModal.module.css'
import type { LinkItem } from "../../types";

type ConfirmProps ={
    id: string,
    onClose: () => void;
    onDelete: (id:string) => void; //receives id and function as a prop
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
             
             onClick={()=> {onDelete(id); // 4 Deletes the Link  and closes the modal
                onClose();                //closes the app
             }}

            />

        </ContentContainer>
    )

}