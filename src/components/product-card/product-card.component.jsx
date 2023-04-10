import React from "react";
import { Link } from "../../GlobalStyle";
import AddToCart from "../add-to-cart/add-to-cart.component";
import PriceComponent from "../price/price-component";

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
        <Title> <Link>{product.title?.slice(0, 50)}</Link> </Title>
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
        <PriceComponent price={product.discount} discount={product.price} />
        <AddToCart icon={true} content="center" bg={({ theme }) => theme.colors.primary} width="100" radius="0.4" text="Add" />
      </AddToCardContainer>
    </Card>
  );
};

export default ProductCard;
