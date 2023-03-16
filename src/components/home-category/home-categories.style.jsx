import styled from "styled-components";
import { PaddingContainer } from "../../GlobalStyle";

export const Container = styled(PaddingContainer)`

`;

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    gap: 30px;

`;

export const Heading = styled.h1`
    font-size: 32px;
    font-weight: 500;
    letter-spacing: 2px;

`

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    
`;


