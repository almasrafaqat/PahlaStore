import styled from "styled-components";
import "../responsive.css";
import Header from "../components/header/header.component";
import HeaderMobile from "../components/header-mobile/header-mobile.component";
import Announcement from "../components/announcement/announcement.component";
import NewsLetter from "../components/newsletter/newsletter.component";
import Footer from "../components/footer/footer.component";
import ShopProduct from "../components/product-shop/product-shop.compnent";



const Container = styled.div``;
const Wrapper = styled.div``;

const ShopPage = () => {
  return (
    <Container>
      <Announcement />
      <Wrapper className="Desktop">
        <Header />
      </Wrapper>
      <Wrapper className="Mobile">
        <HeaderMobile />
      </Wrapper>
      <ShopProduct />
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default ShopPage