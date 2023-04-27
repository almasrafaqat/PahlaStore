import { DiscountOutlined } from "@mui/icons-material";
import styled, { css } from "styled-components";
import { ButtonPrimary } from "../../GlobalStyle";
import { DesktopsLargeScreens, ExtraLargeScreenTV, LaptopsSmallScreen, mobile } from "../../responsive";

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
  overflow: hidden;

 
   /**Media Query */
  ${LaptopsSmallScreen({ fontSize: "0.6rem" })}
 
`;

export const CouponIcon = styled(DiscountOutlined)`
  width: 10px;
  font-size: 1.05rem !important;
  color: ${({ theme }) => theme.colors.primary};

   /* Media Query */
   ${mobile({ fontSize: "0.7rem !important" })}
   ${LaptopsSmallScreen({ fontSize: "0.8rem !important" })}
   ${ExtraLargeScreenTV({ fontSize: "1rem !important" })}
`;

export const CouponInput = styled.input`
  flex: 2;
  font-size: 0.8rem;
  padding-left: 0.8rem;
  outline: none;
  border: none;



   /* Media Query */
   ${mobile({ fontSize: "0.6rem" })}
   ${LaptopsSmallScreen({ fontSize: "0.6rem" })}
   
`;

export const Button = styled(ButtonPrimary)`
  flex: 1;
  font-size: 1rem;
  font-weight: 500;
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  height: 100%;

  &:hover {
    background: ${({theme}) => theme.colors.secondary}
  }


  /**Media Query */
  ${mobile({ fontSize: "0.6rem" })}
  ${LaptopsSmallScreen({ fontSize: "0.6rem" })}
  ${DesktopsLargeScreens({ fontSize: "0.6rem" })}
  ${ExtraLargeScreenTV({ fontSize: "0.8rem" })}
  
`;
