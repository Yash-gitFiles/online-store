import React from "react";
import styles from "../../styles/common/card.module.css";
import { useNavigate } from "react-router-dom";

function Card({ value }) {
  // console.log("value", value);

  const navigate = useNavigate();
  function handleDetails() {
    navigate("detailsPage");
  }

  if (!value) return null;
  return (
    <div className={styles.container} onClick={handleDetails}>
      <div className={styles.imgContainer}>
        <img src={value.imageURL1} alt="" className={styles.url1} />
        <img src={value.imageURL2} alt="" className={styles.url2} />
      </div>
      <div className={styles.descContainer}>
        <h3>{value.title}</h3>
        <div>
          <p>{value.desc}</p>
          <p>₹ {value.price}</p>
          <p>MRP incl. if all taxes</p>
        </div>
      </div>
      <button className={styles.btn}>
        <i className="fa-regular fa-heart"></i>
      </button>
    </div>
  );
}

export default Card;
