import React from 'react'
import ContentContainer from '../ContentContainer/ContentContainer'
import {Text} from '../Text/Text'
import { Button } from '../Button/Button'
import styles from '../Modals/ComfirmModal.module.css'
import type { LinkItem } from "../../types";
import closeIcon from '../../assets/closeIcon.png'
type ConfirmProps ={
    id: string,
    onClose: () => void;
    onDelete: (id:string) => void; //receives id and function as a prop
}






export const ConfirmationModel = ({onClose,onDelete,id}:ConfirmProps) => {
  

    return (

        <ContentContainer className={styles.overlay} onClick={onClose}>
            <div className={styles.content} 
            onClick={(e) => e.stopPropagation()}>
           <div className={styles['confirm-message']}>   
            <Text variant='h3'>Are you sure you want to delete?</Text>
             <img
           src={closeIcon}
           className={styles['close-icon-img']}
           onClick={onClose}
           />
            </div >
            <div className={styles.buttons}>
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
            </div>
            </div>

        </ContentContainer>
    )

}