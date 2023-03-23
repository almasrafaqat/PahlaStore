import styled from "styled-components";
import { FlexContainer, GridContainer, MarginBottomContainer, PaddingContainer } from "../../GlobalStyle";


export const Container = styled(MarginBottomContainer)``;

export const Wrapper = styled(PaddingContainer)``;


export const FlexBox = styled(GridContainer)`
   
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;



