import styled from "styled-components";

import {
  ArrowContainerPrimary,
  ArrowLeftPrimary,
  ArrowRightPrimary,
  ButtonPrimary,
  MarginBottomContainer,
} from "../../GlobalStyle";
import {
  mobile,
  Mobile768,
  MobileMaxWidth1200,
} from "../../responsive";

export const Container = styled(MarginBottomContainer)`
  width: 100%;
  height: 70vh;
  overflow: hidden;
  position: relative;
  display: flex;
  ${Mobile768({ height: "40vh" })}
`;

export const ArrowContainer = styled(ArrowContainerPrimary)``;

export const ArrowLeft = styled(ArrowLeftPrimary)``;
export const ArrowRight = styled(ArrowRightPrimary)``;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.5s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const SlideBox = styled.div`
  display: flex;
  width: 100vw;
  height: 70vh;

  ${Mobile768({ height: "40vh" })}
`;

export const Slide = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
  padding: 0 50px;
  width: 100%;

  ${mobile({ padding: "0 0.5rem" })};
  ${Mobile768({ padding: "0 0.5rem" })}
`;

export const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  padding: 30px 0;
  ${Mobile768({ padding: "1rem 0" })}
  
`;

export const Image = styled.img`
  height: 80%;
  width: 80%;
  object-fit: contain;

  ${Mobile768({ height: "100%", width: "100%" })}
`;

export const InfoContainer = styled.div`
  flex: 1;
  ${Mobile768({ flex: "2" })}
  ${mobile({ marginLeft: "1rem" })}
  ${MobileMaxWidth1200({ flex: "2" })}
`;

export const Title = styled.h3`
  font-size: 2.2rem;
  font-weight: 500;
  
  ${Mobile768({ fontSize: "0.8rem" })}
  ${MobileMaxWidth1200({ fontSize: "1.7rem" })}
`;

export const Description = styled.p`
  margin: 1.8rem 0;
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: 200;

  ${Mobile768({ fontSize: "0.5rem", margin: "0.8rem 0" })}
  ${MobileMaxWidth1200({ fontSize: "1rem" })}
`;

export const Button = styled(ButtonPrimary)`
  ${Mobile768({ fontSize: "0.6rem", padding: "0.4rem" })}
  ${MobileMaxWidth1200({ fontSize: "0.9rem", padding: "0.6rem" })}
`;
