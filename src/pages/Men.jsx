import React from "react";
import styles from "../styles/men/men.module.css";
import HeroSection from "../components/men/HeroSection";

function Men() {
  return (
    <>
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
              <a href="#">Oversized t-shirts</a>
              <a href="#">T-shirt</a>
              <a href="#">Shirts</a>
              <a href="#">Jakets</a>
              <a href="#">Hoodies</a>
              <a href="#">Sweatshits</a>
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
              <a href="#">Cargo pants</a>
              <a href="#">Jeans</a>
              <a href="#">Joggers</a>
              <a href="#">Shorts</a>
            </div>
          </div>

          {/* sneakers */}
          <div className={styles.sneakers}>
            <button>SNEAKERS</button>
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
              <a href="#">Batman</a>
              <a href="#">Black Panther</a>
              <a href="#">Naruto</a>
              <a href="#">One Piece</a>
              <a href="#">Rick And Morxy</a>
              <a href="#">Harry Potter</a>
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
      <HeroSection />
    </>
  );
}

export default Men;
