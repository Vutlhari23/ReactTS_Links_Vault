import React from 'react' 
import styles from './Search.module.css'
import {Text} from '../Text/Text'
import { TextInput } from '../TextInput/TextInput'

 export const Searchbar = () => {
  return (
    <div className={styles['search-bar']}>
        <Text variant= {'span'}>Search</Text>
        <input type='text' className={styles['search-input']}></input>
        <i className="bi bi-search"></i>
      
    </div>
  )
}

export default Searchbar
