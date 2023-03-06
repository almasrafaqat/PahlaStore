import styled from "styled-components";
import { Mobile768 } from "../../responsive";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 50px;

  ${Mobile768({ marginBottom: "0px" })};
`;

const Announcement = () => {
  return <Container>Super Deal! Free shipping on orders over $50</Container>;
};

export default Announcement;
