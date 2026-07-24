
import styles from "./MainContent.module.css";
import type { LinkItem } from "../../App";
import No_Link from '../../assets/NoLink.webp'



type Props = {
  links: LinkItem[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenAdd: () => void;
  onDelete: (id: string) => void,
  onEdit: (link: LinkItem) => void;
  
};

export const MainContent = ({ links, onDelete, onEdit,onOpenAdd,searchQuery,setSearchQuery}: Props) => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.content}>
        <div className={styles.headerRow}>
          
          <h2>HyperHUb</h2>



          <div className={styles['nav-left']}>
           <div className={styles.searchContainer}>
            <i className={`bi bi-search`} ></i>
            <input
              type="text"
              placeholder="Search , titles, links..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
           <div className={styles.addContainer}>
            <button className={styles.addBtn} onClick={onOpenAdd}>
             <i className="bi bi-plus" style={{ fontSize: "25px" }}></i>
               New Link
            </button>
          </div>
          </div>
      </div>

        <div className={styles.linksList}>
          {links.length === 0 ? (
            <div className={styles.emptyState}>
              <img
                src={No_Link}
                alt="Links not avilable"
                className={styles.emptyImage}
              />
              <p>
                No links in your hub yet. Click "+ New Link" to get started.
              </p>
              


               <div className={styles.addContainer}>
            <button className={styles.addBtn} onClick={onOpenAdd}>
              <i className="bi bi-plus" style={{ fontSize: "25px" }}></i>
               New Link
            </button>
          </div> 
            </div>
          ) : (
            links.map((link) => (
              <div key={link.id} className={styles.linkCard}>
                <h3>{link.title}</h3>
                <strong>Link (URL):  </strong>    <a href={link.url} target="_blank" rel="noreferrer">
                  {link.url}
                </a><br/>
                <strong>Description:  </strong> <p>{link.description}</p>{link.tags && <span className={styles.tag}>{link.tags}</span>}
                <div className={styles.cardActions}>
                  <button
                    className={styles.actionBtn}
                    onClick={() => onEdit(link)}
                  >
                    Edit
                  </button>

                  <button
                    className={styles.actionBtn}
                    onClick={() => onDelete(link.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
};
