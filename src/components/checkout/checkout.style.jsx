import styled, { css } from "styled-components";

import {
  BoxPrimary,
  GridContainer,
  HeadingPrimary,
  Link,
  MarginBottomContainer,
  PaddingContainer,
  TextPrimary,
  TitlePrimary,
} from "../../GlobalStyle";


import { ClearSharp, PersonOutlineOutlined } from "@mui/icons-material";
import { DesktopsLargeScreens, IpadTablets, LaptopsSmallScreen, mobile } from "../../responsive";

export const Container = styled(MarginBottomContainer)`
  
`;

export const Wrapper = styled(PaddingContainer)`
  width: 95%;
  margin:0 auto;

  ${LaptopsSmallScreen({ width: "100%" })}
`;

export const Box = styled(BoxPrimary)``;

export const Header = styled.div`
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  width: 300px;
  padding-bottom: 1.2rem;

  &::after {
    content: "";
    width: 80px;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  ${mobile({ width: "99%" })}
`;

const billingHeadingCss = css`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

export const Heading = styled(HeadingPrimary)`
  ${({ billing }) => billing && billingHeadingCss};
`;

export const GridWrapper = styled(GridContainer)`
  grid-template-columns:  2fr 35%;
  box-sizing: border-box;
  gap: 4rem;

   /* Media Query */
   ${mobile({ gridTemplateColumns: "1fr", gap: "1.5rem" })}
   ${IpadTablets({ gridTemplateColumns: "1fr 1fr" })}
  
`;

export const BillingContainer = styled.div`
  
`;

export const SingInCouponContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3.25rem;
  grid-auto-rows: 2.5rem;
  grid-gap: 1rem;
  margin-bottom: 4rem;
 

/**Media  */
  ${mobile({ gridTemplateColumns: "1fr", gridGap: "1.5rem", marginBottom: "2.2rem", gridTemplateRows: "2.5rem" })}
`;

export const AlreadySignInContainer = styled.div`
 
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 0.3rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 0 1rem;
 


  /* Media Query */
  ${mobile({ fontSize: "0.7rem" })}
  ${IpadTablets({ fontSize: "0.4rem" })}
  ${LaptopsSmallScreen({ fontSize: "0.7rem" })} //max 1024
  ${DesktopsLargeScreens({ fontSize: "0.7rem" })} ///min 1024 max 1200
  
`;

export const UserIcon = styled(PersonOutlineOutlined)`

  /**Media Query */
  ${mobile({ fontSize: "1.1rem !important" })}
  ${IpadTablets({ fontSize: "0.8rem !important" })}
  ${LaptopsSmallScreen({ fontSize: "0.9rem !important" })} //max 1024
`;

export const Text = styled(TextPrimary)`

 margin: 0 0.1rem;

/**Media Query*/
 
`;

export const RedirectTo = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;


   /* Media Query */
   ${mobile({ fontSize: "0.7rem" })}
   ${IpadTablets({ fontSize: "0.5rem" })}
   ${LaptopsSmallScreen({ fontSize: "0.5rem" })}
   ${DesktopsLargeScreens({ fontSize: "0.6rem" })}
  
`;

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
 

`;

export const TextContainer = styled.div`
  flex-basis: ${(props) => props.textarea ? "calc(100% - 1rem)" : "calc(50% - 1rem)"};
  margin-left: 1rem;

  

`;

export const CountryContainer = styled(TextContainer)`
  margin-top: 20px;



  /**Media */

  ${mobile({ height: "1rem" })}
 
`;

export const AdditionalText = styled.h4`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;



export const CheckoutContainer = styled.div`
   
`;

export const CheckoutTableContainer = styled.div`
  
`;

export const CheckoutTable = styled.div``;



export const CheckoutTableBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CheckoutTableCell = styled.div`

  /* Media Query */
  ${mobile({ fontSize: "0.6rem" })}
  ${LaptopsSmallScreen({ fontSize: "0.5rem" })}
  ${DesktopsLargeScreens({ fontSize: "0.7rem" })}
`;

export const CheckoutTableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 0.4rem;

  &:nth-last-child(1) {
    border-bottom: 0;
  }
`;

export const CheckoutTableHead = styled.div`
  font-weight: 600;
`;

export const ProductContainer = styled.div`
 
 display: grid;
 grid-template-columns: fit-content(150px) 1fr;
 grid-gap: 1rem;

  
`;

export const ImageContainer = styled.div`
 background-color: ${({ theme }) => theme.colors.lightgray};
  border-radius: 10px;
  width: 75px;
  height: 75px; 
  overflow: hidden;
  position: relative;

 /* Media Query */

 ${LaptopsSmallScreen({ height: "2.5rem" })}
 
`;

export const Image = styled.img`
object-fit: contain;
  max-width: 80%;
  max-height: 80%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export const InfoContainer = styled.div`

 

  
`;

export const Title = styled(TitlePrimary)`
  
  
  font-weight: 700;
  line-height: 1;
  color:  ${({ theme }) => theme.colors.black};
  letter-spacing: 1px;
  padding: 0.3rem;
  
  /* Media Query */
  ${mobile({ fontSize: "0.6rem" })}
  ${LaptopsSmallScreen({ fontSize: "0.5rem" })}
  ${DesktopsLargeScreens({ fontSize: "0.7rem" })}
`;

export const QtyIcon = styled(ClearSharp)`
  /* Media Query */
  ${mobile({ fontSize: "0.6rem !important" })}
  ${LaptopsSmallScreen({ fontSize: "0.5rem !important" })}
  ${DesktopsLargeScreens({ fontSize: "0.7rem !important" })}
`;

export const Qty = styled.span`
  /* Media Query */
  ${mobile({ fontSize: "0.6rem" })}
  ${LaptopsSmallScreen({ fontSize: "0.5rem" })}
  ${DesktopsLargeScreens({ fontSize: "0.7rem" })}
`;



export const PaymentOptionsContainer = styled.div`
  margin: 2rem 0;
 
`;

export const WrapperFlex = styled.div`
  margin: 1rem 0;
`;

export const OptionText = styled.span`
  margin-left: 1rem;
`;

export const CashOnDeliveryNote = styled.p`
  
  max-height: 0;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  font-style: italic;
  letter-spacing: 0.1rem;
  line-height: 1.8;
  color: #6c757d;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  
`;

export const CreditCardNote = styled(CashOnDeliveryNote)``;

const radioInfo = css`
  max-height: 60px; 
  padding: 0.5rem;
`;

export const CashOnDelivery = styled.input`
  width: 1rem;
  height: 1rem;

  &:checked ~ ${CashOnDeliveryNote} {
    ${radioInfo}
  }

 
`;

export const CreditCard = styled.input`
  width: 1rem;
  height: 1rem;

  &:checked ~ ${CreditCardNote} {
    ${radioInfo}
  }

  
`;
