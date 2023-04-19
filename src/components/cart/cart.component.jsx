import React from "react";
import {
  Box,
  Button,
  CheckoutSummary,
  Color,
  ColorContainer,
  Container,
  DiscountPercentage,
  EmptyStar,
  FullStar,
  GridWrapper,
  HalfStar,
  Header,
  Heading,
  HorizontalLine,
  Image,
  ImageContainer,
  InfoContainer,
  Price,
  PriceContainer,
  PriceWrapper,
  ProductRow,
  RatingContainer,
  Size,
  Sizecontainer,
  Summary,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  SummaryTitle,
  Text,
  Title,
  Wrapper,
} from "./cart.style";
import { BreadCrumbsContainer, TextPrimary } from "../../GlobalStyle";
import BasicBreadcrumbs from "../breadcrumb/breadcrumb.component";
import FormatPrice from "../../helpers/FormatPrice";
import CartAmountToggle from "../cart-amount-toggle/cart-amount-toggle.component";

const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <BreadCrumbsContainer>
          <BasicBreadcrumbs category="cart" link="/cart" />
        </BreadCrumbsContainer>
        <Box>
          <Header>
            <Heading>Shopping Cart</Heading>
            <Text>
              There are <b style={{ color: "teal" }}>3</b> products in your cart
            </Text>
          </Header>
          <GridWrapper>
            <ProductRow>
              <ImageContainer>
                <Image src="/images/headphone.png" />
              </ImageContainer>
              <InfoContainer>
                <Title>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptate possimus neque dolor maxime officiis eveniet .
                </Title>
                <RatingContainer>
                  <FullStar />
                  <FullStar />
                  <FullStar />
                  <HalfStar />
                  <EmptyStar />
                </RatingContainer>
                <ColorContainer>
                  <TextPrimary>Color</TextPrimary>
                  <Color color="orange"></Color>
                  <Color color="red"></Color>
                  <Color color="teal"></Color>
                </ColorContainer>
                <Sizecontainer>
                  <TextPrimary>Size </TextPrimary>
                  <Size active={true}>S</Size>
                  <Size>M</Size>
                  <Size>L</Size>
                  <Size>XL</Size>
                </Sizecontainer>
                <HorizontalLine />
              </InfoContainer>
              <PriceWrapper>
                <PriceContainer>
                  <Price>
                    <FormatPrice price="1400" />
                  </Price>
                  <DiscountPercentage> 50% </DiscountPercentage>
                </PriceContainer>
                <CartAmountToggle />
              </PriceWrapper>
            </ProductRow>
            <CheckoutSummary>
              <Summary>
                <SummaryTitle>ORDER SUMMARY </SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>
                    {" "}
                    <FormatPrice price="1500" />
                  </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>
                    <FormatPrice price="1200" />
                  </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice>
                    <FormatPrice price="1500" />
                  </SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
              </Summary>
            </CheckoutSummary>
          </GridWrapper>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Cart;
