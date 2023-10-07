import {
  BoxPrimary,
  GridContainer,
  HeadingPrimary,
  MarginBottomContainer,
  PaddingContainer,
} from "../../GlobalStyle";
import styled from "styled-components";

export const Container = styled(MarginBottomContainer)``;

export const Wrapper = styled(PaddingContainer)``;

export const Box = styled(BoxPrimary)``;

export const Header = styled.div``;

export const Heading = styled(HeadingPrimary)``;

export const ProductContainer = styled(GridContainer)`
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  
`;
