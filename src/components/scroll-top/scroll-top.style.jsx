import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  position: fixed;
  right: 3%;
  bottom: 3%;
  z-index: 99;
`;

export const Wrapper = styled.div`
  background-color: ${({theme}) => theme.colors.primary};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;

  &:hover {
    background: ${({theme}) => theme.colors.secondary}
  }
  ${mobile({width: "2rem", height: "2rem"})}
`;
