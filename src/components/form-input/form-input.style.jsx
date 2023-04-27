import styled, { css } from "styled-components";
import { mobile } from "../../responsive";

const ShrinkLabelStyle = css`
  font-size: 12px;
  top: -1rem;
  color: ${({ theme }) => theme.colors.secondary};

  ${mobile({ fontSize: "0.6rem" })}
`;

export const Group = styled.div`
  position: relative;
  margin: 1.2rem 0;
`;

export const FormInputLabel = styled.label`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1rem;
  position: absolute;
  pointer-events: none;
  font-weight: normal;
  left: 10px;
  top: 20px;
  transition: 300ms ease all;
  ${({ shrink }) => shrink && ShrinkLabelStyle};

  /**Media */
  ${mobile({ fontSize: "0.8rem" })}
  
`;

export const Input = styled.input`
  background-color: white;

  font-size: 18px;
  padding: 13px 10px 13px 5px;
  display: block;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  height: 3.5rem;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    
  }

  &:focus ~ ${FormInputLabel} {
    ${ShrinkLabelStyle}
  }

  /**Media */
  

`;

export const TextArea = styled.textarea`
  width: 100%;
  background-color: white;
  font-size: 18px;
  padding: 13px 10px 13px 5px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  &:focus ~ ${FormInputLabel} {
    ${ShrinkLabelStyle}
  }

  /**Media */
  ${mobile({ fontSize: "0.5rem" })}
`;
