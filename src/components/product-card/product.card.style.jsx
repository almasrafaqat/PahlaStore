import styled from "styled-components";
import { Rating } from "@mui/material";
import { TextPrimary } from "../../GlobalStyle";

export const Card = styled.div`
  position: relative;
  padding: 10px 15px 15px 15px;
  margin: 5px;
  border-radius: 10px;
  flex: 1 calc(20% - 10px);
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  transition: 0.3s ease-in-out;
  cursor: pointer;
  max-height: 450px;

  &:hover {
    transform: translate(0px, -8px);
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
  padding: 10px;
`;

export const Text = styled(TextPrimary)`
  color: ${(props) => props.type === "brand" && "teal"};
  font-size: ${(props) => props.type === "brand" && "16px"};
  font-weight: ${(props) => props.type === "brand" && "500"};
`;

export const ImageContainer = styled.div`
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  display: block;
  margin: 0 auto;
  object-fit: contain;
`;

export const InfoContainer = styled.div`
  margin: 30px 0;
`;

export const Title = styled.h4``;

export const RatingContainer = styled.div`
  margin: 3px 0;
`;

export const RatingIcon = styled(Rating)``;

export const Brand = styled.div``;

export const AddToCardContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 1%;
  padding: 0 10px;
`;
