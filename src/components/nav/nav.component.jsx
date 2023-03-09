import {
  Container,
  Content,
  DropdownItem,
  DropdownLink,
  DropdownList,
  HeaderTitle,
  Image,
  MegaBox,
  MegaItem,
  MegaLink,
  MegaList,
  MenuItem,
  MenuLink,
  MenuList,
  Navbar,
  Row,
} from "./nav.component.style";

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
            <DropdownItem>
              <DropdownList>
                <DropdownLink> Laravel </DropdownLink>
              </DropdownList>
              <DropdownList>
                <DropdownLink> React JS </DropdownLink>
              </DropdownList>
              <DropdownList>
                <DropdownLink> Django </DropdownLink>
              </DropdownList>
              <DropdownList>
                <DropdownLink> Angular JS </DropdownLink>
              </DropdownList>
            </DropdownItem>
          </MenuList>
          <MenuList>
            <MenuLink> Mega Menu </MenuLink>
            <MegaBox>
              <Content>
                <Row>
                  <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVyoBVQg0JEHNq-rbOPU1WWxj9U3ArpmMlhulg6CjUf3XkRTSUCZqNWNjIYJZ58u56JGs&usqp=CAU" />
                </Row>
                <Row>
                  <HeaderTitle>Programming Course</HeaderTitle>
                  <MegaItem>
                    <MegaList>
                      <MegaLink>HTML CSS</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>PHP Laravel</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>Reacj JS</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>Angular JS</MegaLink>
                    </MegaList>
                  </MegaItem>
                </Row>
                <Row>
                  <HeaderTitle>Graphic Course</HeaderTitle>
                  <MegaItem>
                    <MegaList>
                      <MegaLink>Adobe Photoshop</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>Corel Draw</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>2D 3D Designing</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>Adobe Illustrator</MegaLink>
                    </MegaList>
                  </MegaItem>
                </Row>
                <Row>
                  <HeaderTitle>Programming Course</HeaderTitle>
                  <MegaItem>
                    <MegaList>
                      <MegaLink>HTML CSS</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>PHP Laravel</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>Reacj JS</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>Angular JS</MegaLink>
                    </MegaList>
                  </MegaItem>
                </Row>
              </Content>
            </MegaBox>
          </MenuList>
        </MenuItem>
      </Container>
    </Navbar>
  );
};

export default Nav;
