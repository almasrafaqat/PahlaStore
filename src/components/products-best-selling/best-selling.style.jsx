import styled from "styled-components";
import {
  ArrowContainerPrimary,
  ArrowLeftPrimary,
  ArrowRightPrimary,
  BoxPrimary,
  ButtonPrimary,
  FlexContainer,
  HeadingPrimary,
  MarginBottomContainer,
  PaddingContainer,
  TitlePrimary,
} from "../../GlobalStyle";
import { IpadTablets } from "../../responsive";

export const Container = styled(MarginBottomContainer)``;

export const Wrapper = styled(PaddingContainer)``;

export const Box = styled(BoxPrimary)``;

export const Header = styled.div``;

export const Heading = styled(HeadingPrimary)``;

export const MegaBox = styled(FlexContainer)`
 flex-wrap: nowrap;
`;

export const ProductBannerContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightred};
  height: 450px;
  position: relative;
  z-index: 2;
  padding: 0 10px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  ${IpadTablets({ width: "0", display: "none" })};
`;

export const ProductBannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 20px;
`;

export const ProductContainer = styled.div`
  position: relative;
  width: calc(78% - 5px);
  z-index: 1;
  ${IpadTablets({ width: "100%" })}
`;

export const Title = styled(TitlePrimary)`
  position: absolute;
  top: 10%;
  left: 10%;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  width: 70%;
  color: ${({ theme }) => theme.colors.white};
`;
export const Button = styled(ButtonPrimary)`
  position: absolute;
  top: 70%;
  left: 10%;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 0.4rem;
  background-color: #c10124; /*${({ theme }) => theme.colors.lightred};*/
`;

export const ArrowContainer = styled(ArrowContainerPrimary)``;

export const ArrowLeft = styled(ArrowLeftPrimary)``;
export const ArrowRight = styled(ArrowRightPrimary)``;
