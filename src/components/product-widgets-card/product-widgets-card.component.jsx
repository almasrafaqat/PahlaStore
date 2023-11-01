import { Link } from "../../GlobalStyle";
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

const ProductWidgetCard = ({ title, products, width="120", height="100" , titleSize}) => {

  return (
    <WidgetBox>
      <Header>
        <Heading>{title} </Heading>
      </Header>
      <BoxColumn>
        {
          products && products.length > 0 ? products.slice(0,3).map((product) => {
            return (
              <ProductContainer key={product.id}>
                <ImageContainer width={width} height={height}>
                  <Link><Image src={product.imageUrl} /> </Link>
                </ImageContainer>
                <InfoContainer>
                  <Title titleSize={titleSize}><Link> {product.title.slice(0, 50)} </Link></Title>
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
          }): " No Product Found"
        }



      </BoxColumn>
    </WidgetBox>
  );
};

export default ProductWidgetCard;
