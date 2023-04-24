import { Add,  Remove } from "@mui/icons-material";
import styled from "styled-components";
import { IpadTablets } from "../../responsive";


export const Container = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;

    
   
`;



export const MinusIcon = styled(Remove)`
    cursor: pointer;

    ${IpadTablets({ fontSize: "1rem !important" })}
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

    ${IpadTablets({ width: "1.8rem" , height: "1.8rem", fontSize: "0.7rem" })}
`;


export const PlusIcon = styled(Add)`
    cursor: pointer;

    ${IpadTablets({ fontSize: "1rem !important" })}
`;