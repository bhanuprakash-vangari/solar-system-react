import React from "react";
import { HeorContainer, HeroHeading } from "./HeroElements";
import AOS from 'aos';
import "aos/dist/aos.css";
AOS.init();
const Hero = () => {
  return (
    <>
      <HeorContainer>
          <HeroHeading data-aos='fade-in' data-aos-delay='300'>Solar System</HeroHeading>
      </HeorContainer>
    </>
  );
};

export default Hero;
