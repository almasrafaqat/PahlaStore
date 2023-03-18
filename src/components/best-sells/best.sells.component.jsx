import React from "react";
import { Products } from "../../data";
import ProductCard from "../product-card/product-card.component";
import {
  ArrowContainer,
  ArrowLeft,
  ArrowRight,
  Box,
  Button,
  Container,
  Header,
  Heading,
  Item,
  MegaBox,
  ProductBannerContainer,
  ProductBannerImage,
  ProductContainer,
  Title,
  Wrapper,
} from "./best-sells.style";

const BestSells = () => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <Header>
            <Heading>Daily Best Sells</Heading>
          </Header>
          <MegaBox>
            <ProductBannerContainer>
              <ProductBannerImage src="/images/probanner.jpg" />
              <Title>Bring nature into your home</Title>
              <Button>Show Now!</Button>
            </ProductBannerContainer>

            <ProductContainer>
              <ArrowContainer direction="left">
                <ArrowLeft />
              </ArrowContainer>
              {Products.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
              <ArrowContainer direction="right">
                <ArrowRight />
              </ArrowContainer>
            </ProductContainer>
          </MegaBox>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default BestSells;
