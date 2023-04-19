import styled from "styled-components";
import "../responsive.css";
import Header from "../components/header/header.component";
import HeaderMobile from "../components/header-mobile/header-mobile.component";
import Announcement from "../components/announcement/announcement.component";
import NewsLetter from "../components/newsletter/newsletter.component";
import Footer from "../components/footer/footer.component";
import Cart from "../components/cart/cart.component";

const Container = styled.div``;
const Wrapper = styled.div``;

const CartPage = () => {
  return (
    <Container>
      <Announcement />
      <Wrapper className="Desktop">
        <Header />
      </Wrapper>
      <Wrapper className="Mobile">
        <HeaderMobile />
      </Wrapper>
      <Cart/>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default CartPage;
