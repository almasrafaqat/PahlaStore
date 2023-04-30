import React from "react";
import {
  Bold,
  Box,
  CheckoutSummary,
  Color,
  ColorContainer,
  ColorSizeContainer,
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
  ProductWrapper,
  RatingContainer,
  RemoveItem,
  RemoveItemContainer,
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
import { BreadCrumbsContainer, CloseIcon, CouponContainer, Link, TextPrimary } from "../../GlobalStyle";
import BasicBreadcrumbs from "../breadcrumb/breadcrumb.component";
import FormatPrice from "../../helpers/FormatPrice";
import CartAmountToggle from "../cart-amount-toggle/cart-amount-toggle.component";
import Coupon from "../coupon/coupon.component";
import AddToCart from "../add-to-cart/add-to-cart.component";

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
              There are <Bold>3</Bold> products in your cart
            </Text>
          </Header>
          <GridWrapper>
            <ProductWrapper>
              <ProductRow>
                <ImageContainer>
                  <Link><Image src="/images/products/iphone.png" /></Link>
                </ImageContainer>
                <InfoContainer>
                  <Link>
                    <Title>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptate possimus neque dolor maxime officiis eveniet .
                    </Title>
                  </Link>
                  <RatingContainer>
                    <FullStar />
                    <FullStar />
                    <FullStar />
                    <HalfStar />
                    <EmptyStar />
                  </RatingContainer>
                  <PriceContainer >
                    <Price qty={true}>
                      <FormatPrice price="1400" />
                    </Price>
                    <DiscountPercentage> 50% </DiscountPercentage>
                  </PriceContainer>
                  <ColorSizeContainer>
                    <ColorContainer>
                      <TextPrimary>Color</TextPrimary>
                      <Color color="orange"></Color>

                    </ColorContainer>
                    <Sizecontainer>
                      <TextPrimary>Size </TextPrimary>
                      <Size active={true}>L</Size>

                    </Sizecontainer>
                  </ColorSizeContainer>


                </InfoContainer>
                <PriceWrapper>
                  <PriceContainer>
                    <Price>
                      <FormatPrice price="1400" />
                    </Price>

                  </PriceContainer>
                  <CartAmountToggle />
                </PriceWrapper>

                <RemoveItemContainer>
                  <RemoveItem />
                </RemoveItemContainer>

              </ProductRow>
              <HorizontalLine />

              <ProductRow>
                <ImageContainer>
                  <Link><Image src="/images/products/iphone1.png" /></Link>
                </ImageContainer>
                <InfoContainer>
                  <Link>
                    <Title>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptate possimus neque dolor maxime officiis eveniet .
                    </Title>
                  </Link>

                  <RatingContainer>
                    <FullStar />
                    <FullStar />
                    <FullStar />
                    <HalfStar />
                    <EmptyStar />
                  </RatingContainer>
                  <PriceContainer >
                    <Price qty={true}>
                      <FormatPrice price="1400" />
                    </Price>
                    <DiscountPercentage> 50% </DiscountPercentage>
                  </PriceContainer>
                  <ColorSizeContainer>
                    <ColorContainer>
                      <TextPrimary>Color</TextPrimary>
                      <Color color="lightblue"></Color>

                    </ColorContainer>
                    <Sizecontainer>
                      <TextPrimary>Size </TextPrimary>
                      <Size active={true}>M</Size>

                    </Sizecontainer>
                  </ColorSizeContainer>


                </InfoContainer>
                <PriceWrapper>
                  <PriceContainer>
                    <Price>
                      <FormatPrice price="1400" />
                    </Price>

                  </PriceContainer>
                  <CartAmountToggle />
                </PriceWrapper>
                <RemoveItemContainer>
                  <RemoveItem />
                </RemoveItemContainer>

              </ProductRow>
              <HorizontalLine />
              <ProductRow>
                <ImageContainer>
                  <Link><Image src="/images/products/iphone2.png" /></Link>
                </ImageContainer>
                <InfoContainer>
                  <Link>
                    <Title>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptate possimus neque dolor maxime officiis eveniet .
                    </Title>
                  </Link>

                  <RatingContainer>
                    <FullStar />
                    <FullStar />
                    <FullStar />
                    <HalfStar />
                    <EmptyStar />
                  </RatingContainer>
                  <PriceContainer >
                    <Price qty={true}>
                      <FormatPrice price="1400" />
                    </Price>
                    <DiscountPercentage> 50% </DiscountPercentage>
                  </PriceContainer>
                  <ColorSizeContainer>
                    <ColorContainer>
                      <TextPrimary>Color</TextPrimary>
                      <Color color="black"></Color>
                    </ColorContainer>
                    <Sizecontainer>
                      <TextPrimary>Size </TextPrimary>
                      <Size active={true}>XL</Size>
                    </Sizecontainer>
                  </ColorSizeContainer>
                </InfoContainer>
                <PriceWrapper>
                  <PriceContainer>
                    <Price>
                      <FormatPrice price="1400" />
                    </Price>

                  </PriceContainer>
                  <CartAmountToggle />
                </PriceWrapper>
                <RemoveItemContainer>
                  <RemoveItem />
                </RemoveItemContainer>
              </ProductRow>
            </ProductWrapper>
            <CheckoutSummary>
              <Summary>
                <SummaryTitle style={{ marginBottom: "1rem" }}>ORDER SUMMARY </SummaryTitle>
                <Coupon text="Coupon" height="2.5rem" width="100%" />
                <SummaryItem>
                  <SummaryItemText>Items</SummaryItemText>
                  <SummaryItemPrice>
                    <FormatPrice price="1500" />
                  </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>
                    <FormatPrice price="500" />
                  </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText> <CouponContainer> <CloseIcon /> Coupon (Eid23) </CouponContainer>  </SummaryItemText>
                  <SummaryItemPrice>
                    <FormatPrice price="200" />
                  </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice>
                    <FormatPrice price="1800" />
                  </SummaryItemPrice>
                </SummaryItem>
                <Link to="/checkout">
                  <AddToCart
                    content="center"
                    bgColor={({ theme }) => theme.colors.primary}
                    width="100"
                    radius="0.2"
                    text="Checkout"
                  />
                </Link>
              </Summary>
            </CheckoutSummary>
          </GridWrapper>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Cart;
