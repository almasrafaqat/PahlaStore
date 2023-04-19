import styled from "styled-components";
import {
  BoxPrimary,
  ColorContainerPrimary,
  ColorPrimary,
  DiscountPercentagePrimary,
  GridContainer,
  HeadingPrimary,
  HorizontalLinePrimary,
  PaddingContainer,
  PriceContainerPrimary,
  PricePrimary,
  RatingContainerPrimary,
  SizeContainerPrimary,
  SizePrimary,
  StarEmptyPrimary,
  StarFullPrimary,
  StarHalfPrimary,
  TextPrimary,
  TitlePrimary,
} from "../../GlobalStyle";
import { IpadTablets, LaptopsSmallScreen, mobile } from "../../responsive";

export const Container = styled.div``;

export const Wrapper = styled(PaddingContainer)``;

export const Box = styled(BoxPrimary)``;

export const Header = styled.div`
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 1.2rem;

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

export const Heading = styled(HeadingPrimary)`
  margin-bottom: 0.5rem;
`;

export const Text = styled(TextPrimary)``;

export const GridWrapper = styled(GridContainer)`
  grid-template-columns: 2fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 3rem;
  /* Media Query */
  ${mobile({ gridTemplateColumns: "1fr" })}
`;

export const ProductRow = styled(GridContainer)`
  grid-template-columns: fit-content(150px) 2fr 1fr;
  grid-column-gap: 1rem;
`;

export const ImageContainer = styled.div``;

export const Image = styled.img``;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.8rem;

  ${IpadTablets({ gap: "0.5rem" })}
`;

export const Title = styled(TitlePrimary)`
  font-size: 1rem;

  /**Media Query **/
  ${IpadTablets({ fontSize: "1rem" })}
  ${LaptopsSmallScreen({ fontSize: "1.5rem" })}
  ${mobile({ fontSize: "1.5rem" })}
`;

export const RatingContainer = styled(RatingContainerPrimary)``;

export const FullStar = styled(StarFullPrimary)``;

export const HalfStar = styled(StarHalfPrimary)``;

export const EmptyStar = styled(StarEmptyPrimary)``;

export const ColorContainer = styled(ColorContainerPrimary)``;

export const Color = styled(ColorPrimary)``;

export const Sizecontainer = styled(SizeContainerPrimary)``;

export const Size = styled(SizePrimary)``;

export const HorizontalLine = styled(HorizontalLinePrimary)``;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PriceContainer = styled(PriceContainerPrimary)`
  position: relative;
`;

export const Price = styled(PricePrimary)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.primary};
  ${IpadTablets({ fontSize: "1rem" })}
`;

export const DiscountPercentage = styled(DiscountPercentagePrimary)`
  top: -5%;
`;

export const CheckoutSummary = styled.div``;


export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
export const SummaryTitle = styled.h1`
  font-weight: 200;
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  font-size: ${(props) => props.type === "total" && "24px"};
  font-weight: ${(props) => props.type === "total" && "500"};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.white};;
  padding: 10px;
  cursor: pointer;
  font-weight: 600;
  border: none;
`;
