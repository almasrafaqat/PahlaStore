import { Add, Minimize, Remove } from "@mui/icons-material";
import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
   
`;



export const MinusIcon = styled(Remove)`
    cursor: pointer;
`;

export const Amount = styled.span`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid teal;
    margin: 0px 5px;
`;


export const PlusIcon = styled(Add)`
    cursor: pointer;
`;