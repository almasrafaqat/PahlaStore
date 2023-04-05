import { SendOutlined } from "@mui/icons-material";
import styled from "styled-components";
import {
  ButtonPrimary,
  MarginBottomContainer,
  PaddingContainer,
  TitlePrimary,
} from "../../GlobalStyle";
import { mobile, Mobile768, MobileMaxWidth1200 } from "../../responsive";

export const Container = styled(MarginBottomContainer)``;

export const Wrapper = styled(PaddingContainer)`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 28rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 3rem;

  ${mobile({ padding: "1.9rem" })}
`;

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.9rem;
`;

export const Title = styled(TitlePrimary)`
  font-size: 2rem;
  letter-spacing: 1px;
  ${mobile({ fontSize: "1.5rem" })}
`;

export const ShortDescription = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  letter-spacing: 2px;
  ${mobile({ fontSize: "1rem" })};
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 50%;
  border-radius: 3rem;
  padding-left: 1.2rem;
  height: 3rem;
  ${Mobile768({ maxWidth: "100%" })}
  ${MobileMaxWidth1200({ maxWidth: "100%" })};
`;

export const SendIcon = styled(SendOutlined)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Input = styled.input`
  padding: 0.8rem;
  border-radius: 3rem 0 0 3rem;
  width: 100%;
  outline: none;
  border: none;
`;

export const Button = styled(ButtonPrimary)`
  border-radius: 3rem;
  font-size: 1.1rem;
  height: 3rem;

  ${mobile({ fontSize: "1rem" })};
`;

export const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  ${Mobile768({ display: "none" })}
  ${MobileMaxWidth1200({ display: "none" })}
`;

export const Image = styled.img`
  max-width: 80%;
  max-height: 100%;
  width: 100%;
  object-fit: contain;
  position: absolute;
  bottom: 0;
`;
