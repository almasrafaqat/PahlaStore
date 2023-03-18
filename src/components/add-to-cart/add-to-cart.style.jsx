import { AddShoppingCartOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { ButtonPrimary, TextPrimary } from "../../GlobalStyle";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.6rem;
`;

export const PriceContainer = styled.div``;

export const Price = styled(TextPrimary)`
  font-size: 1.3rem;
  font-weight: bold;
  margin-right: 0.6rem;
`;

export const DiscountPrice = styled(Price)`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: line-through;
`;

export const ButtonContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};;
  padding: 0.3rem 0.6rem;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;

  &:hover{
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const CartIcon = styled(AddShoppingCartOutlined)`
  color: ${({ theme }) => theme.colors.white};;
`;
export const Button = styled(ButtonPrimary)`
  padding: 0.3rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;

 
`;
