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

export const Box = styled(BoxPrimary)``;

export const Header = styled.div``;

export const Heading = styled(HeadingPrimary)`
  font-size: 24px;
  border-bottom: 1px solid;
  padding-bottom: 20px;
`;

export const BoxColumn = styled.div`
  flex: 1;
`;

export const ProductContainer = styled.div`
  display: flex;
  //   border: 1px solid;
  padding: 10px;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
`;

export const ImageContainer = styled.div`
  flex: 1;
`;

export const Image = styled.img``;

export const InfoContainer = styled.div`
  flex: 2;
`;

export const Title = styled.h6`
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  color: #253d4e;
  letter-spacing: 1px;
`;

export const RatingContainer = styled(RatingContainerPrimary)``;

export const StartFull = styled(StarFullPrimary)``;
export const StarEmpty = styled(StarEmptyPrimary)``;
export const StarHalf = styled(StarHalfPrimary)``;

export const PriceContainer = styled(PriceContainerPrimary)``;

export const Price = styled(PricePrimary)``;

export const DiscountPrice = styled(DiscountPricePrimary)``;
