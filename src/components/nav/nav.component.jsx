import {
  Container,
  Content,
  DropdownItem,
  DropdownLink,
  DropdownList,
  HeaderTitle,
  HotDeal,
  HotDealContainer,
  HotIcon,
  HotLineContainer,
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
  SubText,
  Telephone,
  Text,
  TextContainer,
} from "./nav.style";

const Nav = () => {
  return (
    <Navbar>
      <Container>
        <MenuItem>
          <HotDealContainer>
            <MenuList >
              <MenuLink type="hotdeal"> <HotDeal />   <Text>Hot Deal</Text>   </MenuLink>
            </MenuList>
          </HotDealContainer>
          <MenuList>
            <MenuLink to="/"> Home </MenuLink>
          </MenuList>
          <MenuList>
            <MenuLink> About </MenuLink>
          </MenuList>
          <MenuList>
            <MenuLink> Pages </MenuLink>
            <DropdownItem>
              <DropdownList>
                <DropdownLink to="/productdetails/id/title"> Single Page </DropdownLink>
              </DropdownList>
              <DropdownList>
                <DropdownLink to="/cart"> Cart </DropdownLink>
              </DropdownList>
              <DropdownList>
                <DropdownLink to="/checkout"> Checkout </DropdownLink>
              </DropdownList>
              <DropdownList>
                <DropdownLink to="/ordersuccess"> Order Confirm </DropdownLink>
              </DropdownList>
              <DropdownList>
                <DropdownLink to="/shop"> shop  </DropdownLink>
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
        <HotLineContainer>
          <HotIcon style={{ fontSize: "48px" }} />
          <TextContainer>
            <Telephone>(+01) - 8888 475</Telephone>
            <SubText>24/7 Support Center</SubText>
          </TextContainer>
        </HotLineContainer>
      </Container>
    </Navbar>
  );
};

export default Nav;
