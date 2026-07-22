import React from 'react'

type TextProps ={
    variant? : String,
    children: React.ReactNode,
    style? : React.CSSProperties
}

export const Text : React.FC<TextProps> = ({variant,children,style}) =>{
if(variant ==='h1') return <h1 style={style}>{children}</h1>
if(variant==='h2') return <h2 style={style}>{children}</h2>
if(variant==='h3') return <h3 style={style}>{children}</h3>
if(variant==='h4') return <h4 style={style}>{children}</h4>
if (variant==='h5') return <h5 style={style}>{children}</h5>
if(variant==='h6') return  <h6 style={style}>{children}</h6>
if (variant==='span') return <span style={style}>{children}</span>
return (
    <div style={style}>{children}</div>
)
}


