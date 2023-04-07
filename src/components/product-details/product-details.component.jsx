import React from 'react'
import { AddToCartContainer, Color, ColorContainer, Container, Description, Discount, DiscountPercentage, EmptyStar, FullStar, GridWrapper, HalfStar, Image, ImageGallery, InfoContainer, MainImage, Price, PriceContainer, PriceDiscountedContainer, RatingContainer, Size, Sizecontainer, Title } from './proudct-details.style'
import FormatPrice from '../../helpers/FormatPrice'
import { TextPrimary, TitlePrimary } from '../../GlobalStyle'
import AddToCart from '../add-to-cart/add-to-cart.component'

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
          <AddToCartContainer>
            <AddToCart />
          </AddToCartContainer>

        </InfoContainer>
      </GridWrapper>
    </Container>
  )
}

export default ProductDetails