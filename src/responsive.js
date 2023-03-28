import { css } from "styled-components";

export const Mobile768 = (props) => {
  return css`
    @media only screen and (max-width: 767.98px) {
      ${props}
    }
  `;
};

// export const Mobile1810 = (props) => {
//   return css`
//     @media only screen and (max-width: 1809.98px) {
//       ${props}
//     }
//   `;
// };

export const MobileMaxWidth1200 = (props) => {
  return css`
  @media only screen and (max-width: 1200px) {
      ${props}
    }
  `
}

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 575.98px) {
      ${props}
    }
  `;
};
