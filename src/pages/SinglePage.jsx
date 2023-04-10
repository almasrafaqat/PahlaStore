import styled from "styled-components";
import "../responsive.css";
import Header from "../components/header/header.component";
import HeaderMobile from "../components/header-mobile/header-mobile.component";
import Announcement from "../components/announcement/announcement.component";
import BasicBreadcrumbs from "../components/breadcrumb/breadcrumb.component";
import { PaddingContainer } from "../GlobalStyle";
import ProductDetails from "../components/product-details/product-details.component";
import NewsLetter from "../components/newsletter/newsletter.component";
import Footer from "../components/footer/footer.component";
import ProductBought from "../components/product-bought/product-bought.component";
import ProductRelated from "../components/product-related/product-related.component";

const Container = styled.div``;
const Wrapper = styled.div``;

const Row = styled(PaddingContainer)`
  margin-bottom: 2rem;
`;

const SinglePage = () => {
  return (
    <Container>
      <Announcement />
      <Wrapper className="Desktop">
        <Header />
      </Wrapper>
      <Wrapper className="Mobile">
        <HeaderMobile />
      </Wrapper>
      <Row>
        <BasicBreadcrumbs />
      </Row>
      <ProductDetails />
      <ProductBought />
      <ProductRelated />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default SinglePage;
