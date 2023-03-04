import styled from "styled-components";
import { Link } from "../../GlobalStyle";

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
  height: 70px;
  line-height: 70px;
  position: relative;
  padding: 0px 30px;
`;

const MenuItem = styled.ul`
  display: inline-flex;
`;

const MenuLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  padding: 9px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background: #3a3b3c;
    color: #fff;
  }
`;

const DropDownLink = styled(MenuLink)`
  width: 100%;
  display: block;
  padding: 0 0 0 15px;
  font-weight: 400;
  border-radius: 0px;
`;

/** DropDown Item  */

const DropDownItem = styled(MenuItem)`
  display: block;
  background: #ececec;
  width: 180px;
  line-height: 45px;
  top: 80px;
  position: absolute;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  opacity: 0;
  visibility: hidden;
`;

/**Mega Menu */

const MegaBox = styled.div``;

const Content = styled.div``;

const Row = styled.div``;

const HeaderTitle = styled.header``;

const MegaItem = styled(MenuItem)`
  display: block;
`;

const MenuList = styled.li`
  list-style: none;

  &:hover ${DropDownItem} {
    transition: all 0.4s ease;
    top: 70px;
    opacity: 1;
    visibility: visible;
  }
`;

const Nav = () => {
  return (
    <Container>
      <Wrapper>
        <MenuItem>
          <MenuList>
            <MenuLink>Home</MenuLink>
          </MenuList>
          <MenuList>
            <MenuLink>About</MenuLink>
          </MenuList>
          <MenuList>
            <MenuLink>DropDown</MenuLink>
            <DropDownItem type="dropdown">
              <MenuList>
                <DropDownLink type="dropdown-link">DropDown 1</DropDownLink>
              </MenuList>
              <MenuList>
                <DropDownLink>DropDown 2</DropDownLink>
              </MenuList>
              <MenuList>
                <DropDownLink>DropDown 3</DropDownLink>
              </MenuList>
              <MenuList>
                <DropDownLink>DropDown 4</DropDownLink>
              </MenuList>
              <MenuList>
                <DropDownLink>DropDown 4</DropDownLink>
              </MenuList>
            </DropDownItem>
          </MenuList>
          <MenuList>
            <MenuLink>Mega Menu</MenuLink>
            <MegaItem>
              <MegaBox>
                <Content>
                  <Row>
                    <HeaderTitle>Graphic Service</HeaderTitle>
                    <MenuList>
                      <MenuLink>Graphic Service 1</MenuLink>
                    </MenuList>
                  </Row>
                </Content>
              </MegaBox>
            </MegaItem>
          </MenuList>
        </MenuItem>
      </Wrapper>
    </Container>
  );
};

export default Nav;
