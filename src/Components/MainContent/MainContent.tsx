
import ContentContainer from "../ContentContainer/ContentContainer";
import styles from "../MainContent/MainContent.module.css";
import { Text } from "../Text/Text";
import { Button } from "../Button/Button";
import type { LinkItem } from "../../types";
import { LinkCard } from "../LinkCard/LinkCard";
import { TextInput } from "../TextInput/TextInput";
import No_Link from "../../assets/NoLink.webp";
import SearchNotFound from "../../assets/SearchNotFound.jpg";
import { ConfirmationModel } from "../Modals/ConfirmationModal";
import { useState } from "react";

type Props = {
  links: LinkItem[];
  searchQuery: string,
  openModal : () => void;
  onEdit : (link:LinkItem)=> void;
  onDelete:(id:string) => void;  // 2.rom the app.tsx

  

  

};

export const MainContent = ({ links, searchQuery,openModal ,onEdit,onDelete}: Props) => {


const [showConfirmModal, setShowConfirmModal] = useState(false);
const [linkToDelete, setLinkToDelete] = useState<string | null>(null);

//Confirm Modals

const openConfirmModal = (id: string) => {
setLinkToDelete(id);
setShowConfirmModal(true);
};

const closeConfirmModal = () => {
setLinkToDelete(null);
setShowConfirmModal(false);
};


  return (
    <ContentContainer className={styles["main-content"]}>
      <div className={styles.header}>
        <div >
          <Text variant="h1">HyperHub</Text>
        </div>

        <div className={styles["top-left"]}>
          <div className={styles["search-container"]}>
            <TextInput
              type="text"
              placeholder="Search titles, links"
              className={styles["search-input"]}
            />
          </div>

          <div className={styles["add-container"]}>
            <Button
              className={styles["add-btn"]}
              label="Add New Link"
              onClick={openModal}  
            />
          </div>
        </div>
      </div>

      <div className={styles.LinksList}>
         {/*Shows state when the search results are not found, otherwise display the searched links found*/}
      
        {links.length === 0 ? (
          searchQuery.trim() !== "" ? (
            <div className={styles["empty-state"]}>
              <img
                src={SearchNotFound}
                alt="No Search Results"
                className={styles["empty-state-img"]}
              />

              <Text variant="h2">No Results Found</Text>
              <Text variant="p">
                No links matching "{searchQuery}"
              </Text>
            </div>
          ) :  (
           

          //Show an empty state when there are no links saved
            <div className={styles["empty-state"]}>
              <img
                src={No_Link}
                alt="Links not available"
                className={styles["empty-state-img"]}
              />

              <Text variant="h3">
                No links in your hub yet. Click "Add New Link" to get started.
              </Text>

              <div className={styles["add-container"]}>
             <Button
              className={styles["add-btn"]}
              label="Add New Link"
              onClick={openModal}  
            />
              </div>
            </div>
          )
        ) : (

        //Display the links in a link Card
          links.map((link) => (
            <LinkCard
              onEdit={onEdit}
              openModal={openModal}
              key={link.id}
              data={link}
              onDelete={openConfirmModal}  // 2. OpenConfirmFunction is passed to LinkCard as a prop
              
              
             
            />
          ))
        )}
      </div>
      {/*Renders the confirm modal */}
            {showConfirmModal && (
              <ConfirmationModel        //
                  onClose={closeConfirmModal}
                  onDelete={onDelete} // 3. pass the actual functionn and the id
                  id={linkToDelete!}  //The link to remove , got from clicking delete btn on the mainContent (setLinksToDelete)
                                       // we don't want to forget the ID of the link to remove.
     
  />
)}
      
    
    </ContentContainer>
  );
};