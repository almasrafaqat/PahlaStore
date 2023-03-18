import styled from "styled-components";
import { MarginBottomContainer, PaddingContainer } from "../../GlobalStyle";


export const Container = styled(MarginBottomContainer)`
    display: grid;
    grid-auto-columns: minmax(15rem, auto);
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-gap: 1rem;
    padding:0 30px;
`;

export const Item = styled.div`
    border: 1px solid black;
    padding: 2rem;
    font-size: 2rem;
     
`;

