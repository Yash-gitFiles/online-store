import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/layout/navbar.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebaServices";
import { useAuth } from "../provider/UserProvider";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const user = useAuth();

  function handleClose() {
    setIsVisible(!isVisible);
  }

  async function handleLogout() {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <div className={styles.container}>
      <h3 className={styles.logoContainer}>Logo</h3>

      <ul
        className={`${styles.categoryContainer} ${
          isVisible ? styles.visible : ""
        }`}
      >
        <li className={styles.liList} onClick={handleClose}>
          <Link to="/">MEN</Link>
        </li>
        <li onClick={handleClose}>
          <Link to="women">WOMEN</Link>
        </li>
        <li onClick={handleClose}>
          <Link to="kids">KIDS</Link>
        </li>
        {!user && (
          <li onClick={handleClose}>
            <Link to="register">Login/Register</Link>
          </li>
        )}
        {user && (
          <li onClick={handleClose}>
            <button className={styles.btn} onClick={handleLogout}>
              LogOut
            </button>
          </li>
        )}
      </ul>
      <div className={styles.bars} onClick={handleClose}>
        {isVisible ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </div>
    </div>
  );
}

export default Navbar;
