import styled from "styled-components";
import { Link } from "../../GlobalStyle";

const Container = styled.div`
  position: fixed;
  top: 50px;
  width: 100%;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
`;

const Nav = styled.div`
  padding: 0px 30px;
  height: 70px;
  max-width: 1300px;
  margin: auto;
  line-height: 70px;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 4px;
  transform: uppercase;
  color: teal;
`;

const MenuItem = styled.ul`
  display: inline-flex;
`;

const MenuLink = styled(Link)`
  padding: 9px 15px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

/** Dropdown Menu */

const DropdownItem = styled.ul`
  background: #ececec;
  line-height: 45px;
  width: 180px;
  position: absolute;
  top: 85px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.4s ease;
  opacity: 0;
  visibility: hidden;
`;

const DropdownLink = styled(MenuLink)`
  padding: 0 0 0 15px;
  width: 100%;
  display: block;
  border-radius: 0px;
  font-size: 16px;
  font-weight: 400;
`;

/** Mega Menu */

const MegaBox = styled.div`
  position: absolute;
  top: 85px;
  left: 0;
  width: 100%;
  padding: 0px 30px;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
`;

const Content = styled.div`
  background: #ececec;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 25px 20px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
`;

const Row = styled.div`
  width: calc(25% -30px);
  line-height: 45px;

  &:nth-child(1) ${MegaItem} {
    border: 0px;
    background: orange;
  }
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

const MegaItem = styled.ul`
  margin-left: -40px;
  border-left: 1px solid teal;
`;

const MegaLink = styled(DropdownLink)`
  padding: 0 20px;
`;

/**onHover */
const MenuList = styled.li`
  list-style: none;
  margin: ${(props) => (props.type === "mega-list" ? "0 20px" : "")};

  &:hover ${DropdownItem} {
    top: 70px;
    opacity: 1;
    visibility: visible;
  }
  &:hover ${MegaBox} {
    top: 70px;
    opacity: 1;
    visibility: visible;
  }
`;

const Practice = () => {
  return (
    <Container>
      <Nav>
        <Logo>Almas.</Logo>
        <MenuItem>
          <MenuList>
            <MenuLink>Home</MenuLink>
          </MenuList>
          <MenuList>
            <MenuLink>About</MenuLink>
          </MenuList>
          <MenuList>
            <MenuLink>Dropdown Menu</MenuLink>
            <DropdownItem type="dropdown">
              <MenuList>
                <DropdownLink type="dropdown">Java</DropdownLink>
              </MenuList>
              <MenuList>
                <DropdownLink type="dropdown">Paython | Django</DropdownLink>
              </MenuList>
              <MenuList>
                <DropdownLink type="dropdown">PHP | Laravel</DropdownLink>
              </MenuList>
              <MenuList>
                <DropdownLink type="dropdown">React | JavaScript</DropdownLink>
              </MenuList>
            </DropdownItem>
          </MenuList>
          <MenuList>
            <MenuLink>Mega Menu</MenuLink>
            <MegaBox>
              <Content>
                <Row>
                  <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVyoBVQg0JEHNq-rbOPU1WWxj9U3ArpmMlhulg6CjUf3XkRTSUCZqNWNjIYJZ58u56JGs&usqp=CAU" />
                </Row>
                <Row>
                  <HeaderTitle>Programming</HeaderTitle>
                  <MegaItem>
                    <MenuList type="mega-list">
                      <MegaLink>PHP | Laravel </MegaLink>
                    </MenuList>
                    <MenuList type="mega-list">
                      <MegaLink>Python | Django </MegaLink>
                    </MenuList>
                    <MenuList type="mega-list">
                      <MegaLink>React | JavaScript </MegaLink>
                    </MenuList>
                    <MenuList type="mega-list">
                      <MegaLink>Angular | JavaScript </MegaLink>
                    </MenuList>
                  </MegaItem>
                </Row>
                <Row>
                  <HeaderTitle>Freelancing</HeaderTitle>
                  <MegaItem>
                    <MenuList type="mega-list">
                      <MegaLink>Video Graphic</MegaLink>
                    </MenuList>
                    <MenuList type="mega-list">
                      <MegaLink>Web Developing </MegaLink>
                    </MenuList>
                    <MenuList type="mega-list">
                      <MegaLink>Graphic Designing </MegaLink>
                    </MenuList>
                    <MenuList type="mega-list">
                      <MegaLink>Corel Draw </MegaLink>
                    </MenuList>
                  </MegaItem>
                </Row>
                <Row>
                  <HeaderTitle>Coding Courses</HeaderTitle>
                  <MegaItem>
                    <MenuList type="mega-list">
                      <MegaLink>Frontend Developer</MegaLink>
                    </MenuList>
                    <MenuList type="mega-list">
                      <MegaLink>Backend Developer </MegaLink>
                    </MenuList>
                    <MenuList type="mega-list">
                      <MegaLink> MYsql Database </MegaLink>
                    </MenuList>
                    <MenuList type="mega-list">
                      <MegaLink> Full Stack Devloper </MegaLink>
                    </MenuList>
                  </MegaItem>
                </Row>
              </Content>
            </MegaBox>
          </MenuList>
        </MenuItem>
      </Nav>
    </Container>
  );
};

export default Practice;
