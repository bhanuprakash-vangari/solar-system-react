import styled from "styled-components";
import BG from '../../images/Solar-System.jpg'
import BG1 from '../../images/Solar-System-1.jpg'
export const HeorContainer = styled.div`
  text-align: center;
  background-image: url(${BG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
  overflow: hidden;

  @media screen and (max-width: 411px) {
    background-image: url(${BG1});
  }
`;

export const HeroHeading = styled.h1`
  color: #fff;
  padding: 24rem;
  font-size: 8rem;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  justify-content: center;
  align-items: center;
  text-shadow: 2px 4px 16px #101010;
  @media screen and (max-width: 411px) {
    padding: 8rem 0;
    font-size: 4rem;
  }
}
`;