import styled from "styled-components";
import {
  ColorContainerPrimary,
  ColorPrimary,
  DiscountPercentagePrimary,
  GridContainer,
  HorizontalLinePrimary,
  ImagePrimary,
  ImageWrapperPrimary,
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
import { IpadTablets, mobile } from "../../responsive";

export const Container = styled.div`
  
`;

export const Wrapper = styled.div`
  padding: 0 2rem;
 
  ${IpadTablets({ padding: "0 1rem" })}
`;

export const GridWrapper = styled(GridContainer)`
  /* grid-template-columns: 2fr 2fr 1fr; */
  
  /* overflow: hidden; */
  grid-template-columns: repeat(2, 2fr) 1fr;
  grid-gap: 1rem;
  

  /* Media Query */
    ${mobile({ gridTemplateColumns: "1fr" })}
    ${IpadTablets({ gridTemplateColumns: "35% 30% 28%", overflow: "hidden" })};
   
`;

export const ImagesContainer = styled.div`
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 600px;
    position: sticky;
    top: 1%;

    /* Media Query */
    ${IpadTablets({ flexDirection: "column-reverse", height: "300px" })};
    
    
`;

export const ImagesGalleryContainer = styled.div`
    
    display: flex;
    flex-direction: column;

   /* Media Query */
   ${IpadTablets({ flexDirection: "row", justifyContent: "space-around"})}
  
`;

export const ImageGalleryWrapper = styled(ImageWrapperPrimary)`
 
  margin: 0.2rem;
  cursor: pointer;
  height: 50px;
  width: 50px;
  
`;

export const ImageGallery = styled(ImagePrimary)`
  
`;



export const MainImage = styled(ImageWrapperPrimary)`
  width: 95%;
  height: 600px;
  margin: 0.2rem;
  cursor: pointer;
 
`;

export const Image = styled(ImagePrimary)`
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}%;
  object-fit: contain;
`;



export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.8rem;
  
  ${IpadTablets({ gap: "0.5rem" })}
`;

export const BrandContainer = styled.div`
  ${IpadTablets({ fontSize: "0.6rem" })}
`;

export const Brand = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  ${IpadTablets({ fontSize: "0.7rem" })}
`;
export const PriceDiscountedContainer = styled.div``;

export const Title = styled(TitlePrimary)`
  font-size: 2.5rem;
  ${IpadTablets({ fontSize: "1rem" })}
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
  ${IpadTablets({ fontSize: "1.5rem" })}
`;

export const DiscountPercentage = styled(DiscountPercentagePrimary)``;

export const Description = styled.p`
  ${IpadTablets({ fontSize: "0.6rem" })}
`;

export const ColorContainer = styled(ColorContainerPrimary)``;

export const Color = styled(ColorPrimary)``;

export const Sizecontainer = styled(SizeContainerPrimary)``;

export const Size = styled(SizePrimary)``;

export const HorizontalLine = styled(HorizontalLinePrimary)``;

export const AboutProduct = styled.div``;
export const Heading = styled.h1`
  font-size: 1.6rem;

  ${IpadTablets({ fontSize: "0.8rem" })}
`;
export const OrderList = styled.ul`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;

  ${IpadTablets({ padding: "0.4rem" })}
`;
export const ListItem = styled.li`
  margin-bottom: 0.3rem;
  padding: 0 0.2rem;
  width: 50%;
  font-size: 0.9rem;
  ${IpadTablets({ width: "100%", fontSize: "0.6rem" })}
`;

export const CartContentContainer = styled.div`
  ${IpadTablets({ fontSize: "0.7rem" })}
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

  ${IpadTablets({ fontSize: "0.5rem" })}
`;
export const ShipsInfo = styled.p``;
