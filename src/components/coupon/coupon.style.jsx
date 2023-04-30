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

const FocusBorder = css`
 
  border : 1px solid ${({ theme }) => theme.colors.secondary};

`;

export const CouponContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding-left: 0.5rem;
  height: ${(props) => props.height ? props.height : "100%"};
  width: ${(props) => props.width ? props.width : "100%"};
  ${(props) => props.shadow ? BoxShadowCss : BorderCss};
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;


  &:focus-within {
    ${FocusBorder}
}


`;


export const CouponInputContainer = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  
`;

export const CouponIcon = styled(DiscountOutlined)`
  width: 10px;
  font-size: 1.05rem !important;
  color: ${({ theme }) => theme.colors.gray};

   /* Media Query */
   ${mobile({ fontSize: "0.7rem !important" })}
   ${LaptopsSmallScreen({ fontSize: "0.8rem !important" })}
   ${DesktopsLargeScreens({ fontSize: "0.8rem !important" })}
   ${ExtraLargeScreenTV({ fontSize: "1rem !important" })}
`;




export const CouponInput = styled.input`
  
  font-size: 0.7rem;
  padding-left: 0.5rem;
  outline: none;
  border: none;



   /* Media Query */
   ${mobile({ fontSize: "0.6rem" })}
   ${LaptopsSmallScreen({ fontSize: "0.4rem" })}
   ${DesktopsLargeScreens({ fontSize: "0.5rem" })}
   



   
`;








export const Button = styled(ButtonPrimary)`
  width: 34%;
  font-size: 1rem;
  font-weight: 500;
  border-top-right-radius: 0.1rem;
  border-bottom-right-radius: 0.1rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondary}
  }


  /**Media Query */
  ${mobile({ fontSize: "0.6rem" })}
  ${LaptopsSmallScreen({ fontSize: "0.6rem" })}
  ${DesktopsLargeScreens({ fontSize: "0.6rem" })}
  ${ExtraLargeScreenTV({ fontSize: "0.8rem" })}
  
`;
