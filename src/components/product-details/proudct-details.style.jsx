import styled from "styled-components";
import {  ColorContainerPrimary, ColorPrimary, DiscountPercentagePrimary, GridContainer, HorizontalLinePrimary, PriceContainerPrimary, PricePrimary, RatingContainerPrimary, SizeContainerPrimary, SizePrimary, StarEmptyPrimary, StarFullPrimary, StarHalfPrimary, TitlePrimary } from "../../GlobalStyle";



export const Container = styled.div``;

export const Wrapper = styled.div``;

export const GridWrapper = styled(GridContainer)`
    grid-template-columns: 10% 35% 40% 15%;
    
`;

export const ImageGallery = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 75px;;
`;

export const MainImage = styled.div`
    max-width: 80%;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
  
    object-fit: contain;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const BrandContainer = styled.div``;

export const Brand = styled.span`
    font-size: 1.2rem;
    color: teal;
`;
;
export const PriceDiscountedContainer = styled.div``;

export const Title = styled(TitlePrimary)`
    font-size: 2.5rem;
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
`;


export const DiscountPercentage = styled(DiscountPercentagePrimary)`

`;

export const Description = styled.p``;

export const ColorContainer = styled(ColorContainerPrimary)`
 

`;

export const Color = styled(ColorPrimary)`
   
`;

export const Sizecontainer = styled(SizeContainerPrimary)``;

export const Size = styled(SizePrimary)``;

export const HorizontalLine = styled(HorizontalLinePrimary)``;

export const CartContentContainer = styled.div``;

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
    color: red;
`;

export const AddToCartContainer = styled.div`
 
 display: flex;
 flex-direction: column;
 gap: 1rem;

`;


export const ShipsFrom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0.7rem 0;
    font-size: 0.8rem;
`;
export const ShipsInfo = styled.p``;











