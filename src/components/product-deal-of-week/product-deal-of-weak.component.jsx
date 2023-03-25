import Slider from "react-slick";
import ProductDealCard from "../product-deal-of-week-card/product-deal-of-week-card.component";
import {
  Box,
  Container,
  Header,
  Heading,
  ProductContainer,
  Wrapper,
} from "./product-deal-of-weak.style";

const ProductDealOffWeak = () => {
  var SliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Wrapper>
        <Header>
          <Heading>Deals of the week</Heading>
        </Header>
        <Box>
          <ProductContainer>
            <Slider {...SliderSettings}>
              <ProductDealCard />
              <ProductDealCard />
              <ProductDealCard />
              <ProductDealCard />
              <ProductDealCard />
              <ProductDealCard />
              <ProductDealCard />
            </Slider>
          </ProductContainer>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default ProductDealOffWeak;
