import './App.css'
import { MainContent } from '../src/components/MainContent/MainContent'
import { useEffect, useState } from 'react';
import type { LinkItem } from './types';
import { AddEditModal } from './components/Modals/AddEditModal';
import ContentContainer from './components/ContentContainer/ContentContainer';
import { ConfirmationModel } from './components/Modals/ConfirmationModal'; 

function App() {
const [searchQuery, setSearchQuery] = useState("");
const [LinkToDelete, setLinkToDelete] = useState("");
const [showModal, setShowModal] = useState(false);

const [linkToEdit, setLinkToEdit] = useState<LinkItem | null>(null); 

// Storage initialization
const [links, setLinks] = useState<LinkItem[]>(() => {
const savedLinks = localStorage.getItem('linksInStorage');
if (savedLinks) return JSON.parse(savedLinks);
return [];
}); 

// FIXED: Syncs correctly to 'linksInStorage' key and handles modal closure cleanly
  const handleDeleteLink = (id: string) => {
    setLinks(links.filter((link) => link.id !== id));
    closeModal();
  };


// Automatically keeps LocalStorage updated whenever state changes
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

const openModal = () => {
setLinkToEdit(null);
setShowModal(true);
}; 


const closeModal = () => {
setLinkToEdit(null);
setShowModal(false);
}; 


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

const openEditModal = (link: LinkItem) => {
setLinkToEdit(link);
setShowModal(true);
}; 




  return (
    <ContentContainer>
    <MainContent
     
  
    links={searchedLinks}
    searchQuery={searchQuery}
    openModal={openModal}
    onEdit={openEditModal}
    onDelete={handleDeleteLink}


  

    />
   {
    showModal && (
      <AddEditModal 
      onSubmit={handleSaveLink}
      onClose={closeModal}
      selectedLink={linkToEdit}

      />
    )}

  
   </ContentContainer>
  );
}

export default App
