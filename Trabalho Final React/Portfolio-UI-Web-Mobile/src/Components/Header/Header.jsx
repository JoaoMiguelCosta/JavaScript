import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./header.module.css"

function Header() {
  return (
    <div className={styles.header}>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Work">Work</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;