import React from 'react'
import { AddToCartContainer, Brand, BrandContainer, CartContent, CartContentContainer, Color, ColorContainer, Container, DeliveryInfo, Description, Discount, DiscountPercentage, EmptyStar, FullStar, GridWrapper, HalfStar, HorizontalLine, Image, ImageGallery, InfoContainer, MainImage, Price, PriceContainer, PriceDiscountedContainer, RatingContainer, ReturnInfo, ShipsFrom, ShipsInfo, Size, Sizecontainer, StockInfo, Title } from './proudct-details.style'
import FormatPrice from '../../helpers/FormatPrice'
import { Link, TextPrimary, TitlePrimary } from '../../GlobalStyle'
import AddToCart from '../add-to-cart/add-to-cart.component'
import CartAmountToggle from '../cart-amount-toggle/cart-amount-toggle.component'

const ProductDetails = () => {
  return (
    <Container>
      <GridWrapper>
        <ImageGallery>
          <Image src="images/products/headphone.png" />
          <Image src="images/products/headphone.png" />
          <Image src="images/products/headphone.png" />
          <Image src="images/products/headphone.png" />
        </ImageGallery>
        <MainImage>
          <Image src="images/products/headphone.png" />
        </MainImage>
        <InfoContainer>
        <BrandContainer>
          Brand: <Link><Brand>Samsung</Brand></Link>
        </BrandContainer>
          <Title>
            Angie’s Boomchickapop Sweet & Salty
          </Title>
          <RatingContainer>
            <FullStar />
            <FullStar />
            <FullStar />
            <HalfStar />
            <EmptyStar />
          </RatingContainer>
          <PriceContainer>
            <Price>
              <FormatPrice price="10" />
            </Price>
            <DiscountPercentage> 50% </DiscountPercentage>
          </PriceContainer>
          <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!
          </Description>
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
        <CartContentContainer>
          <CartContent>
            <PriceContainer>
              <Price>
                <FormatPrice price="10" />
              </Price>
              <DiscountPercentage> 50% </DiscountPercentage>
            </PriceContainer>
            <DeliveryInfo>
              FREE delivery<b> Tuesday, April 11</b>
            </DeliveryInfo>
            <ReturnInfo>
              Free Return in <b>14 day</b>
            </ReturnInfo>
            <StockInfo>
            Only 4 left in stock - order soon
            </StockInfo>
            <AddToCartContainer>
              <CartAmountToggle />
              <AddToCart icon={true} content="center" bg={({theme}) => theme.colors.primary} width="100" radius="0.4" text="Add to cart" />
              <AddToCart content="center" bg={({theme}) => theme.colors.star} width="100" radius="0.4" text="Buy Now" />
            </AddToCartContainer>
            <ShipsFrom>
              <ShipsInfo>
                Ships from
              </ShipsInfo>
              <ShipsInfo>
                Riyadh KSA
              </ShipsInfo>
            </ShipsFrom>
          </CartContent>

        </CartContentContainer>

      </GridWrapper>
    </Container>
  )
}

export default ProductDetails