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
import {
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { ClearSharp, PersonOutlineOutlined } from "@mui/icons-material";
import { DesktopsLargeScreens, IpadTablets, LaptopsSmallScreen, mobile } from "../../responsive";

export const Container = styled(MarginBottomContainer)`
  
`;

export const Wrapper = styled(PaddingContainer)`
  
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
   ${mobile({ gridTemplateColumns: "1fr" })}
  
`;

export const BillingContainer = styled.div`
  
`;

export const SingInCouponContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${mobile({gridTemplateColumns: "1fr"})}
`;

export const AlreadySignInContainer = styled.div`
 
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  padding: 1rem;
  margin-bottom: 3rem;
  margin-right: 1rem;

  /* Media Query */
 
  ${LaptopsSmallScreen({  fontSize: "0.7rem"  })} //max 1024
  ${DesktopsLargeScreens({ fontSize: "0.7rem" })} ///min 1024 max 1200
`;

export const UserIcon = styled(PersonOutlineOutlined)`
  
`;

export const Text = styled(TextPrimary)`

 
/**Media Query*/
 
`;

export const RedirectTo = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;


   /* Media Query */
 
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
 
`;

export const AdditionalText = styled.h4`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

export const InputLable = styled(InputLabel)``;

export const CheckoutContainer = styled.div``;

export const CheckoutTableContainer = styled(TableContainer)`
  background-color: #ececec47;
  border-radius: 0.5rem;
`;

export const CheckoutTable = styled(Table)``;



export const CheckoutTableBody = styled(TableBody)``;

export const CheckoutTableCell = styled(TableCell)`
 
`;

export const CheckoutTableRow = styled(TableRow)``;

export const CheckoutTableHead = styled(TableHead)``;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

export const ImageContainer = styled.div`
  flex-basis: 15%;
  display: flex;
  align-items: center;
  margin-right: 0.4rem;

 /* Media Query */
 
`;

export const Image = styled.img`
  width: 100%;
`;

export const InfoContainer = styled.div`
  flex-basis: 80%;
  
`;

export const Title = styled(TitlePrimary)`
  
  
  /* Media Query */
  ${DesktopsLargeScreens({ fontSize: "0.7rem" })}
`;

export const QtyIcon = styled(ClearSharp)``;

export const Qty = styled.span``;



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
