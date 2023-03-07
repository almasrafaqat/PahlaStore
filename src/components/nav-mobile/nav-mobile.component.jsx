import { ClearSharp } from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "../../GlobalStyle";
import { Mobile576, Mobile768 } from "../../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  max-width: 350px;
  z-index: 999;
  overflow-y: auto;
  background: #ececec;
  display: block;
  padding: 30px 10px;
  line-height: 50px;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.15);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: teal;
  padding: 0 20px;
  border-radius: 3px;
`;

const Logo = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
  letter-spacing: 3px;
`;

const CloseIcon = styled(ClearSharp)`
  color: white;
  cursor: pointer;
`;

const MenuItem = styled.ul``;

const MenuLink = styled(Link)`
  padding: 0 20px;
  display: block;
  font-size: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const DropdownItem = styled.ul`
  background-color: gray;
  padding-left: 20px;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  transition: all 0.9s ease;
  position: static;
  top: 500px;
  max-height: 0;
`;

const DropdownList = styled.li`
  list-style: none;
  margin: 0;
`;

const DropdownLink = styled(MenuLink)``;

/**Mega Menu */

const MegaBox = styled.div`
  position: static;
  margin-top: 20px;
  opactiy: 0;
  visibility: hidden;
  max-height: 0;
  transition: all 0.7s ease;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  width: 100%;
  margin-bottom: 15px;
  border-top: 1px solid teal;

  &:first-child {
    border-top: 0px;
  }
`;

const Image = styled.img``;

const HeaderTitle = styled.header`
  font-size: 20px;
  font-weight: 500;
`;

const MegaItem = styled.ul``;

const MegaList = styled.ul``;

const MegaLink = styled(MenuLink)`
  font-size: 16px;
  font-weight: 500;
`;

const MenuList = styled.li`
  list-style: none;
  margin: 15px 10px;

  &:hover ${DropdownItem} {
    opacity: 1;
    visibility: visible;
    max-height: 100%;
  }

  &:hover ${MegaBox} {
    opacity: 1;
    visibility: visible;
    max-height: 100%;
  }
`;

const NavMobile = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Logo>Almas.</Logo>
          <CloseIcon />
        </Header>

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
              <DropdownList>
                <DropdownLink>Dropdown 1</DropdownLink>
              </DropdownList>
              <DropdownList>
                <DropdownLink>Dropdown 2</DropdownLink>
              </DropdownList>
              <DropdownList>
                <DropdownLink>Dropdown 3</DropdownLink>
              </DropdownList>
              <DropdownList>
                <DropdownLink>Dropdown 4</DropdownLink>
              </DropdownList>
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
                  <HeaderTitle>Graphic Course</HeaderTitle>
                  <MegaItem>
                    <MegaList>
                      <MegaLink>Logo Design</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>UX UL Web Design</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>3D 2D Design</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>Adobe Photoshop</MegaLink>
                    </MegaList>
                  </MegaItem>
                </Row>
                <Row>
                  <HeaderTitle>Programming</HeaderTitle>
                  <MegaItem>
                    <MegaList>
                      <MegaLink>Laravel </MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>React JS</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>HTML</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>Paython</MegaLink>
                    </MegaList>
                  </MegaItem>
                </Row>
                <Row>
                  <HeaderTitle>Digital Marketing</HeaderTitle>
                  <MegaItem>
                    <MegaList>
                      <MegaLink>Google SEO</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>Google Adwords</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>Google Adsense</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>Google My Business</MegaLink>
                    </MegaList>
                  </MegaItem>
                </Row>
                <Row>
                  <HeaderTitle>Freelancing</HeaderTitle>
                  <MegaItem>
                    <MegaList>
                      <MegaLink>Digital Marketer</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>Frontend Web Developer</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>Backend Web Developer</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>Full Stack Developer</MegaLink>
                    </MegaList>
                  </MegaItem>
                </Row>
              </Content>
            </MegaBox>
          </MenuList>
          <MenuList>
            <MenuLink>Feedback</MenuLink>
          </MenuList>
        </MenuItem>
      </Wrapper>
    </Container>
  );
};

export default NavMobile;
