import { DiscountOutlined } from "@mui/icons-material";
import styled, { css } from "styled-components";
import { ButtonPrimary } from "../../GlobalStyle";
import { DesktopsLargeScreens, ExtraLargeScreenTV, IpadTablets, LaptopsSmallScreen, mobile } from "../../responsive";

const BoxShadowCss = css`
  box-shadow: ${({ theme }) => theme.colors.shadow};
`;
const BorderCss = css`
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;



export const CouponContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding-left: 0.5rem;
  
  height: ${(props) => props.height ? props.height : "100%"};
  width: ${(props) => props.width ? props.width : "100%"};
  background-color: aquamarine;
  display: flex;
  align-items: center;
  justify-content: space-evenly;


   /**Media Query */
  ${LaptopsSmallScreen({ fontSize: "0.6rem" })}
  ${IpadTablets({ fontSize: "0.2rem" })}

 
`;

export const CouponInputContainer = styled.div`
  flex-basis: 66%;
  height: 100%;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  ${(props) => props.shadow ? BoxShadowCss : BorderCss};
  border-right: 0;
  padding-left: 0.8rem;
`;


export const CouponIcon = styled(DiscountOutlined)`
  width: 10px;
  font-size: 1.05rem !important;
  color: ${({ theme }) => theme.colors.gray};

   /* Media Query */
   ${mobile({ fontSize: "0.7rem !important" })}
   ${LaptopsSmallScreen({ fontSize: "0.8rem !important" })}
   ${ExtraLargeScreenTV({ fontSize: "1rem !important" })}
`;



export const CouponInput = styled.input`
  
  font-size: 0.8rem;
  padding-left: 0.5rem;
  outline: none;
  border: none;
 


   /* Media Query */
   ${mobile({ fontSize: "0.6rem" })}
   ${LaptopsSmallScreen({ fontSize: "0.6rem" })}
   
`;

export const Button = styled(ButtonPrimary)`
  flex-basis: 34%;
  font-size: 1rem;
  font-weight: 500;
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  height: 100%;
  margin-left: -10%;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary}
  }


  /**Media Query */
  ${mobile({ fontSize: "0.6rem" })}
  ${LaptopsSmallScreen({ fontSize: "0.6rem" })}
  ${DesktopsLargeScreens({ fontSize: "0.6rem" })}
  ${ExtraLargeScreenTV({ fontSize: "0.8rem" })}
  
`;
