import styled, { css } from "styled-components";

const ShrinkLabelStyle = css`
  font-size: 12px;
  top: -1rem;
  color: ${({ theme }) => theme.colors.primary};
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
`;

export const Input = styled.input`
  background-color: white;

  font-size: 18px;
  padding: 13px 10px 13px 5px;
  display: block;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  height: 60px;

  &:focus {
    outline: none;
    border: 2px solid #1976d2;
  }

  &:focus ~ ${FormInputLabel} {
    ${ShrinkLabelStyle}
  }
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
  }

  &:focus ~ ${FormInputLabel} {
    ${ShrinkLabelStyle}
  }
`;
