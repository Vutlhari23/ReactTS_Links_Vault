import React, { Children } from 'react'
import styles from './Overlay.module.css'

type OverLayProps ={
    children: React.ReactNode,
    close : () =>  void

}
export const overlay = ({children,close}: OverLayProps)=>{
    <div className={styles['overlay']}>
        <div className={styles['overlay-child']}>
            <img 
            className={styles['close-Icon']}
            onChange={close} 
            />
            {children}
             
        </div>
    </div>




}