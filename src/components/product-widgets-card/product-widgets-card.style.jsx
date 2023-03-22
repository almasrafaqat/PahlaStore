import styled from "styled-components";
import {
  BoxPrimary,
  DiscountPricePrimary,
  HeadingPrimary,
  PriceContainerPrimary,
  PricePrimary,
  RatingContainerPrimary,
  StarEmptyPrimary,
  StarFullPrimary,
  StarHalfPrimary,
} from "../../GlobalStyle";
import { Mobile1810 } from "../../responsive";

export const WidgetBox = styled(BoxPrimary)`
  margin-right: 1.3rem;
  flex: 1;
  margin-bottom: 1.7rem;
`;

export const Header = styled.div``;

export const Heading = styled(HeadingPrimary)`
  font-size: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 1.2rem;
  position: relative;

  &::after {
    content: "";
    width: 80px;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const BoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

export const ProductContainer = styled.div`
  padding: 0.3rem 0.6rem 0.3rem 0;
  display: grid;
  /* grid-auto-columns: minmax(15rem, auto); */
  /* grid-template-columns: 20% 70%; */
  grid-template-columns:  minmax(min-content,30%) minmax(min-content,70%);
  grid-column-gap: 1rem;
 

`;

export const ImageContainer = styled.div`
  /* text-align: center; */
  background-color: aliceblue;
  border-radius: 10px;
  width: 150px;
  height: 100px; 
  /* margin: auto; */
  overflow: hidden;
  position: relative;
  
`;

export const Image = styled.img`
  object-fit: contain;
  max-width: 80%;
  max-height: 80%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  /* display: block; */
  

`;

export const InfoContainer = styled.div`
  /* margin-left: 10px; */
  /* grid-column: 2 / -1; */
`;

export const Title = styled.h6`
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1;
  color: #253d4e;
  letter-spacing: 1px;
  padding: 0.3rem;
`;

export const RatingContainer = styled(RatingContainerPrimary)`
  margin-bottom: 1rem;
`;

export const StartFull = styled(StarFullPrimary)`
  font-size: 1.1rem !important;
`;
export const StarEmpty = styled(StarEmptyPrimary)`
  font-size: 1.1rem !important;
`;
export const StarHalf = styled(StarHalfPrimary)`
  font-size: 1.1rem !important;
`;

export const PriceContainer = styled(PriceContainerPrimary)``;

export const Price = styled(PricePrimary)``;

export const DiscountPrice = styled(DiscountPricePrimary)``;
