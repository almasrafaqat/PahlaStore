import { AddShoppingCartOutlined } from "@mui/icons-material";
import styled from "styled-components";
import {
  ButtonPrimary,
} from "../../GlobalStyle";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.6rem;
  cursor: pointer;
`;



export const ButtonContainer = styled.div`
  background-color: ${(props) => props.color};
  padding: 0.3rem 0.6rem;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;

  width: ${(props) => props.width}%;
  justify-content: ${(props) => props.content};
  border-radius: ${(props) => props.radius}rem;
  

  &:hover {
  background-color: ${ ({ theme }) => theme.colors.secondary };
 
}
`;

export const CartIcon = styled(AddShoppingCartOutlined)`
color: ${ ({ theme }) => theme.colors.white };;
`;
export const Button = styled(ButtonPrimary)`
padding: 0.3rem;
background-color: transparent;
color: ${ ({ theme }) => theme.colors.white };
font-size: 1rem;

`;
