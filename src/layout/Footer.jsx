import React from "react";
import styles from "../styles/layout/footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.listContainer}>
        <ul>
          <h3>NEED HELP</h3>
          <li>Contact Us</li>
          <li>Track Order</li>
          <li>Returns & Refunds</li>
          <li>FAQs</li>
          <li>My Account</li>
        </ul>
        <ul>
          <h3>COMPANY</h3>
          <li>About Us</li>
          <li>Careers</li>
          <li>Community Initiatives</li>
          <li>Logo Army</li>
        </ul>
        <ul>
          <h3>MORE INFO</h3>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Security</li>
          <li>Sitemap</li>
        </ul>
      </div>
      <div className={styles.policyContainer}>
        <div className={styles.cod}>
          <span>₹</span>
          <p>COD Available</p>
        </div>
        <div>
          <div>
            <p>7 Days Easy Returns</p>
          </div>
        </div>
      </div>
      <div className={styles.follow}>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-snapchat"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>
      <div className={styles.copyRight}>
        <p>&copy; powerded by-yash gondaliya</p>
      </div>
    </footer>
  );
}

export default Footer;
