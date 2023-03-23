import React from "react";
import { Link } from "../../GlobalStyle";
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

const ProductCard = ({ product, type }) => {

  return (
    <Card type={type}>
      <TagContainer bg={product.bg}>
        <Text>{product.tag}</Text>
      </TagContainer>
      <ImageContainer>
        <Link><Image src={product.imageUrl} /></Link>
      </ImageContainer>
      <InfoContainer>
        <Title> <Link>{product.title.slice(0, 50)}</Link> </Title>
        <RatingContainer>
          <StartFull />
          <StartFull />
          <StartFull />
          <StarHalf />
          <StarEmpty />
        </RatingContainer>
        <Brand>
          By <Text type="brand">{product.brand}</Text>
        </Brand>
      </InfoContainer>
      <AddToCardContainer>
        <AddToCart price={product.discount} discount={product.price} />
      </AddToCardContainer>
    </Card>
  );
};

export default ProductCard;
