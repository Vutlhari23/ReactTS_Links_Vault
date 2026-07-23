import React, { Children } from 'react'
import styles from './Overlay.module.css'



export type OverLayProps ={
    children: React.ReactNode,
    close : () =>  void

}
export const Overlay = ({children,close}: OverLayProps)=>{

    return(
    <div className={styles['overlay']} onClick={close}>    {/*Click the outer overlay it  will close because of the onclick Close*/}
        <div className={styles['overlay-child']}
          onClick={(e) => e.stopPropagation()}>            {/*stops the modal inside the  overlay from closing when it is clicked*/}
        
            {children}
             
        </div>
    </div>


    )

};