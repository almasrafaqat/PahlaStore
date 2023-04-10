import React from "react";
import {
  Container,
  ImageBanner,
  ImagePromo,
  Sponsored,
  Wrapper,
} from "./cart-promo.style";

const CartPromo = () => {
  return (
    <Container>
      <Wrapper>
        <Sponsored>
            Sponsored
        </Sponsored>
        <ImageBanner>
          <ImagePromo src="/images/promo/ramadan.png" />
        </ImageBanner>
      </Wrapper>
    </Container>
  );
};

export default CartPromo;
