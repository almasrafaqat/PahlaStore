import styled from "styled-components";
import {
  BoxPrimary,
  ButtonPrimary,
  CartContainerPrimary,
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
import { Delete } from "@mui/icons-material";

export const Container = styled.div``;

export const Wrapper = styled(PaddingContainer)``;

export const Box = styled(BoxPrimary)``;

export const Header = styled.div`
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  width: 300px;
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

export const Bold = styled.b`
  color: ${({ theme }) => theme.colors.primary};
`

export const GridWrapper = styled(GridContainer)`
  grid-template-columns: 1fr 20%;
  grid-gap: 1rem;
  margin-bottom: 3rem; 


  /* Media Query */
  ${mobile({ gridTemplateColumns: "1fr" })}
  ${LaptopsSmallScreen({ gridTemplateColumns: "1fr 25%" })}
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  
`;

export const ProductRow = styled(GridContainer)`
  grid-template-columns: fit-content(150px) 2fr 1fr 50px;
  grid-template-rows: min-content;
  grid-column-gap: 1rem;
  

  /**Media Query */
  ${mobile({ gridTemplateColumns: "1fr" })}
  ${IpadTablets({ gridTemplateColumns: "fit-content(100px) 2fr  10% 7%" })}
  ${LaptopsSmallScreen({ gridTemplateColumns: "fit-content(100px) 2fr  12% 5%" })}
 
 
`;

export const ImageContainer = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 90%;
  height: 90%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 0.8rem;

  ${IpadTablets({ gap: "0.2rem" })}
`;

export const Title = styled(TitlePrimary)`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.lightblack};

  /**Media Query */

  ${IpadTablets({ fontSize: "0.7rem" })}

`;

export const RatingContainer = styled(RatingContainerPrimary)``;

export const FullStar = styled(StarFullPrimary)`
   font-size: 1.1rem !important;

   /**Media Query */
   ${IpadTablets({ fontSize: "0.8rem !important" })}
`;

export const HalfStar = styled(StarHalfPrimary)`
   font-size: 1.1rem !important;

   /**Media Query */
   ${IpadTablets({ fontSize: "0.8rem !important" })}
`;

export const EmptyStar = styled(StarEmptyPrimary)`
   font-size: 1.1rem !important;

   /**Media Query */
   ${IpadTablets({ fontSize: "0.8rem !important" })}
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 0 0.9rem;


  /**Media Query */
  ${mobile({ flexDirection: "row", justifyContent: "space-between" })}
  
  
`;


export const PriceContainer = styled(PriceContainerPrimary)`
  position: relative;
  
  
`;

export const Price = styled(PricePrimary)`
  font-size: ${(props) => props.qty ? "1rem" : "1.3rem"};
  color: ${(props) => props.qty ? (({ theme }) => theme.colors.black) : (({ theme }) => theme.colors.primary)};
 


  /**Media Query */
  ${IpadTablets({ fontSize: "0.7rem" })}
  
`;

export const DiscountPercentage = styled(DiscountPercentagePrimary)`
  top: -5%;
  font-size: 0.8rem;

  /**Media Query */
  ${IpadTablets({ fontSize: "0.6rem !important", top: "0%" })}
`;






export const ColorSizeContainer = styled.div`
  display: flex;
  align-items: center;
  
/**Media Query */
${IpadTablets({ fontSize: "0.7rem !important" })}
`;

export const ColorContainer = styled(ColorContainerPrimary)`
  
`;

export const Color = styled(ColorPrimary)`
  width: 1rem;
  height: 1rem;

  /**Media Query */
  ${IpadTablets({ width: "0.7rem", height: "0.7rem" })}
`;

export const Sizecontainer = styled(SizeContainerPrimary)`
  margin-left: 1.5rem;
`;

export const Size = styled(SizePrimary)`
  width: 1rem;
  height: 1rem;

   /**Media Query */
   ${IpadTablets({ width: "0.2rem", height: "0.2rem" })}
`;


export const RemoveItemContainer = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;

  
   /**Media Query */
   ${IpadTablets({ alignItems: "start", justifyContent: "end" })}
   ${LaptopsSmallScreen({ alignItems: "start", justifyContent: "end" })}
`;

export const RemoveItem = styled(Delete)`
   cursor: pointer;
   color: ${({ theme }) => theme.colors.lightblack};
  
  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
  }

  /**Media Query */
  ${IpadTablets({ fontSize: "1rem !important" })}
  ${LaptopsSmallScreen({ fontSize: "1rem !important" })}
`;

export const HorizontalLine = styled(HorizontalLinePrimary)`
 ${IpadTablets({ marginTop: "2rem" })}

`;






export const CheckoutSummary = styled.div`
  
 height: 380px;
 position: sticky;
 top: 1%;

`;


export const Summary = styled(CartContainerPrimary)`
  ${IpadTablets({ padding: "0.6rem" })}
`;
export const SummaryTitle = styled.h2`
  font-weight: 200;

  /**Media Query */

  ${LaptopsSmallScreen({ fontSize: "1.1rem" })}
  ${IpadTablets({ fontSize: "0.7rem" })}
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  font-size: ${(props) => props.type === "total" && "1.2rem"};
  font-weight: ${(props) => props.type === "total" && "600"};

  ${LaptopsSmallScreen({ fontSize: "0.9rem" })}
  ${IpadTablets({ fontSize: "0.6rem" })}
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled(ButtonPrimary)`
  width: 100%;
  font-size: 1rem;
  font-weight: 600;

  /**Media Query */
  ${LaptopsSmallScreen({ fontSize: "0.7rem" })}
  ${IpadTablets({ fontSize: "0.5rem" })}
 
`


