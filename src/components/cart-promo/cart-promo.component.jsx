import React from "react";
import {
  Container,
  ImageBanner,
  ImagePromo,
  Sponsored,
  Wrapper,
} from "./cart-promo.style";
import { Link } from "../../GlobalStyle";

const CartPromo = () => {
  return (
    <Container>
      <Wrapper>
        <Sponsored>
          Sponsored
        </Sponsored>
        <ImageBanner>
          <Link><ImagePromo width="100" height="100" src="/images/promo/brush.jpg" /></Link>
        </ImageBanner>
      </Wrapper>
    </Container>
  );
};

export default CartPromo;
