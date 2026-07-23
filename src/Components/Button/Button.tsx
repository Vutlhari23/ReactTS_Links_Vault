import React from 'react'


type ButtonProps ={

    children:string
    action ?:()=>void

}


 export const Button = ({children,action}: ButtonProps) => {
  return (
  <button onClick={action}>{children}</button>

  )
}

