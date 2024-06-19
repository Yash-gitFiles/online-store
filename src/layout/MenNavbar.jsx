import React from "react";
import styles from "../styles/men/men.module.css";
import { Link } from "react-router-dom";
// import { signOut } from "firebase/auth";
// import { auth } from "../services/firebaServices";

function MenNavbar() {
  // async function handleLogout() {
  //   try {
  //     await signOut(auth);
  //     localStorage.removeItem("user");
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // }
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
            <Link to="jackets">Jakets</Link>
            <Link to="hoodies">Hoodies</Link>
            <Link to="sweatShrits">Sweat-Shirts</Link>
            <Link to="polos">Polos</Link>
            <Link to="supimaPolos">Supima Polo</Link>
            <Link to="fullSleeveTshirt">Full Sleece T-shirt</Link>
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
            {/* <Link to="cargoPants">Cargo pants</Link> */}
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
      </ul>
    </div>
  );
}

export default MenNavbar;
