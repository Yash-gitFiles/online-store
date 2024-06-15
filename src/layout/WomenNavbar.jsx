import React from "react";
import styles from "../styles/women/women.module.css";
import { Link } from "react-router-dom";

function WomenNavbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navInnerFirstContainer}>
        {/* top wear */}
        <div className={styles.dropdownTopWear}>
          <button className={styles.dropbtnTopWear}>
            TOP WEAR&nbsp;&nbsp;&nbsp;
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </button>
          <div className={styles.dropdownContentTopWear}>
            <Link to="oversizedTshirt">Oversized t-shirts</Link>

            <Link to="shirt">Shirts</Link>
            <Link to="sweetShirts">Sweet Shirts</Link>
            <Link to="tops">Tops</Link>
            <Link to="hoodies">Hoodies</Link>
            <Link to="jackets">Jackets</Link>
            <Link to="dresses">Dresses</Link>
          </div>
        </div>

        {/* bottom wear */}
        <div className={styles.dropdownBottomWear}>
          <button className={styles.dropbtnBottomWear}>
            BOTTOM WEAR&nbsp;&nbsp;&nbsp;
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </button>
          <div className={styles.dropdownContentBottomWear}>
            {/* <Link to="allBottoms">All Bottoms</Link> */}
            {/* <Link to="cargoAndJoggers">Cargo & Joggers</Link> */}
            <Link to="jeans">Jeans</Link>
          </div>
        </div>

        {/*  full sets */}
        <div className={styles.dropdownBottomWear}>
          <button className={styles.dropbtnBottomWear}>
            FULL SETS&nbsp;&nbsp;&nbsp;
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </button>
          <div className={styles.dropdownContentBottomWear}>
            <Link to="coOrdSets">Co Ord Sets</Link>
            {/* <Link to="cargoAndJoggers">Cargo & Joggers</Link> */}
            <Link to="sneakers">Sneakers</Link>
          </div>
        </div>
      </div>

      <ul className={styles.navInnerSecondContainer}>
        <li className={styles.inputCon}>
          <input type="text" placeholder="Search..." />
        </li>
        <li>
          <i className="fa-regular fa-heart"></i>
        </li>
        <li>
          <i className="fa-solid fa-cart-shopping"></i>
        </li>
        <li>
          <button className={styles.btn}>LogOut</button>
        </li>
      </ul>
    </div>
  );
}

export default WomenNavbar;
