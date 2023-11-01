import React from "react";
import { UseProductContext } from "../../context/ProductContext";
import ProductWidgetCard from "../product-widgets-card/product-widgets-card.component";
import { Container, GridBox, Wrapper } from "./product-widgets.style";

const ProductWidgets = () => {

  const { FeaturedProducts, NewProducts, newPopularProducts, newTopProduct } = UseProductContext();


  return (
    <Container>
      <Wrapper>
        <GridBox>
          <ProductWidgetCard
            products={FeaturedProducts}
            title="Featured Products"
            
          />
          <ProductWidgetCard products={NewProducts} title="Recent Products" />
          <ProductWidgetCard
            products={newPopularProducts}
            title="Popular Products"
          />
          <ProductWidgetCard products={newTopProduct} title="Top Products" />
        </GridBox>
      </Wrapper>
    </Container>
  );
};

export default ProductWidgets;
