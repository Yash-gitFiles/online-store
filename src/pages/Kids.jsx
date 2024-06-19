import React from "react";
import Title from "../components/common/Title";
import HeroSection from "../components/men/HeroSection";
// import CategoryCard from "../components/common/CategoryCard";
// import styles from "../styles/pages/kids/kids.module.css";

function Kids() {
  return (
    <div>
      <HeroSection
        img1="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Kids_Bottoms_Homepage_Banner_New.jpg?format=webp&w=1500&dpr=1.3"
        img2="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/web-banner_1_Wb8eQNg.jpg?format=webp&w=1500&dpr=1.3"
        img3="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage-banner_8_gISg7qE.jpg?format=webp&w=1366&dpr=1.0"
      />
      <Title title="Categories" />

      {/* <CategoryCard /> */}
    </div>
  );
}

export default Kids;
