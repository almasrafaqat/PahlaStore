import styled from "styled-components";
import Announcement from "../../components/announcement/announcement.component";
import Footer from "../../components/footer/footer.component";
import HeaderMobile from "../../components/header-mobile/header-mobile.component";
import Header from "../../components/header/header.component";
import Newletter from "../../components/newletter/newletter.component";
import "../../responsive.css";

const Container = styled.div``;
const Wrapper = styled.div``;
const HomePage = () => {
  return (
    <Container>
      <Announcement />

      <Wrapper className="Desktop">
        <Header />
      </Wrapper>
      <Wrapper className="obile">
        <HeaderMobile />
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default HomePage;
