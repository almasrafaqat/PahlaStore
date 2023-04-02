import styled from "styled-components";

import { ArrowContainerPrimary, ArrowLeftPrimary, ArrowRightPrimary, ButtonPrimary, MarginBottomContainer } from "../../GlobalStyle"
import { mobile } from "../../responsive";

export const Container = styled(MarginBottomContainer)`
    width: 100%;
    height: 70vh;
    overflow: hidden;
    position: relative;
    display: flex;
`;

export const ArrowContainer = styled(ArrowContainerPrimary)`
   
`;

export const ArrowLeft = styled(ArrowLeftPrimary)``;
export const ArrowRight = styled(ArrowRightPrimary)``;

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

    ${mobile({ padding: "0 0.5rem" })}
   
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

export const Title = styled.h3`
    font-size: 3rem;
    font-weight: 500;
    ${mobile({ fontSize: "1rem" })}
`;

export const Description = styled.p`
    margin: 30px 0;
    font-size: 20px;
    letter-spacing: 1px;

    ${mobile({ display: 'none' })}
`;

export const Button = styled(ButtonPrimary)``;
