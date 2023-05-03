import styled, { css } from "styled-components";
import { mobile } from "../../responsive";
import { Check, LocalShipping } from "@mui/icons-material";

// https://bbbootstrap.com/snippets/bootstrap-ecommerce-order-confirmation-details-template-63222313
export const Container = styled.div`
  margin-bottom: 4rem;
`;

export const Row = styled.div`

    width: 100%;
    margin:0 auto;
    display: flex;


`;

export const Column = styled.div`
  flex:1;
 
  background-color: ${(props) => props.details && "lightgray"};
  
  
`;

export const ColumnRow = styled.div`
  width: 350px;
  /* border: 1px solid black; */
  
`

export const OrderDetail = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Heading = styled.h4`
  background-color: antiquewhite;
`;

export const ShippingIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const ShippingIcon = styled(LocalShipping)``;

export const ShippingText = styled.span``;

export const Bold = styled.strong``;

export const LineBreaker = styled.br``;

export const DeliveryAddress = styled.div``;


export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.gray};

  &:nth-last-child(2) {
    border-bottom: 0;
  }
`;

const FlexItemHeadingCss = css`
  font-weight: 600;
  font-size: 1.08rem;
`;

export const FlexItems = styled.div`
  margin: 1rem 0;

  ${(props) => props.heading && FlexItemHeadingCss}
`;











export const CheckIconContainer = styled.div`

  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: green;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  
`;

export const CheckIcon = styled(Check)``;

export const OrderConfirmMessage = styled.p``;




