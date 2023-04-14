import styled from "styled-components";
import { BoxPrimary, GridContainer, HeadingPrimary, MarginBottomContainer, PaddingContainer } from "../../GlobalStyle";



export const Container = styled(MarginBottomContainer)`
    margin-top: 5rem;
`;

export const Wrapper = styled(PaddingContainer)``;

export const Heading = styled(HeadingPrimary)`
    font-size: 1.2rem;
    letter-spacing: 0;
`;

export const Box = styled(BoxPrimary)``

export const Row = styled(GridContainer)`
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-gap: 0.3rem;

`;

