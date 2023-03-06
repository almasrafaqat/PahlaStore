import { ClearSharp } from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "../../GlobalStyle";
import { Mobile576, Mobile768 } from "../../responsive";

const Container = styled.div`
  border: 1px solid black;
`;

const Wrapper = styled.div`
  background: #ececec;
  position: fixed;
  // width: 80vw;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 20px 50px;

  ${Mobile768({ width: "70vw" })};
  ${Mobile576({ width: "100vw" })};
`;

const MenuItem = styled.ul``;

const MenuList = styled.li``;

const NavMobile = () => {
  return (
    <Container>
      <Wrapper>
        <ClearSharp />
        <MenuItem>
          <MenuList>
            <Link>Home</Link>
          </MenuList>
        </MenuItem>
      </Wrapper>
    </Container>
  );
};

export default NavMobile;
