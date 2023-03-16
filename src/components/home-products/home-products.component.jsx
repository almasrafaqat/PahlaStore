import { Products } from "../../data";
import ProductCard from "../product-card/product-card.component";
import {
   Box,
  Container,
  Header,
  Heading,
  ProductContainer,
  Wrapper,
} from "./home-products.style";

const HomeProducts = () => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <Header>
            <Heading>Featured Products</Heading>
          </Header>
          <ProductContainer>
            {Products.map((product) => {
              return (
               <ProductCard key={product.id} product={product} />
              );
            })}
          </ProductContainer>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default HomeProducts;
