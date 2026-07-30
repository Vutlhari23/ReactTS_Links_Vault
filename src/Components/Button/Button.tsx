import React from 'react'


type ButtonProp= {
    className?: string,
    label?: string,
    onClick ?: ()=> void,
    children?: string,
}
export const Button = ({className,label,onClick,children}: ButtonProp) => {
  return (
     <>
     <button 
     className={className} 
     onClick={onClick}
     
     style={{ backgroundColor: 'black', color:'white', width:'100px', height:"26px" , borderRadius: "10px"}} >{label}
     {children}
     </button>
     
     

     
     </>
  )
}

