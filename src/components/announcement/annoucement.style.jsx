import styled from "styled-components";
import { IpadTablets, mobile } from "../../responsive";

export const Container = styled.div`
  height: 40px;
  background-color: ${({theme}) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => theme.colors.white};;
  font-weight: 500;
  margin-bottom: 30px;

  ${mobile({ marginBottom: "0px" })};
  ${IpadTablets({ marginBottom: "0px" })};
`;
