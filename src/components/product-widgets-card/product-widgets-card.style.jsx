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

export const WidgetBox = styled(BoxPrimary)`

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

export const BoxColumn = styled(BoxPrimary)`
  gap: 1rem;
`;

export const ProductContainer = styled.div`
  padding: 0.3rem 0.6rem 0.3rem 0;
  display: grid;
  grid-template-columns: fit-content(150px) 1fr;
  grid-column-gap: 1rem;
  transition: ${({ theme }) => theme.colors.cardtransition};

  &:hover {
    transform:  ${({ theme }) => theme.colors.cardhover}; 
  }

`;

export const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightgray};
  border-radius: 10px;
  width: 150px;
  height: 100px; 
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
`;

export const InfoContainer = styled.div`
 
`;

export const Title = styled.h6`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  color:  ${({ theme }) => theme.colors.black};
  letter-spacing: 1px;
  padding: 0.3rem;
`;

export const RatingContainer = styled(RatingContainerPrimary)`
  margin-bottom: 0.3rem;
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

export const PriceContainer = styled(PriceContainerPrimary)`
  
`;

export const Price = styled(PricePrimary)`
font-size: 1.05rem;
`;

export const DiscountPrice = styled(DiscountPricePrimary)`
  font-size: 0.9rem;
`;
