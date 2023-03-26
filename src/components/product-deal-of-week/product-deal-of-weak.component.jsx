import Slider from "react-slick";
import { useGlobalContext } from "../../context/GlobalContext";
import { UseProductContext } from "../../context/ProductContext";
import { ArrowContainerPrimary, ArrowLeftPrimary,ArrowRightPrimary, DealSlideSettings } from "../../GlobalStyle";
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

  const { DealOfWeekProducts } = UseProductContext();
  const { slide, setSlideRef } = useGlobalContext();

  return (
    <Container>
      <Wrapper>
        <Box>
          <Header>
            <Heading>Deals of the week</Heading>
          </Header>
          <ProductContainer>
            <ArrowContainerPrimary direction="left"  onClick={() => slide?.slickPrev()}>
              <ArrowLeftPrimary />
            </ArrowContainerPrimary>
            <Slider ref={setSlideRef}  {...DealSlideSettings} >
              {
                DealOfWeekProducts?.map((product) => <ProductDealCard key={product.id} product={product} />)
              }

            </Slider>
            <ArrowContainerPrimary direction="right"  onClick={() => slide?.slickNext()}>
              <ArrowRightPrimary />
            </ArrowContainerPrimary>
          </ProductContainer>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default ProductDealOffWeak;
