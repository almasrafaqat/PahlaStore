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
  display: grid;
  grid-template-columns: 25% 75%;
  grid-column-gap: 1.3rem;
  
`;

export const ImageContainer = styled.div`
  text-align: center;
  background-color: aliceblue;
  border-radius: 15px;
  width: 120px;
  height: 120px;
  
`;

export const Image = styled.img`
 object-fit: contain;
 width: 90%;
 height: 90%;
 margin: auto 0;
 
`;

export const InfoContainer = styled.div`
 
`;

export const Title = styled.h6`
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1;
  color: #253d4e;
  letter-spacing: 1px;
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
