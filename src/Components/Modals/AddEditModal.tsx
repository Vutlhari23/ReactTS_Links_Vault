import type { LinkItem } from "../../types";
import styles from  './AddEdit.module.css'
import {Text} from '../Text/Text'
import { useState } from "react";
import { Button } from "../Button/Button";
import { TextInput } from "../TextInput/TextInput";
import closeIcon from '../../assets/closeIcon.png'


type ModalProps ={
    onClose : () => void,
    onSubmit :(link:LinkItem)=>void,
    selectedLink : LinkItem | null
}

export const AddEditModal = ({onClose,selectedLink,onSubmit}: ModalProps) => {
   const [title, setTitle] = useState(selectedLink? selectedLink.title : "")
   const [description, setDescription] = useState(selectedLink? selectedLink.description : "")
   const [url, setUrl] = useState(selectedLink? selectedLink.url : "")
   const [optionalTags, setOptionalTags ]= useState(selectedLink? selectedLink.optionalTags : "")

//Function for handling submit

const handleSubmit = (e : React.FormEvent) =>{
    e.preventDefault();// page doesn't refresh

    if(!title.trim() || !url.trim()) {
        alert("Please provide atleast a Title and a Url.");
        return;
    }
    //Create a Link Object
    const submittedLink: LinkItem ={
        id: selectedLink ? selectedLink.id : crypto.randomUUID(),
        title,
        url,
        description,
        optionalTags,
    };
    
    onSubmit(submittedLink);


}


   return (
    <div className={styles.overlay}>
        <div className={styles.content}>
        <div className={styles['modal-header']}>
           <Text variant='h2'>{selectedLink? " Edit" : "Add New Link"}</Text>
           <img
           src={closeIcon}
           className={styles['close-icon-img']}
           onClick={onClose}
           />
           
           

        </div  >
        <div className={styles.form} >
        <form  onSubmit={handleSubmit}>
            
            <TextInput
               className={styles['input-field']}
               type="text"
               value={title}
               label="Title "
               placeholder="e.g., React Official Documentation"
               onChange={(e)=> setTitle(e.target.value)}
            />
            <TextInput
               className={styles['input-field']}
               type="text"
               value={url}
               label="URL "
               placeholder="https://..."
                onChange={(e)=> setUrl(e.target.value)}
            />
            <TextInput
               className={styles['input-field']}
               type="text"
               value={description}
               label="Description "
               placeholder="Add Notes to  help you  remember this link"
               onChange={(e)=> setDescription(e.target.value)}
            />
            <TextInput
               className={styles['input-field']}
               type="text"
               value={optionalTags}
               label="Optional tags"
               placeholder="e.g., #React LearningTutorial"
               onChange={(e)=> setOptionalTags(e.target.value)}
            />
            <Button 
     
            className={styles['submit-btn']}
            label= {selectedLink? "Update" : "Save Link"}
            />
        </form>
        </div>
    </div>
    </div>

   )
}
   