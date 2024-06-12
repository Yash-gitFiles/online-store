import React from "react";
import styles from "../../styles/common/card.module.css";

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1688207565_6170618.jpg?format=webp&w=480&dpr=1.3"
          alt=""
        />
      </div>
      <div className={styles.descContainer}>
        <h3>Rick And Morty: Morty Universe</h3>
        <p>Oversized t-shirts</p>
        <p>₹ 899</p>
        <p>MRP incl. if all taxes</p>
      </div>
      <button className={styles.btn}>
        <i className="fa-regular fa-heart"></i>
      </button>
    </div>
  );
}

export default Card;
