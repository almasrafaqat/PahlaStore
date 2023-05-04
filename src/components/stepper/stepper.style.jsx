import styled, { css } from "styled-components";
import { mobile } from "../../responsive";
import { Check, LocalShipping } from "@mui/icons-material";

export const Container = styled.div`
  margin-bottom: 4rem;
`;

export const Row = styled.div`

    width: 100%;
    display: flex;
    gap: 2rem;
  

    /**Media Query */ 
  ${mobile({ flexDirection: "column", gap: "0" })}
`;

export const Column = styled.div`
  flex:1;
  padding: 1rem;
  display: flex;
  justify-content: ${(props) => props.details && "end"};

 /**Media Query */ 
  ${mobile({ justifyContent: "center", padding: "0.2rem" })}
`;

export const ColumnRow = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    gap: 1rem;
    
`

export const OrderDetail = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Heading = styled.h4`
  background-color: ${({ theme }) => theme.colors.lightgray};
  padding: 0.5rem;
  border-radius: 0.3rem;
  margin-bottom: 1rem;
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

  &:nth-last-child(1) {
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
  margin: 0 auto;
 
  
`;

export const CheckIcon = styled(Check)``;

export const OrderConfirmMessage = styled.p`
  text-align: center;
`;




