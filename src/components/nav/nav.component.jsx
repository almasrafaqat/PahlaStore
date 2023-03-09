import styled from "styled-components";
import { Link } from "../../GlobalStyle";


const Navbar = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  height: 70px;
  line-height: 70px;;

`;

const Container = styled.div`
  padding: 0px 20px;
`;

const MenuItem = styled.ul`
  display: inline-flex;
`;

const MenuList = styled.li`
  list-style: none;
`;

const MenuLink = styled(Link)`
  padding: 9px 15px;
  
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.4s ease-in-out;
  &:hover{
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Nav = () => {
  return (
    <Navbar>
      <Container>
        <MenuItem>
          <MenuList>
            <MenuLink> Home </MenuLink>
          </MenuList>
          <MenuList>
            <MenuLink> About </MenuLink>
          </MenuList>
          <MenuList>
            <MenuLink> Dropdown </MenuLink>
          </MenuList>
          <MenuList>
            <MenuLink> Mega Menu </MenuLink>
          </MenuList>
        </MenuItem>
      </Container>
    </Navbar>
  );
};

export default Nav;
