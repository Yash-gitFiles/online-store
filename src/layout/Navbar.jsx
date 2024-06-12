import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/layout/navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <h3 className={styles.logoContainer}>Logo</h3>

      <ul className={styles.categoryContainer}>
        <li className={styles.liList}>
          <Link to="/">MEN</Link>
        </li>
        <li>
          <Link to="women">WOMEN</Link>
        </li>
        <li>
          <Link to="kids">KIDS</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
