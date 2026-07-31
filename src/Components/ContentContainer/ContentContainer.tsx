import React from 'react'

type ContainerProp= {

    className?: string,
    style?: React.CSSProperties,
    children:React.ReactNode,
    onClick?:()=>void;
  
}

export const ContentContainer = ({className,style,children,onClick}: ContainerProp) => {
  return (
    <div  className={className} style={style} onClick={onClick}>
        {children}
    </div>
  )
}


export default ContentContainer
