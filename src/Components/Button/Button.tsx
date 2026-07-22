import React from 'react'


type ButtonProps ={
    variant ?:string,
    children:string

}


 export const Button = ({variant,children}: ButtonProps) => {
  return (
  <Button variant={variant}>{children}</Button>

  )
}

