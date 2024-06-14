import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/men/heroSection.module.css";
import Slider from "react-slick";

function HeroSection({ img1, img2, img3, img4, img5, img6, img7, img8, img9 }) {
  var settings = {
    // ======== simple slider =======
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <div className={styles.mainContainer}>
        <img src={img1} alt="img1" />
      </div>
      <div className={styles.mainContainer}>
        <img src={img2} alt="img2" />
      </div>
      <div className={styles.mainContainer}>
        <img src={img3} alt="img3" />
      </div>
      <div className={styles.mainContainer}>
        <img src={img4} alt="img3" />
      </div>
      <div className={styles.mainContainer}>
        <img src={img5} alt="img3" />
      </div>
      <div className={styles.mainContainer}>
        <img src={img6} alt="img3" />
      </div>
    </Slider>
  );
}

export default HeroSection;
