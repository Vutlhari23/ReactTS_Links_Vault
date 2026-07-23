import React from 'react'
import { useState } from 'react';
export const LinkContext = () => {
    const [links, setLinks]= useState(
        []
    );
    const addLink =(title,url,description,tags) => {
        setLinks([...links, {title,url,description,tags}]);
    }
    const removeBook =(id)=>{
        setLinks(links.filter(link => link.id !== id))
    }

  return (
    <div>
      
    </div>
  )
}

export default LinkContext

