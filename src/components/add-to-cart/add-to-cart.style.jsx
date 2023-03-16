import { ShoppingBasket } from "@mui/icons-material";
import styled from "styled-components";
import { ButtonPrimary, TextPrimary } from "../../GlobalStyle";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PriceContainer = styled.div``;

export const Price = styled(TextPrimary)`
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
`;

export const DiscountPrice = styled(Price)`
  font-size: 16px;
  color: #adadad;
  text-decoration: line-through;
`;

export const ButtonContainer = styled.div`
  background-color: lightskyblue;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin: 0 10px;
  /* justify-content: space-between; */
`;

export const CartIcon = styled(ShoppingBasket)`
  color: teal;
`;
export const Button = styled(ButtonPrimary)`
  padding: 5px;
  background-color: transparent;
  color: teal;
  font-size: 14px;
`;
