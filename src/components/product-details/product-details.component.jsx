import React from "react";
import {
  AboutProduct,
  AddToCartContainer,
  Brand,
  BrandContainer,
  CartContent,
  CartContentContainer,
  Color,
  ColorContainer,
  Container,
  DeliveryInfo,
  Description,
  DiscountPercentage,
  EmptyStar,
  FullStar,
  GridWrapper,
  HalfStar,
  Heading,
  HorizontalLine,
  ImageGallery,
  ImageGalleryWrapper,
  ImagesContainer,
  ImagesGalleryContainer,
  InfoContainer,
  ListItem,
  OrderList,
  Price,
  PriceContainer,
  RatingContainer,
  ReturnInfo,
  ShipsFrom,
  ShipsInfo,
  Size,
  Sizecontainer,
  StockInfo,
  Title,
  Wrapper,
  ZoomImage,
} from "./proudct-details.style";
import FormatPrice from "../../helpers/FormatPrice";
import { BreadCrumbsContainer, Link, TextPrimary } from "../../GlobalStyle";
import AddToCart from "../add-to-cart/add-to-cart.component";
import CartAmountToggle from "../cart-amount-toggle/cart-amount-toggle.component";
import CartPromo from "../cart-promo/cart-promo.component";
import DeliveryDate from "../../helpers/DeliveryDate";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { UseProductContext } from "../../context/ProductContext";
import BasicBreadcrumbs from "../breadcrumb/breadcrumb.component";

const ProductDetails = () => {
  const { id } = useParams();
  let ProductId = id > 1 ? id : 1;
  const { SingleProduct, imagePreview, setImagePreview, ImageOnClick } =
    UseProductContext();

  const Product = SingleProduct(ProductId);

  useEffect(() => {
    window.scroll(0, 0);
    setImagePreview(Product.imageUrl);
  }, [id]);

  return (
    <Container>
      <Wrapper>
        <BreadCrumbsContainer>
          <BasicBreadcrumbs category={Product.category} title={Product.title} />
        </BreadCrumbsContainer>

        <GridWrapper>
          <ImagesContainer>
            <ImagesGalleryContainer>
              <ImageGalleryWrapper>
                <ImageGallery onClick={ImageOnClick} src={Product.imageUrl} />
              </ImageGalleryWrapper>
              {Product.images?.map((image, index) => (
                <ImageGalleryWrapper key={index}>
                  <ImageGallery onClick={ImageOnClick} src={image} />
                </ImageGalleryWrapper>
              ))}
            </ImagesGalleryContainer>

            <ZoomImage
              src={imagePreview}
              zoomSrc={imagePreview}
              zoomScale={1.8}
              zoomType={"hover"}
            />
          </ImagesContainer>

          <InfoContainer>
            <BrandContainer>
              Brand:
              <Link>
                <Brand> {Product.brand}</Brand>
              </Link>
            </BrandContainer>
            <Title>{Product.title}</Title>
            <RatingContainer>
              <FullStar />
              <FullStar />
              <FullStar />
              <HalfStar />
              <EmptyStar />
            </RatingContainer>
            <PriceContainer>
              <Price>
                <FormatPrice price={Product.price} />
              </Price>
              <DiscountPercentage> 50% </DiscountPercentage>
            </PriceContainer>
            <Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              rem officia, corrupti reiciendis minima nisi modi, quasi, odio
              minus dolore impedit fuga eum eligendi? Officia doloremque facere
              quia. Voluptatum, accusantium!
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
            <AboutProduct>
              <Heading>About this item</Heading>
              <OrderList>
                <ListItem>Backpack</ListItem>
                <ListItem>Buckle</ListItem>
                <ListItem>Material: 100% PU</ListItem>
                <ListItem>Care Instructions: Hand Wash Only</ListItem>
                <ListItem>Closure: Buckle</ListItem>
                <ListItem>Style: Fantine Backpack</ListItem>
                <ListItem>Women Bags</ListItem>
                <ListItem>100% PU</ListItem>
                <ListItem>Care Instructions: Hand Wash Only</ListItem>
                <ListItem>Closure: Buckle</ListItem>
                <ListItem>Style: Fantine Backpack</ListItem>
                <ListItem>Women Bags</ListItem>
                <ListItem>100% PU</ListItem>

                <ListItem>Backpack</ListItem>
                <ListItem>Buckle</ListItem>
                <ListItem>Material: 100% PU</ListItem>
                <ListItem>Care Instructions: Hand Wash Only</ListItem>
                <ListItem>Closure: Buckle</ListItem>
                <ListItem>Style: Fantine Backpack</ListItem>
                <ListItem>Women Bags</ListItem>
                <ListItem>100% PU</ListItem>
                <ListItem>Care Instructions: Hand Wash Only</ListItem>
                <ListItem>Closure: Buckle</ListItem>
                <ListItem>Style: Fantine Backpack</ListItem>
                <ListItem>Women Bags</ListItem>
                <ListItem>100% PU</ListItem>
              </OrderList>
            </AboutProduct>
          </InfoContainer>
          <CartContentContainer>
            <CartContent>
              <PriceContainer>
                <Price>
                  <FormatPrice price={Product.price} />
                </Price>
                <DiscountPercentage> 50% </DiscountPercentage>
              </PriceContainer>
              <DeliveryInfo>
                FREE delivery<b> {DeliveryDate(5)}</b>
              </DeliveryInfo>
              <ReturnInfo>
                Free Return in <b>14 day</b>
              </ReturnInfo>
              <StockInfo>Only 4 left in stock - order soon</StockInfo>
              <AddToCartContainer>
                <CartAmountToggle />
                <Link to="/cart">
                  <AddToCart
                    icon={true}
                    content="center"
                    bgColor={({ theme }) => theme.colors.primary}
                    width="100"
                    radius="0.4"
                    text="Add"
                  />
                </Link>
                <Link to="/checkout">
                  <AddToCart
                    content="center"
                    bgColor={({ theme }) => theme.colors.star}
                    width="100"
                    radius="0.4"
                    text="Buy Now"
                  />
                </Link>
              </AddToCartContainer>
              <ShipsFrom>
                <ShipsInfo>Ships from</ShipsInfo>
                <ShipsInfo>Riyadh KSA</ShipsInfo>
              </ShipsFrom>
            </CartContent>
            <CartPromo />
          </CartContentContainer>
        </GridWrapper>
      </Wrapper>
    </Container>
  );
};

export default ProductDetails;
