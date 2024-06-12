import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/men/heroSection.module.css";
import Slider from "react-slick";

function HeroSection() {
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
        <img
          src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Polo-799-homepage.jpg?format=webp&w=1500&dpr=1.3"
          alt="img1"
        />
      </div>
      <div className={styles.mainContainer}>
        <img
          src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Plaid-Shirts-Offer-Campaign_HomePage-Banner_1.jpg?format=webp&w=1500&dpr=1.3"
          alt="img2"
        />
      </div>
      <div className={styles.mainContainer}>
        <img
          src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_banner_oversized_t-shirt_bif_vive_big_print.jpg?format=webp&w=1500&dpr=1.3"
          alt="img3"
        />
      </div>
    </Slider>
  );
}

export default HeroSection;
