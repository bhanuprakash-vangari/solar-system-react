import styled from "styled-components";
import "../../images/Data";
export const InfoContainer = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  width: 100%;
  @media screen and (max-width: 411px) {
    
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  margin-left: 2rem;
  align-items: left;
  justify-content: left;
  @media screen and (max-width: 411px) {
    align-items: center;
    justify-content: center;
    margin: auto;
  }
`;

export const InfoTitle = styled.h1`
  font-size: 8rem;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  text-shadow: 2px 4px 16px #101010;
  @media screen and (max-width: 411px){
    font-size: 4rem;
  }
`;

export const InfoStarName = styled.h4`
  margin-top: -10rem;

  font-size: 2rem;
  text-transform: uppercase;
  color: #fff;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  text-shadow: 2px 4px 16px #101010;

  @media screen and (max-width: 411px) {
    margin-top: -13rem;
    font-size: 1rem;
  }
`;
export const InfoAge = styled.h5`
  margin-top: -15rem;

  font-size: 1.8rem;
  text-transform: uppercase;
  color: #fff;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  text-shadow: 2px 4px 16px #101010;
  @media screen and (max-width: 411px) {
    font-size: 1rem;
  }
`;
export const InfoDistance = styled.h6`
  margin-top: -15rem;

  font-size: 1.6rem;
  text-transform: uppercase;
  color: #fff;
  font-weight: 300;
  font-family: "Poppins", sans-serif;
  text-shadow: 2px 4px 16px #101010;
  @media screen and (max-width: 411px) {
    font-size: 1rem;
  }
`;
export const InfoDescription = styled.p`
  margin-top: -15rem;
  max-width: 800px;
  font-size: 1.5rem;
  line-height: 3rem;
  color: #fff;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  text-shadow: 2px 4px 8px #000;
  @media screen and (max-width: 411px) {
    max-width: 350px;
    font-size: 0.8rem;
    line-height: 1.5rem;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
