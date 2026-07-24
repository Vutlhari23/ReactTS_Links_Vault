

import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav>
      <div className={styles.navContainer}>
        <div className={styles.content}>
          <div className={styles['nav-left']}>
          <div className={styles.brand}>
           
            <h1 className={styles.title}>HyperHub</h1>
          </div>
          </div>
          <div className={styles['nav-right']}>
     

          
          </div>
        </div>
      </div>
    </nav>
  );
};
