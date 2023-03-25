import Slider from "react-slick";
import { useGlobalContext } from "../../context/GlobalContext";
import { Products } from "../../data";
import { SliderSettings } from "../../GlobalStyle";
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
  MegaBox,
  ProductBannerContainer,
  ProductBannerImage,
  ProductContainer,
  Title,
  Wrapper,
} from "./best-selling.style";

const BestSelling = () => {
  const { slider, setSliderRef } = useGlobalContext();

  return (
    <Container>
      <Wrapper>
        <Box>
          <Header>
            <Heading>Daily Best Sells</Heading>
          </Header>
          <MegaBox>
            <ProductBannerContainer>
              <ProductBannerImage src="/images/bestsellbanner.png" />
              <Title>Bring nature into your home</Title>
              <Button>Show Now!</Button>
            </ProductBannerContainer>
            <ProductContainer>
              <ArrowContainer
                direction="left"
                onClick={() => slider?.slickPrev()}
              >
                <ArrowLeft />
              </ArrowContainer>
              <Slider ref={setSliderRef} {...SliderSettings}>
                {Products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </Slider>

              <ArrowContainer
                direction="right"
                onClick={() => slider?.slickNext()}
              >
                <ArrowRight />
              </ArrowContainer>
            </ProductContainer>
          </MegaBox>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default BestSelling;
