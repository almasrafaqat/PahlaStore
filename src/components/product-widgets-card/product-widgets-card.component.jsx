import FormatPrice from "../../helpers/FormatPrice";
import {
  BoxColumn,
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
  WidgetBox,
} from "./product-widgets-card.style";

const ProductWidgetCard = ({ title, products }) => {

  return (
    <WidgetBox>
      <Header>
        <Heading>{title} </Heading>
      </Header>
      <BoxColumn>
        {
          products.slice(0,3).map((product) => {
            return (
              <ProductContainer key={product.id}>
                <ImageContainer>
                  <Image src={product.imageUrl} />
                </ImageContainer>
                <InfoContainer>
                  <Title>{product.title.slice(0, 50)}</Title>
                  <RatingContainer>
                    <StartFull />
                    <StartFull />
                    <StartFull />
                    <StarHalf />
                    <StarEmpty />
                  </RatingContainer>
                  <PriceContainer>
                    <Price>
                      <FormatPrice price={product.price} />
                    </Price>
                    <DiscountPrice>
                      <FormatPrice price={product.discount} />
                    </DiscountPrice>
                  </PriceContainer>
                </InfoContainer>
              </ProductContainer>
            )
          })
        }



      </BoxColumn>
    </WidgetBox>
  );
};

export default ProductWidgetCard;
