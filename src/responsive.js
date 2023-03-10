import { css } from "styled-components";

export const Mobile768 = (props) => {
  return css`
    @media only screen and (max-width: 767.98px) {
      ${props}
    }
  `;
};


export const Mobile576 = (props) => {
  return css`
    @media only screen and (max-width: 575.98px) {
      ${props}
    }
  `;
};

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 575.98px) {
      ${props}
    }
  `;
};
