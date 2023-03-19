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

export const Heading = styled(HeadingPrimary)``;

export const BoxColumn = styled.div`
  flex: 1;
`;

export const ProductContainer = styled.div`
  display: flex;
  border: 1px solid;
  padding: 10px;
  flex: 1;
`;

export const ImageContainer = styled.div``;

export const Image = styled.img``;

export const InfoContainer = styled.div``;

export const Title = styled.h6``;

export const RatingContainer = styled(RatingContainerPrimary)``;

export const StartFull = styled(StarFullPrimary)``;
export const StarEmpty = styled(StarEmptyPrimary)``;
export const StarHalf = styled(StarHalfPrimary)``;

export const PriceContainer = styled(PriceContainerPrimary)``;

export const Price = styled(PricePrimary)``;

export const DiscountPrice = styled(DiscountPricePrimary)``;
