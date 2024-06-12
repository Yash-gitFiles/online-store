import React from "react";
import styles from "../styles/men/men.module.css";
import { Link } from "react-router-dom";

function MenNavbar() {
  return (
    <div className={styles.navContainer}>
      {/* first */}

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
            <Link to="tshirt">T-shirt</Link>
            <Link to="shirt">Shirts</Link>
            <Link to="jakets">Jakets</Link>
            <Link to="hoodies">Hoodies</Link>
            <Link to="sweatshits">Sweatshits</Link>
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
            <Link to="cargoPants">Cargo pants</Link>
            <Link to="jeans">Jeans</Link>
            <Link to="joggers">Joggers</Link>
            <Link to="shorts">Shorts</Link>
          </div>
        </div>

        {/* sneakers */}
        <div className={styles.sneakers}>
          <button>
            <Link to="sneakers">SNEAKERS</Link>
          </button>
        </div>

        {/* theme */}

        <div className={styles.dropdownTheme}>
          <button className={styles.dropbtnTheme}>
            BOTTOM WEAR&nbsp;&nbsp;&nbsp;
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </button>
          <div className={styles.dropdownContentTheme}>
            <Link to="batman">Batman</Link>
            <Link to="blackPanther">Black Panther</Link>
            <Link to="naruto">Naruto</Link>
            <Link to="onePiece">One Piece</Link>
            <Link to="rickAndMorxy">Rick And Morxy</Link>
            <Link to="harryPotter">Harry Potter</Link>
          </div>
        </div>
      </div>

      {/* second */}
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

export default MenNavbar;
