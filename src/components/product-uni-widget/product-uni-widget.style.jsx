import styled from "styled-components";
import { ArrowContainerPrimary, ArrowLeftPrimary, ArrowRightPrimary, BoxPrimary, ButtonPrimary, FlexContainer, HeadingPrimary, MarginBottomContainer, PaddingContainer, TitlePrimary } from "../../GlobalStyle";
import { IpadTablets, mobile } from "../../responsive";

export const Container = styled(MarginBottomContainer)``;

export const Wrapper = styled(PaddingContainer)``;

export const Box = styled(BoxPrimary)``;

export const Header = styled.div``;

export const Heading = styled(HeadingPrimary)``;

export const MegaBox = styled(FlexContainer)`
 flex-wrap: nowrap;
`;


export const ProductContainer = styled.div`
  position: relative;
  width: calc(100% - 5px);
  z-index: 1;

  /**Media Query */
  ${mobile({ width: "100%" })}
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


export const ArrowContainer = styled(ArrowContainerPrimary)``;

export const ArrowLeft = styled(ArrowLeftPrimary)``;
export const ArrowRight = styled(ArrowRightPrimary)``;