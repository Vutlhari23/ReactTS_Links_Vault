
import { Navbar} from './Components/Navbar/Navbar'
import {Form} from './Components/Form/Form'
import Searchbar from './Components/Search/Searchbar'
import { useEffect, useState } from 'react'
import {Link} from './Components/Link/Link'
import { Overlay } from './Components/Overlay/Overlay'
import {Card} from './Components/Card/Card'


 type CardInfo = {
    title: string,
    url: string,
    description: string,
    tags: string,
    entry:string
   
 } 

function App() {
 const [showOverlay,setShowOverlay] = useState(false);
let link: CardInfo[] = [];
const [autoRefresh, setAutoRefresh] = useState('');



 


const allValues = Object.values(localStorage);
console.log(allValues);
  function getKeyByValue(targetValue : string | undefined) {
  return Object.keys(localStorage).find(key => localStorage.getItem(key) === targetValue);
}

  for(let i=0;i<allValues.length;i++){
 link.push({
     title: allValues[i]?.split(',')[0]  ?? " ",
    url: allValues[i]?.split(',')[1]  ?? " ",
    description: allValues[i]?.split(',')[2]  ?? " ",
    tags: allValues[i]?.split(',')[3]  ?? " ",
    entry:'entry'+i
   
          });


  }



  return (
    <>
   {/* <Navbar showAddForm={() =>setShowOverlay(true)}/> 

       {showOverlay && (
        <Overlay close={() => setShowOverlay(false)}>
          <Form />
        </Overlay>
      )} */}

<div id='app-container'>
      {link.map((lin) => (
        <Card 
        title={lin.title} 
        url={lin.url} 
        description={lin.description} 
        tags={lin.tags}
        edit={()=>{}}
        deleteLink={()=>{
          const a = lin.title+","+lin.url+","+lin.description+","+lin.tags;
          localStorage.removeItem(getKeyByValue(a) ?? "");
        
          setAutoRefresh(lin.title);
        }}
        />
  
      ))}
</div>


     </>

  )
}

export default App
 
