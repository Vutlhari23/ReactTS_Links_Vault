import React from 'react'
import styles from '../Button/Button.module.css'


type ButtonProp= {
    className?: string,
    label?: string,
    onClick ?: ()=> void,
    children?: React.ReactNode,
  
}
export const Button = ({className,label,onClick,children}: ButtonProp) => {
  return (
     <>
     <button 
     className={className} 
     onClick={onClick}
     
    >{label}
     {children}
     </button>
     
     

     
     </>
  )
}

