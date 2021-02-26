import React, { useState, useEffect } from "react";
import {
  InfoAge,
  InfoContainer,
  InfoDescription,
  InfoStarName,
  InfoTitle,
  InfoDistance,
  InfoWrapper,
} from "./InfoElements";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Info = ({
  id,
  title,
  starName,
  age,
  description,
  distance,
  image,
  imageMobile,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth > 450 ? image : imageMobile;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
      <InfoContainer
        id={id}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <InfoWrapper>
          <InfoTitle data-aos="fade-up" data-aos-delay="300">
            {title}
          </InfoTitle>
          <InfoStarName data-aos="fade-up" data-aos-delay="320">
            Type / Start Name : {starName}
          </InfoStarName>
          <InfoAge data-aos="fade-up" data-aos-delay="350">
            Age : {age}
          </InfoAge>
          <InfoDistance data-aos="fade-up" data-aos-delay="400">
            Distance : {distance}
          </InfoDistance>
          <InfoDescription data-aos="fade-up" data-aos-delay="450">
            {description}
          </InfoDescription>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;
