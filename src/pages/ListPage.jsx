import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Card from "../components/common/Card";
import { kids } from "../data/kids";
import styles from "../styles/pages/listPage.module.css";
import { womenProductsData } from "../data/women";
import { menProductsData } from "../data/men";

function ListPage() {
  const param = useParams();
  const link = useLocation();
  console.log("param", param, link);

  let data = link.pathname.includes("women")
    ? womenProductsData.filter((v) => {
        return v.categories === param.id;
      })
    : link.pathname.includes("men")
    ? menProductsData.filter((v) => {
        return v.categories === param.id;
      })
    : kids.filter((v) => {
        return v.categories === param.id;
      });
  // const women = womenProductsData.filter((v) => {
  //   return v.categories === param.id;
  // });

  // console.log("data", data);

  return (
    <>
      <div className={styles.container}>
        {/* side bar */}
        <div className={styles.sidebarContainer}>
          {/* remove filter btn */}
          <div className={styles.removeBtn}>
            <button>Remove Filter</button>
          </div>

          {/*  size */}
          <div className={styles.size}>
            <p>Size</p>
            <div className={styles.sizeBtn}>
              <button>XXS</button>
              <button>XS</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
              <button>XXXL</button>
            </div>
          </div>

          {/* prices */}
          <div className={styles.prices}>
            <p>Prices</p>
            <ul className={styles.liContainer}>
              <li>
                <input type="radio" />
                <label htmlFor="">₹500 To ₹1000</label>
              </li>
              <li>
                <input type="radio" />
                <label htmlFor="">₹1000 To ₹1500</label>
              </li>
              <li>
                <input type="radio" />
                <label htmlFor="">₹1500 To ₹2000</label>
              </li>
              <li>
                <input type="radio" />
                <label htmlFor="">₹2000 To ₹2500</label>
              </li>
              <li>
                <input type="radio" />
                <label htmlFor="">₹2500 To ₹3000</label>
              </li>
            </ul>
          </div>
        </div>

        {/* card */}
        <div className={styles.cardContainer}>
          {data.map((value) => {
            return <Card value={value} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ListPage;
