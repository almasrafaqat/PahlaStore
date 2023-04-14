import styled from "styled-components";
import { ImagePrimary, ImageWrapperPrimary } from "../../GlobalStyle";
import { DesktopsLargeScreens, ExtraLargeScreenTV, IpadTablets, LaptopsSmallScreen, mobile } from "../../responsive";

export const Container = styled.div`
    margin-top: 1rem;
    

`;

export const Wrapper = styled.div`
    
`;

export const Sponsored = styled.h6`
    font-weight: 600;
    margin-bottom: 0.2rem;
    
`;

export const ImageBanner = styled(ImageWrapperPrimary)`
    width: 100%;
    height: 150px;
    background-color: #fff;

    /**Media Query */

    ${mobile({ height: "150px" })}
    ${IpadTablets({ height: "100px" })}
    ${ExtraLargeScreenTV({ height: "200px" })}
    
    
    
`;

export const ImagePromo = styled(ImagePrimary)`
  
  object-fit: unset;


   
`;

