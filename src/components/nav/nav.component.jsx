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
    background: teal;
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
  opacity: 0;
  visibility: hidden;
`;

/**Mega Menu */

const MegaBox = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  padding: 0px 30px;
  top: 85px;
  opacity: 0;
  visibility: hidden;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ececec;
  padding: 25px 20px;
  width: 100%;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeaderTitle = styled.header`
  color: teal;
  font-size: 20px;
  font-weight: 500;
`;

const MegaItem = styled(MenuItem)`
  display: block;
`;

const MegaItemChild = styled(MegaItem)`
  margin-left: -40px;
  border-left: 1px solid teal;
`;

const Row = styled.div`
  width: calc(25% - 30px);
  line-height: 45px;

  &:nth-child(2) ${MegaItemChild} {
    border: 0px;
  }
`;

const MegaLinks = styled(Link)`
  padding: 0px;
  padding: 0 20px;
  font-size: 17px;
  display: block;

  &:hover {
    background-color: teal;
    color: #fff;
  }
`;

const MenuList = styled.li`
  list-style: none;
  padding: ${(props) => (props.type === "mega-list" ? "0 20px" : "")};

  &:hover ${DropDownItem} {
    transition: all 0.4s ease;
    top: 70px;
    opacity: 1;
    visibility: visible;
  }
  &:hover ${MegaBox} {
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
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVyoBVQg0JEHNq-rbOPU1WWxj9U3ArpmMlhulg6CjUf3XkRTSUCZqNWNjIYJZ58u56JGs&usqp=CAU" />
                  </Row>
                  <Row>
                    <HeaderTitle>Graphic Service</HeaderTitle>
                    <MegaItemChild>
                      <MenuList type="mega-list">
                        <MegaLinks>Graphic Service 1 </MegaLinks>
                      </MenuList>
                      <MenuList type="mega-list">
                        <MegaLinks>Graphic Service 2 </MegaLinks>
                      </MenuList>
                      <MenuList type="mega-list">
                        <MegaLinks>Graphic Service 3 </MegaLinks>
                      </MenuList>
                      <MenuList type="mega-list">
                        <MegaLinks>Graphic Service 4 </MegaLinks>
                      </MenuList>
                    </MegaItemChild>
                  </Row>
                  <Row>
                    <HeaderTitle>Graphic Service</HeaderTitle>
                    <MegaItemChild>
                      <MenuList type="mega-list">
                        <MegaLinks>Graphic Service 1 </MegaLinks>
                      </MenuList>
                      <MenuList type="mega-list">
                        <MegaLinks>Graphic Service 2 </MegaLinks>
                      </MenuList>
                      <MenuList type="mega-list">
                        <MegaLinks>Graphic Service 3 </MegaLinks>
                      </MenuList>
                      <MenuList type="mega-list">
                        <MegaLinks>Graphic Service 4 </MegaLinks>
                      </MenuList>
                    </MegaItemChild>
                  </Row>
                  <Row>
                    <HeaderTitle>Graphic Service</HeaderTitle>
                    <MegaItemChild>
                      <MenuList type="mega-list">
                        <MegaLinks>Graphic Service 1 </MegaLinks>
                      </MenuList>
                      <MenuList type="mega-list">
                        <MegaLinks>Graphic Service 2 </MegaLinks>
                      </MenuList>
                      <MenuList type="mega-list">
                        <MegaLinks>Graphic Service 3 </MegaLinks>
                      </MenuList>
                      <MenuList type="mega-list">
                        <MegaLinks>Graphic Service 4 </MegaLinks>
                      </MenuList>
                    </MegaItemChild>
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
