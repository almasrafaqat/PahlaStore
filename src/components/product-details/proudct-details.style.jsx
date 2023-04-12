import styled from "styled-components";
import {
  ColorContainerPrimary,
  ColorPrimary,
  DiscountPercentagePrimary,
  GridContainer,
  HorizontalLinePrimary,
  PriceContainerPrimary,
  PricePrimary,
  RatingContainerPrimary,
  SizeContainerPrimary,
  SizePrimary,
  StarEmptyPrimary,
  StarFullPrimary,
  StarHalfPrimary,
  TitlePrimary,
} from "../../GlobalStyle";
import { Mobile768 } from "../../responsive";

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 0 3rem;
  ${Mobile768({ padding: "0 1rem" })}
`;

export const GridWrapper = styled(GridContainer)`
  grid-template-columns: 2fr 2fr 1fr;
  // grid-template-columns: 100px repeat(auto-fill, minmax(25rem,1fr));

  ${Mobile768({ gridTemplateColumns: "1fr 1fr 1fr" })}
`;

export const ImagesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid;
`;

export const ImageGallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 75px;
  height: 50dvh;
  padding: 0 0.3rem;
  margin-top: 2rem;
  border: 1px solid;
`;

export const MainImage = styled.div`
  max-width: 100%;
 
  padding: 0 2rem;
  overflow: hidden;
  background-color: #ececec6e;
  border-radius: 0.9rem;
  height: 70dvh;

`;

export const Image = styled.img`
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}%;
  object-fit: contain;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem 0 0rem;
  ${Mobile768({ gap: "0.5rem" })}
`;

export const BrandContainer = styled.div`
  ${Mobile768({ fontSize: "0.6rem" })}
`;

export const Brand = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  ${Mobile768({ fontSize: "0.7rem" })}
`;
export const PriceDiscountedContainer = styled.div``;

export const Title = styled(TitlePrimary)`
  font-size: 2.5rem;
  ${Mobile768({ fontSize: "1rem" })}
`;

export const RatingContainer = styled(RatingContainerPrimary)``;

export const FullStar = styled(StarFullPrimary)``;

export const HalfStar = styled(StarHalfPrimary)``;

export const EmptyStar = styled(StarEmptyPrimary)``;

export const PriceContainer = styled(PriceContainerPrimary)`
  position: relative;
`;

export const Price = styled(PricePrimary)`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  ${Mobile768({ fontSize: "1.5rem" })}
`;

export const DiscountPercentage = styled(DiscountPercentagePrimary)``;

export const Description = styled.p`
  ${Mobile768({ fontSize: "0.6rem" })}
`;

export const ColorContainer = styled(ColorContainerPrimary)``;

export const Color = styled(ColorPrimary)``;

export const Sizecontainer = styled(SizeContainerPrimary)``;

export const Size = styled(SizePrimary)``;

export const HorizontalLine = styled(HorizontalLinePrimary)``;

export const AboutProduct = styled.div``;
export const Heading = styled.h1`
  font-size: 1.6rem;

  ${Mobile768({ fontSize: "0.8rem" })}
`;
export const OrderList = styled.ul`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;

  ${Mobile768({ padding: "0.4rem" })}
`;
export const ListItem = styled.li`
  margin-bottom: 0.3rem;
  padding: 0 0.2rem;
  width: 50%;
  font-size: 0.9rem;
  ${Mobile768({ width: "100%", fontSize: "0.6rem" })}
`;

export const CartContentContainer = styled.div`
  ${Mobile768({ fontSize: "0.7rem" })}
`;

export const CartContent = styled.div`
  border: 1px solid teal;
  padding: 0.9rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const DeliveryInfo = styled.p``;
export const ReturnInfo = styled.p``;
export const StockInfo = styled.p`
  color: ${({ theme }) => theme.colors.red};
`;

export const AddToCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  re
`;

export const ShipsFrom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0.7rem 0;
  font-size: 0.8rem;

  ${Mobile768({ fontSize : "0.5rem" })}
`;
export const ShipsInfo = styled.p``;
