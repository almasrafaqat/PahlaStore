import React from "react";
import ProductWidgetsBestSelling from "../product-widgets-bestselling/product-widgets-bestselling.component";
import { Container, FlexBox, Wrapper } from "./product-widgets.style";

const ProductWidgets = () => {
  return (
    <Container>
      <Wrapper>
        <FlexBox>
            <ProductWidgetsBestSelling/>
            <ProductWidgetsBestSelling/>
            <ProductWidgetsBestSelling/>
        </FlexBox>
      </Wrapper>
    </Container>
  );
};

export default ProductWidgets;
