import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from "./footer.module.css"

function Footer() {
  return (
    <div className={styles.footer} >
      <footer>
      <p><i className="fa-brands fa-square-facebook"></i><i className="fa-brands fa-instagram"></i><i className="fa-brands fa-twitter"></i><i className="fa-brands fa-linkedin"></i></p>
      <p>Copyright @ 2024</p>
      <p>All Rights Reserved</p>
        </footer>
    </div>
  );
}

export default Footer;