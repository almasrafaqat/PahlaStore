import styled, { keyframes } from "styled-components";
import {
  DiscountPricePrimary,
  PricePrimary,
  TextPrimary,
  TitlePrimary,
} from "../../GlobalStyle";

export const Card = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  border: 1px solid teal;
  border-radius: 10px;
  padding: 5px;
  margin: 0 5px;
 
`;

export const TagContainer = styled.div`
  position: absolute;
//   background-color: ${(props) => props.bg};
  background-color: orange;
  color: ${({ theme }) => theme.colors.white};
  width: 5.5rem;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 25px;
  top: 0;
  left: 0;
  padding: 0.5rem;
  text-transform: capitalize;
  text-align: center;
`;

export const Text = styled(TextPrimary)``;

export const ImageContainer = styled.div`
  /* width: 150px;
    height: 150px; */
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0.5rem 0.8rem;
`;

export const Title = styled(TitlePrimary)``;

export const PriceContainer = styled.div``;

export const Price = styled(PricePrimary)``;

export const Discount = styled(DiscountPricePrimary)``;

export const StockContainer = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`;

export const SoldOut = styled.span`
  font-weight: 500;
  font-size: 15px;
`;

export const Available = styled(SoldOut)``;

export const ProgressContainer = styled.div`
  width: 100%;
  background-color: #ececec;
  border-radius: 30px;
  display: block;
  height: 15px;
`;

const progress = keyframes`
  0% {
    width: 0%;
    background: #f9bcca;
  }
  40%{
    width: calc( 100% - ${(props) => props.width}%);
    background: #f3c623;
    box-shadow: 0 0 40px #f3c623;
  }
  100% {
    width: calc( 100% - ${(props) => props.width}%);
    background: #f3c623;
    box-shadow: 0 0 40px #f3c623;

  }
`;

export const ProgressBar = styled.span`
  width: calc( 100% - ${(props) => props.width}%);
  height: 15px;
  display: block;
  font-size: 13px;
  color: white;
  text-align: center;
  border-radius: 30px;
  transition: 0.4s linear;
  transition-property: width, background-color;
  background-color: #f3c623;
  animation: ${progress} 4s linear 1.64s, 15.22s;
`;

