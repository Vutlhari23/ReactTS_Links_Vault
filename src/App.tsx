import './App.css'
import { MainContent } from '../src/components/MainContent/MainContent'
import { useEffect, useState } from 'react';
import type { LinkItem } from './types';
import { AddEditModal } from './components/Modals/AddEditModal';
import ContentContainer from './components/ContentContainer/ContentContainer';


function App() {


const [searchQuery, setSearchQuery] = useState("");

const [showModal, setShowModal] = useState(false);

const [linkToEdit, setLinkToEdit] = useState<LinkItem | null>(null); 

// Retrive Links from the LocalStorage
const [links, setLinks] = useState<LinkItem[]>(() => {
const savedLinks = localStorage.getItem('linksInStorage');
if (savedLinks) return JSON.parse(savedLinks);
return [];
});

// Filters the link out of  the storage when the linkToDelete matches with an id in the storage
  const handleDeleteLink = (id: string) => {
    setLinks(links.filter((link) => link.id !== id));
    closeModal();
  };


//Add links into the Localstorage
useEffect(() => {
localStorage.setItem("linksInStorage", JSON.stringify(links));
}, [links]);

// Filter links based on user query string
const searchedLinks = links.filter((link) => {
const query = searchQuery.toLowerCase();
const matchingTags = link.optionalTags ? link.optionalTags.toLowerCase().includes(query) : false;
return (
link.title.toLowerCase().includes(query) ||
link.url.toLowerCase().includes(query) ||
link.description.toLowerCase().includes(query) ||
matchingTags
);
});
// Modals  or Overlays
const openModal = () => {
setLinkToEdit(null);
setShowModal(true);
};


const closeModal = () => {
setLinkToEdit(null);
setShowModal(false);
};

const openEditModal = (link: LinkItem) => {
setLinkToEdit(link);
setShowModal(true);
};


//Edits the Links
const handleSaveLink = (submittedLink: LinkItem) => {
if (linkToEdit) {
setLinks(
links.map((link) => link.id === submittedLink.id ? submittedLink : link)
);
} else {
setLinks([...links, submittedLink]);
}
closeModal();
};





  return (
    <div id='app-content'>
    <MainContent
     
  
    links={searchedLinks}
    searchQuery={searchQuery}
    setSearchquery={setSearchQuery}
    openModal={openModal}
    onEdit={openEditModal}
    onDelete={handleDeleteLink} //1. The MainContent gets the delete function from the App.tsx as a prop
    />

    {/*Re-renders the Modal component*/}
   {
    showModal && (
      <AddEditModal 
      onSubmit={handleSaveLink}
      onClose={closeModal}
      selectedLink={linkToEdit}

      />
    )}

  
   </div>
  );
}

export default App
