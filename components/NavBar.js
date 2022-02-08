import styles from "../styles/NavBar.module.css";
const NavBar = () => {
  return (

    <div className={styles.border}>
      <div className={styles.nav}>
      <div>Stodeo</div>
      <div className={styles.navOption}>
        <ul>
          <li>Home</li>
          <li>Why Stodeo</li>
          <li>Our Services</li>
          <li>Gallery</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>

      {/* sidebar */}

      <div className={styles.sideBar}>
        <div>
          {/* <div>III</div> */}
          {/* <ul>
            <li>Home</li>
            <li>Why Stodeo</li>
            <li>Our Services</li>
            <li>Galary</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default NavBar;
