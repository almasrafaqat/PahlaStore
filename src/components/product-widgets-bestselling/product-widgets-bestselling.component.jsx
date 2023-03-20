import FormatPrice from "../../helpers/FormatPrice";
import {
  Box,
  DiscountPrice,
  Header,
  Heading,
  Image,
  ImageContainer,
  InfoContainer,
  Price,
  PriceContainer,
  ProductContainer,
  RatingContainer,
  StarEmpty,
  StarHalf,
  StartFull,
  Title,
} from "./product-widgets-bestselling.style";

const ProductWidgetsBestSelling = ({ title }) => {
  return (
    <Box>
      <Header>
        <Heading>{title} </Heading>
      </Header>
      <ProductContainer>
        <ImageContainer>
          <Image src="/images/headphone.png" />
        </ImageContainer>
        <InfoContainer>
          <Title>Nestle Original Coffee-Mate Coffee Creamer</Title>
          <RatingContainer>
            <StartFull />
            <StartFull />
            <StartFull />
            <StarHalf />
            <StarEmpty />
          </RatingContainer>
          <PriceContainer>
            <Price>
              <FormatPrice price={1200} />
            </Price>
            <DiscountPrice>
              <FormatPrice price={1500} />
            </DiscountPrice>
          </PriceContainer>
        </InfoContainer>
      </ProductContainer>
      <ProductContainer>
        <ImageContainer>
          <Image src="/images/headphone.png" />
        </ImageContainer>
        <InfoContainer>
          <Title>Huwei Mobile Phone</Title>
          <RatingContainer>
            <StartFull />
            <StartFull />
            <StartFull />
            <StarHalf />
            <StarEmpty />
          </RatingContainer>
          <PriceContainer>
            <Price>1200</Price>
            <DiscountPrice>15000</DiscountPrice>
          </PriceContainer>
        </InfoContainer>
      </ProductContainer>
      <ProductContainer>
        <ImageContainer>
          <Image src="/images/headphone.png" />
        </ImageContainer>
        <InfoContainer>
          <Title>Huwei Mobile Phone</Title>
          <RatingContainer>
            <StartFull />
            <StartFull />
            <StartFull />
            <StarHalf />
            <StarEmpty />
          </RatingContainer>
          <PriceContainer>
            <Price>1200</Price>
            <DiscountPrice>15000</DiscountPrice>
          </PriceContainer>
        </InfoContainer>
      </ProductContainer>
    </Box>
  );
};

export default ProductWidgetsBestSelling;
