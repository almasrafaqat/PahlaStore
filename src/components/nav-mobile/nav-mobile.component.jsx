import { ClearSharp } from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "../../GlobalStyle";
import { Mobile576, Mobile768 } from "../../responsive";

const Container = styled.div`
  
`;

const Wrapper = styled.div`
 
`;



const MenuItem = styled.ul`
 background: #ececec;
  position: fixed;
  height: 100vh;
  width: 100%;
  max-width: 350px;
  display: block;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 50px 10px;
  line-height: 50px;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.15);
  overflow-y: auto;
`;

const MenuList = styled.li`
  list-style: none;
  margin: 0;
`;

const MenuLink = styled(Link)`
  padding: 0 20px;
  display: block;

  &:hover {
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.white};
  }
`;

const DropdownItem = styled.ul`
  background-color: gray;
  padding-left: 20px;
  width: 100%;
  position: static;
  opacity: 1;
  visibility: visible;
  top: 500px;
`;

const DropdownLink = styled(Link)`
 
`;

const NavMobile = () => {
  return (
    <Container>
      <Wrapper>
        <ClearSharp />
        <MenuItem>
          <MenuList>
            <MenuLink>Home</MenuLink>
          </MenuList>
          <MenuList>
            <MenuLink>About</MenuLink>
          </MenuList>
          <MenuList>
            <MenuLink>Dropdown</MenuLink>
            <DropdownItem>
              <MenuList>
                <DropdownLink>Dropdown 1</DropdownLink>
              </MenuList>
              <MenuList>
                <DropdownLink>Dropdown 2</DropdownLink>
              </MenuList>
              <MenuList>
                <DropdownLink>Dropdown 3</DropdownLink>
              </MenuList>
              <MenuList>
                <DropdownLink>Dropdown 4</DropdownLink>
              </MenuList>
            </DropdownItem>
          </MenuList>
        </MenuItem>
      </Wrapper>
    </Container>
  );
};

export default NavMobile;
