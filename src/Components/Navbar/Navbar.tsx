import React from 'react'
import {Text} from '../Text/Text'
import styles from './Navbar.module.css'
import { ContentContainer } from '../ContentContainer/ContentContainer';

export const  Navbar =() => {

    return (
        <nav>
   
           <ContentContainer className={styles['nav-content']}>
                <Text variant={'h2'} >LinkVault</Text>
                <div className={styles.links}>
                    <a href='/#' className={styles.link}>Home</a>
                    <a href='#' className={styles.link}>Login</a>
                    <a href='/#' className= {styles.link}>Links</a> 
                    <a href='/#' className= {styles.link}>Add  new Link</a>   

                </div>
                </ContentContainer>

        </nav>
    )
};