import styled from "styled-components";
import { Mobile768 } from "../../responsive";

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

  ${Mobile768({ marginBottom: "0px" })};
`;
