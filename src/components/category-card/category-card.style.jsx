import styled from "styled-components";

export const Title = styled.h6`
    font-size: 16px;
`;


export const CategoryContainer = styled.div`
    
    flex: 1 1 auto;
    background: ${props => props.bg};
    border-radius: 10px;
    padding: 20px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid teal;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    transform: scale(1);
    box-shadow: 0 6px 15px rgba(0,0,0,0.2);

    &:hover {
        transform: scale(1.04);
        box-shadow: 0 6px 15px rgba(0,0,0,0.15);
    }
  
`;

export const ImageContainer = styled.div`
    
`;

export const Image = styled.img`
    
`;

export const InfoContainer = styled.div``;



export const Text = styled.span``;