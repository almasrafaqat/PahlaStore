import { AddShoppingCartOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { ButtonPrimary } from "../../GlobalStyle";
import { IpadTablets, mobile } from "../../responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.6rem;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  background-color: ${(props) => props.bgColor};
  padding: 0.3rem 0.6rem;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  width: ${(props) => props.width}%;
  justify-content: ${(props) => props.content};
  border-radius: ${(props) => props.radius}rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    ${IpadTablets({ padding: "0.1rem 0.3rem" })}
  }
`;

export const CartIcon = styled(AddShoppingCartOutlined)`
  color: ${({ theme }) => theme.colors.white};

  ${IpadTablets({ visibility: "hidden !important", display: "none !important" })}
  ${mobile({ visibility: "visible !important" })};
`;
export const Button = styled(ButtonPrimary)`
  padding: 0.3rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;

  ${IpadTablets({ fontSize: "0.7rem", padding: "0.2rem" })}
`;
