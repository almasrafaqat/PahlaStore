import styled from "styled-components";
import Announcement from "../components/announcement/announcement.component";
import Header from "../components/header/header.component";
import HeaderMobile from "../components/header-mobile/header-mobile.component";
import Slider from "../components/slider/slider.component";
import HomeCategories from "../components/home-category/home-categories.component";
import FeaturedProducts from "../components/products-featured/featured-products.component";
import BestSelling from "../components/products-best-selling/best.selling.component";
import ProductDealOffWeak from "../components/product-deal-of-week/product-deal-of-weak.component";
import ProductWidgets from "../components/product-widgets/product-widgets.component";
import NewsLetter from "../components/newsletter/newsletter.component";
import Footer from "../components/footer/footer.component";
import ScrollTop from "../components/scroll-top/scroll-top.component";
import '../responsive.css';

const Container = styled.div``;
const Wrapper = styled.div``;

const HomePage = () => {
  return (
    <Container>
      <Announcement />
      <Wrapper className="Desktop">
        <Header />
      </Wrapper>
      <Wrapper className="Mobile">
        <HeaderMobile />
      </Wrapper>
      <Slider />
      <HomeCategories />
      <FeaturedProducts />
      <BestSelling />
      <ProductDealOffWeak />
      <ProductWidgets />
      <NewsLetter />
      <Footer />
      <ScrollTop />
    </Container>
  );
};

export default HomePage;
