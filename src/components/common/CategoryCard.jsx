import React from "react";
import styles from "../../styles/common/categoryCard.module.css";

function CategoryCard({ img, value }) {
  console.log("value", value);
  return (
    <div className={styles.container}>
      <img src={value.categories} alt="img" className={styles.imgContainer} />
    </div>
  );
}

export default CategoryCard;
