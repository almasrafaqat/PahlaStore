import React from "react";
import { Products } from "../../data";
import ProductWidgetCard from "../product-widgets-card/product-widgets-card.component";
import { Container, FlexBox, GridBox, Wrapper } from "./product-widgets.style";

const ProductWidgets = () => {
  const FeaturedProducts = Products.filter((product) => product.featured);
  const NewProducts = Products.filter((product) => product.tag === "new");
  const tempProducts = [...Products];
  const TopRatingProducts = (a, b) => {
    return b.rating - a.rating;
  };
  const PopularProducts = (a, b) => {
    return b.views - a.views;
  };
  const newPopularProducts = tempProducts.sort(PopularProducts);
  const newTopProduct = Products.sort(TopRatingProducts);

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
