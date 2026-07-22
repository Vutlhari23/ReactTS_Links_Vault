import React, { Children } from 'react'
import styles from './Overlay.module.css'

export type OverLayProps ={
    children: React.ReactNode,
    close : () =>  void

}
export const Overlay = ({children,close}: OverLayProps)=>{
    <div className={styles['overlay']}>
        <div className={styles['overlay-child']}>
        
            {children}
             
        </div>
    </div>




}