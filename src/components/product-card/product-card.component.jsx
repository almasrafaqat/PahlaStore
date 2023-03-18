import React from "react";
import AddToCart from "../add-to-cart/add-to-cart.component";

import {
  AddToCardContainer,
  Brand,
  Image,
  ImageContainer,
  Card,
  RatingContainer,
  TagContainer,
  Text,
  Title,
  InfoContainer,
  StartFull,
  StarEmpty,
  StarHalf,
} from "./product.card.style";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <TagContainer>
        <Text>Hot</Text>
      </TagContainer>
      <ImageContainer>
        <Image src={product.imageUrl} />
      </ImageContainer>
      <InfoContainer>
        <Title>All Natural Italian-Style Chicken Meatballs </Title>
        <RatingContainer>
          <StartFull />
          <StartFull />
          <StartFull />
          <StarHalf />
          <StarEmpty />
        </RatingContainer>
        <Brand>
          By <Text type="brand">Apple</Text>
        </Brand>
      </InfoContainer>
      <AddToCardContainer>
        <AddToCart price={1500} discount={1800} />
      </AddToCardContainer>
    </Card>
  );
};

export default ProductCard;
