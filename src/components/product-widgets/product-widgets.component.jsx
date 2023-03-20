import React from "react";
import ProductWidgetsBestSelling from "../product-widgets-bestselling/product-widgets-bestselling.component";
import { Container, FlexBox, Wrapper } from "./product-widgets.style";

const ProductWidgets = () => {
  return (
    <Container>
      <Wrapper>
        <FlexBox>
            <div style={{flex: "1"}}>
            <ProductWidgetsBestSelling title="Top Selling"/>
            </div>
            <div style={{flex: "1"}}>
            <ProductWidgetsBestSelling title="Trending Products"/>
            </div>
            <div style={{flex: "1"}}>
            <ProductWidgetsBestSelling title="Recently added"/>
            </div>
            <div style={{flex: "1"}}>
            <ProductWidgetsBestSelling title="Top Rated"/>
            </div>
            
        </FlexBox>
      </Wrapper>
    </Container>
  );
};

export default ProductWidgets;
