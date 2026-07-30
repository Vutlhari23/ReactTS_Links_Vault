import React from 'react'


type ButtonProp= {
    className?: string,
    label?: string,
    onClick ?: ()=> void;
}
export const Button = ({className,label,onClick}: ButtonProp) => {
  return (
     <>
     <button 
     className={className} 
     onClick={onClick}
     
     style={{ backgroundColor: 'white', color:'black', width:'80px', height:"35px" , borderRadius: "10px"}} >{label}
     </button>
     
     

     
     </>
  )
}

