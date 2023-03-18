import styled from "styled-components";
import {
  BoxPrimary,
  ButtonPrimary,
  GridContainer,
  HeadingPrimary,
  MarginBottomContainer,
  PaddingContainer,
  TitlePrimary,
} from "../../GlobalStyle";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

export const Container = styled(MarginBottomContainer)``;

export const Wrapper = styled(PaddingContainer)``;

export const Box = styled(BoxPrimary)``;

export const Header = styled.div``;

export const Heading = styled(HeadingPrimary)``;

export const MegaBox = styled.div`
  display: flex;
`;



export const ProductBannerContainer = styled.div`
//   border: 1px solid red;
  width: 30%;
  height: 400px;
  position: relative;
`;

export const ProductBannerImage = styled.img`
  width: 100%;
  height:100%;
  object-fit: cover;
  border-radius: 20px;
`;

export const ProductContainer = styled(GridContainer)`
  position: relative;
  // grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  width: 70%;
 
`;

export const Title = styled(TitlePrimary)`
  position: absolute;
  top: 20%;
  left: 10%;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  width: 70%;
`;
export const Button = styled(ButtonPrimary)`
  position: absolute;
  top: 60%;
  left: 10%;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.3rem 0.5rem;
  border-radius: 0.4rem;
  background-color: green;
`;



export const ArrowContainer = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "0.5rem"};
  right: ${(props) => props.direction === "right" && "0.5rem"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

export const ArrowLeft = styled(KeyboardArrowLeft)``;
export const ArrowRight = styled(KeyboardArrowRight)``;
