import React from 'react'
import styles from './TextInput.module.css'


type InputProps = {
    id: string,
    value?: string | number,
    label ?: string,
    name? : string,
    error?: string,
    style?: React.CSSProperties,
    onChange ?: React.ChangeEventHandler<HTMLInputElement>,

}
export const TextInput =({id,value,label,name, style,onChange,error} : InputProps)=>{
      
    return (
        <div> 
            <label>{label}</label>
            <input type='text' style={style} value={value} onChange={onChange}/>
            {error && <span className={styles['input-error']}>{error}</span>}
          

        </div>
    )


      
}