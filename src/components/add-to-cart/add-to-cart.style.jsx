import { AddShoppingCartOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { ButtonPrimary } from "../../GlobalStyle";
import { Mobile768 } from "../../responsive";

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

    ${Mobile768({ padding: "0.1rem 0.3rem" })}
  }
`;

export const CartIcon = styled(AddShoppingCartOutlined)`
  color: ${({ theme }) => theme.colors.white};

  ${Mobile768({ display: "none !important" })}
`;
export const Button = styled(ButtonPrimary)`
  padding: 0.3rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;

  ${Mobile768({ fontSize: "0.7rem", padding: "0.2rem" })}
`;
