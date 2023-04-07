import styled from "styled-components";
import { ColorContainerPrimary, ColorPrimary, DiscountPercentagePrimary,  GridContainer, PriceContainerPrimary, PricePrimary, RatingContainerPrimary, SizeContainerPrimary, SizePrimary, StarEmptyPrimary, StarFullPrimary, StarHalfPrimary, TitlePrimary } from "../../GlobalStyle";


export const Container = styled.div``;

export const Wrapper = styled.div``;

export const GridWrapper = styled(GridContainer)`
    grid-template-columns: 150px 2fr 2fr;
`;

export const ImageGallery = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 75px;;
`;

export const MainImage = styled.div`
    width: 500px;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

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
    color: ${({theme}) => theme.colors.primary};
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

export const AddToCartContainer = styled.div`
    width: 50%;
`;








