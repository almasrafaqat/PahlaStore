import { DiscountOutlined } from "@mui/icons-material";
import styled, { css } from "styled-components";
import { ButtonPrimary } from "../../GlobalStyle";
import { DesktopsLargeScreens, LaptopsSmallScreen, mobile } from "../../responsive";

const BoxShadowCss = css`
  box-shadow: ${({ theme }) => theme.colors.shadow};
`;
const BorderCss = css`
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const CouponContainer = styled.div`

  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  ${(props) => props.shadow && BoxShadowCss};
  ${(props) => props.border && BorderCss};
  border-radius: 0.3rem;
  padding-left: 0.5rem;
  height: 3.5rem;
  margin-bottom: 3rem;

 
   /**Media Query */
  ${LaptopsSmallScreen({ fontSize: "0.6rem", height: "2.5rem" })}
 
`;

export const CouponIcon = styled(DiscountOutlined)`
  flex-basis: content;
  font-size: 1.05rem !important;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CouponInput = styled.input`
  padding-left: 0.8rem;
  outline: none;
  border: none;
  flex-basis: 70%;
   /* Media Query */
 
   ${LaptopsSmallScreen({ fontSize: "0.7rem" })}
`;

export const Button = styled(ButtonPrimary)`
  flex-basis: 30%;
  font-size: 1rem;
  font-weight: 500;
  height: 3.5rem;
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;


  /**Media Query */
  ${mobile({ fontSize: "1rem" })}
  ${LaptopsSmallScreen({ fontSize: "0.6rem", height: "2.5rem", flexBasis: "40%" })}
  ${DesktopsLargeScreens({ fontSize: "0.7rem", flexBasis: "40%" })}
  
`;
