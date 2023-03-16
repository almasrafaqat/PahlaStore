import { NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { mobile } from "./responsive";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Urbanist', sans-serif;
  }

`;

export const theme = {
  colors: {
    heading: "rgb(24 24 29)",
    text: "rgba(29 ,29, 29, .8)",
    white: "#fff",
    black: " #212529",
    helper: "#8490ff",
    primary: "#008080",
    border: "#ececec",
    bg: "#F6F8FA",
    footer_bg: "#0a1435",
    btn: "rgb(98 84 243)",
    hr: "#ffffff",
    gradient:
      "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
    shadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
    shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },

  media: {
    mobile: "768px",
    tab: "998px",
  },
};

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;

export const PrimaryLogo = styled.div`
  text-transform: uppercase;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const MarginBottomContainer = styled.div`
  margin-bottom: 70px;
`;

export const ButtonPrimary = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;

export const PaddingContainer = styled.div`
  padding: 0 30px;
  ${mobile({ padding: "10px" })}
`;

export const HeadingPrimary = styled.h1`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 2px;
`;

export const TextPrimary = styled.span``;

export const TitlePrimary = styled.h6`
  font-size: 16px;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
