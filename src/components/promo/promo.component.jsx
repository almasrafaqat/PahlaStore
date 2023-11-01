import React from "react";
import {
  Container,
  ImageBanner,
  ImagePromo,
  Sponsored,
  Wrapper,
} from "./promo.style";
import { Link } from "../../GlobalStyle";

const Promo = ({ title, width, height , src, url }) => {
  return (
    <Container>
      <Wrapper>
        <Sponsored>
        {title}
        </Sponsored>
        <ImageBanner>
          <Link to={url}><ImagePromo width={width} height={height} src={src} /></Link>
        </ImageBanner>
      </Wrapper>
    </Container>
  );
};

export default Promo;
