import styled from "styled-components";
import {
  RatingContainerPrimary,
  StarEmptyPrimary,
  StarFullPrimary,
  StarHalfPrimary,
  TextPrimary,
} from "../../GlobalStyle";


export const Card = styled.div`
  position: relative;
  padding: 0.5rem 1rem;
  margin: 5px;
  border-radius: 10px;
  flex: 1 calc(20% - 0.5rem);
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: 0.3s ease-in-out;
  max-height: 450px;

  &:hover {
    transform: translate(0px, -8px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

export const TagContainer = styled.div`
  position: absolute;
  background-color: yellow;
  width: 70px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 25px;
  top: 0;
  left: 0;
  padding: 0.5rem;
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

export const Title = styled.h4``;

export const RatingContainer = styled(RatingContainerPrimary)``;

export const StartFull = styled(StarFullPrimary)``;
export const StarEmpty = styled(StarEmptyPrimary)``;
export const StarHalf = styled(StarHalfPrimary)``;

export const Brand = styled.div`
  margin-bottom: 20px;
`;

export const AddToCardContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 3%;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 0 10px;
  cursor: pointer;
`;
