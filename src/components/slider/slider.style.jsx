import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import styled from "styled-components";

import { ButtonPrimary, MarginBottomContainer } from "../../GlobalStyle"

export const Container = styled(MarginBottomContainer)`
    width: 100%;
    height: 70vh;
    overflow: hidden;
    position: relative;
    display: flex;
  
   
`;

export const ArrowContainer = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    top:0;
    bottom:0;
    margin: auto;
    left: ${props => props.direction === 'left' && "20px"};
    right: ${props => props.direction === 'right' && "20px"};
    cursor: pointer;
    opacity: 0.5;
    z-index:2;
`;

export const ArrowLeft = styled(KeyboardArrowLeft)``;
export const ArrowRight = styled(KeyboardArrowRight)``;

export const Wrapper = styled.div`

    height: 100%;
    display: flex;
    transition: all 0.5s ease-in-out;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

export const SlideBox = styled.div`
     display: flex;
     width: 100vw;
     height: 70vh;
    
`;

export const Slide = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props => props.bg};
    padding: 0 50px;
    width: 100%;
   
`;

export const ImageContainer = styled.div`
    flex: 1;
   height: 100%;
   padding: 30px 0;
 
  
    
`;

export const Image = styled.img`
   height: 80%;
   width: 80%;
   object-fit: contain;
  
   
`;

export const InfoContainer = styled.div`
    flex: 1;
`;

export const Title = styled.h1`
    font-size: 50px;
    font-weight: 500;
`;

export const Description = styled.p`
    margin: 30px 0;
    font-size: 20px;
    letter-spacing: 1px;
`;

export const Button = styled(ButtonPrimary)``;
