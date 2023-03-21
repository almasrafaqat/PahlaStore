import React from "react";
import { Products } from "../../data";
import ProductWidgetCard from "../product-widgets-card/product-widgets-card.component";
import { Container, FlexBox, Wrapper } from "./product-widgets.style";

const ProductWidgets = () => {
  const FeaturedProducts = Products.filter((product) => product.featured);
  const NewProducts = Products.filter((product) => product.tag === "new");

  return (
    <Container>
      <Wrapper>
        <FlexBox>
          <ProductWidgetCard products={FeaturedProducts} title="Trending Products" />
          <ProductWidgetCard products={NewProducts} title="Recent Products" />
          <ProductWidgetCard products={FeaturedProducts} title="Trending Products" />
          <ProductWidgetCard products={NewProducts} title="Recent Products" />
        </FlexBox>
      </Wrapper>
    </Container>
  );
};

export default ProductWidgets;
