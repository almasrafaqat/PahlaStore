import { SendOutlined } from "@mui/icons-material";
import styled from "styled-components";
import {
  ButtonPrimary,
  FlexContainer,
  MarginBottomContainer,
  PaddingContainer,
  TitlePrimary,
} from "../../GlobalStyle";

export const Container = styled(MarginBottomContainer)``;

export const Wrapper = styled(PaddingContainer)`
  background-color: lightblue;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Title = styled(TitlePrimary)`
  font-size: 32px;
`;

export const ShortDescription = styled.p`
  font-size: 20px;
  font-weight: 300;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  max-width: 50%;
  border-radius: 50px;
  padding-left: 20px;
  height: 50px;
`;

export const SendIcon = styled(SendOutlined)`
  color: teal;
`;

export const Input = styled.input`
  padding: 12px;
  border-radius: 50px 0 0 50px;
  width: 100%;
  outline: none;
  border: none;
`;

export const Button = styled(ButtonPrimary)`
  border-radius: 50px;
  font-size: 18px;
  height: 50px;
`;

export const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
 

  position: relative;
`;

export const Image = styled.img`
  max-width: 80%;
  max-height: 100%;
  width: 100%;
  object-fit: contain;
  position: absolute;
  bottom: 0;

`;
