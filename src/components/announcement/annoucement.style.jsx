import styled from "styled-components";
import { IpadTablets } from "../../responsive";

export const Container = styled.div`
  height: 30px;
  background-color: ${({theme}) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 50px;

  ${IpadTablets({ marginBottom: "0px" })};
`;
