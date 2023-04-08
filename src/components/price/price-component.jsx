import React from "react";
import FormatPrice from "../../helpers/FormatPrice";
import { DiscountPrice, Price, PriceContainer } from "./price.style";

const PriceComponent = ({ price, discount }) => {
  return (
    <>
      <PriceContainer>
        <Price>
          <FormatPrice price={price} />
        </Price>
        <DiscountPrice>
          <FormatPrice price={discount} />
        </DiscountPrice>
      </PriceContainer>
    </>
  );
};

export default PriceComponent;
