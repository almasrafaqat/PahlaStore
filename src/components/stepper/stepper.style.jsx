import styled, { css } from "styled-components";
import { mobile } from "../../responsive";



export const Container = styled.div`

`;

export const Wrapper = styled.div`
  
  /* padding: 2rem;
  margin: 2rem auto; */
 
`;

export const OrderNoteButtonContainer = styled.div`
 
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 1000px;
  margin:0 auto;
  border: 1px solid;

  ${mobile({ flexDirection: "column", maxWidth: "100%" })}
`;




export const OrderNoteTable = styled.div`

  border: 2px dashed ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  border-radius: 0.3rem;
  margin-bottom: 1rem;
  /* width: 40%; */

  /**Media Query */
  ${mobile({ Width: "100%", backgroundColor: "red" })}
`;


export const OrderNote = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 2px;
  line-height: 5px;
  margin: 1rem 0;
  background-color: teal;
  padding: 1rem 0.5rem;
  color: white;
  border-radius: 0.2rem;
  text-align: center;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.gray};

  &:last-child {
    border-bottom: 0;
  }
  
`;

const FlexItemHeadingCss = css`
  font-weight: 600;
  font-size: 1.08rem;

`;

export const FlexItems = styled.div`
  margin: 1rem 0;
  
  ${(props) => props.heading && FlexItemHeadingCss}

`;


export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* width: 30%; */

  /**Media Query */
  ${mobile({ Width: "100%", backgroundColor: "green", })}
`;



