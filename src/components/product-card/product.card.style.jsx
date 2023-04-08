import styled from "styled-components";
import {
  RatingContainerPrimary,
  StarEmptyPrimary,
  StarFullPrimary,
  StarHalfPrimary,
  TextPrimary,
  TitlePrimary,
} from "../../GlobalStyle";

export const Card = styled.div`
  position: relative;
  padding: 0.5rem 1rem;
  margin: 5px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: ${({ theme }) => theme.colors.cardtransition};

  &:hover {
    transform: ${({ theme }) => theme.colors.cardhover};
    box-shadow: ${({ theme }) => theme.colors.cardshadow};
  }
`;

export const TagContainer = styled.div`
  position: absolute;
  background-color: ${(props) => props.bg};
  color: ${({ theme }) => theme.colors.white};
  width: 5.5rem;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 25px;
  top: 0;
  left: 0;
  padding: 0.5rem;
  text-transform: capitalize;
  text-align: center;
`;

export const Text = styled(TextPrimary)`
  color: ${(props) => props.type === "brand" && "teal"};
  font-size: ${(props) => props.type === "brand" && "16px"};
  font-weight: ${(props) => props.type === "brand" && "500"};
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`;

export const InfoContainer = styled.div`
  margin: 2rem 0;
`;

export const Title = styled(TitlePrimary)``;

export const RatingContainer = styled(RatingContainerPrimary)``;

export const StartFull = styled(StarFullPrimary)``;
export const StarEmpty = styled(StarEmptyPrimary)``;
export const StarHalf = styled(StarHalfPrimary)``;

export const Brand = styled.div`
  margin-bottom: 20px;
`;

export const AddToCardContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
