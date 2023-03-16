
import {
  FlexContainer,
  HeadingPrimary,
  MarginBottomContainer,
  PaddingContainer,
  
} from "../../GlobalStyle";
import styled from "styled-components";

export const Container = styled(MarginBottomContainer)``;

export const Wrapper = styled(PaddingContainer)``;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Header = styled.div``;

export const Heading = styled(HeadingPrimary)``;

export const ProductContainer = styled(FlexContainer)`
  margin: 0 auto;
`;


