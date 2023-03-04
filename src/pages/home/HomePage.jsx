import styled from "styled-components";
import Announcement from "../../components/announcement/announcement.component";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import Nav from "../../components/nav/nav.component";
import Newletter from "../../components/newletter/newletter.component";

const Container = styled.div``;
const HomePage = () => {
  return (
    <Container>
      <Announcement />
      <Header />
      <Footer />
    </Container>
  );
};

export default HomePage;
