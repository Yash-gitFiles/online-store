import React from "react";
import styles from "../styles/kids/kids.module.css";
import { Link } from "react-router-dom";

function KidsNavbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navInnerFirstContainer}>
        {/* boys */}
        <div className={styles.dropdownTopWear}>
          <button className={styles.dropbtnTopWear}>
            BOY &nbsp;&nbsp;&nbsp;
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </button>
          <div className={styles.dropdownContentTopWear}>
            <Link to="boysTshirt">Boys t-shirts</Link>
            <Link to="boysPolo">Boys Polo</Link>
            <Link to="boysJoggers">Boys joggers</Link>
            <Link to="boysFullSleeveTshirt">Boys Full Sleeve T-shirt</Link>
            <Link to="boyshoodieAndSweetsShirt">
              Boys Hoodie & Sweets Shirt
            </Link>
            <Link to="boysJackets">Boys Jackets</Link>
          </div>
        </div>

        {/* girls */}
        <div className={styles.dropdownBottomWear}>
          <button className={styles.dropbtnBottomWear}>
            GIRLS&nbsp;&nbsp;&nbsp;
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </button>
          <div className={styles.dropdownContentBottomWear}>
            <Link to="girlsTop">Girls Top</Link>
            <Link to="girlsDresses">Girls Dresses</Link>
            <Link to="girlsJoggers">Girls Joggers</Link>

            <Link to="girlsFullSleeveTshirt">Girls Full Sleeve T-shirt</Link>
            <Link to="girlshoodieAndSweetsShirt">
              Girls Hoodie & Sweets Shirt
            </Link>
            <Link to="girlsJackets">Girls Jackets</Link>
          </div>
        </div>

        {/* themes */}
        <div className={styles.dropdownBottomWear}>
          <button className={styles.dropbtnBottomWear}>
            THEMES&nbsp;&nbsp;&nbsp;
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </button>
          <div className={styles.dropdownContentBottomWear}>
            <Link to="batman">Batman</Link>
            <Link to="blackPanther">Black Panther</Link>
            <Link to="naruto">Naruto</Link>
            <Link to="onePiece">One Piece</Link>
            {/* <Link to="rickAndMorxy">Rick And Morxy</Link> */}
            {/* <Link to="harryPorter">Harry Porter</Link> */}
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
      </ul>
    </div>
  );
}

export default KidsNavbar;
