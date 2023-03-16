import { Rating } from "@mui/material";
import { FlexContainer, HeadingPrimary, MarginBottomContainer, PaddingContainer, TextPrimary } from "../../GlobalStyle";
import styled from "styled-components";


export const Container = styled(MarginBottomContainer)``;

export const Wrapper = styled(PaddingContainer)``;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const Header = styled.div``;

export const Heading = styled(HeadingPrimary)``;


export const ProductContainer = styled(FlexContainer)``;

export const ProductCard = styled.div`
    position: relative;
    /* border: 1px solid; */
    padding: 10px 15px 15px 15px;;
    margin: 5px;
    border-radius: 10px;
    flex: 1 calc(16% - 10px);;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0 6px 15px rgba(0,0,0,0.15);
    height: 450px;
   
    
`;

export const TagContainer = styled.div`
    position: absolute;
    background-color: azure;
    top:0;
    left: 0;
    padding: 10px;
`;

export const Text = styled(TextPrimary)``;

export const ImageContainer = styled.div`
    
    min-height: 70%;
    text-align: center;
    /* border: 1px solid green; */
    border-radius: 10px;
`;

export const Image = styled.img`
    
    height: 100%;

`;

export const InfoContainer = styled.div`
   height: 100%;
   /* border: 1px solid ; */

`;

export const Title = styled.h4``;

export const RatingContainer = styled.div`
    margin: 5px 0;
`;

export const RatingIcon = styled(Rating)``;

export const Brand = styled.div``;

export const AddToCardContainer = styled.div`
    position: absolute;
    width: 100%;
    bottom: 1%;
    padding: 0 10px;
`;


