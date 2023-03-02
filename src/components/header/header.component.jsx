import {
  LocalFireDepartmentOutlined,
  Person2Outlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import styled from "styled-components";
import { Link } from "../../GlobalStyle";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 30px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;

const Logo = styled.div`
  text-transform: uppercase;
  font-size: 32px;
  font-weight: 600;
`;

const Center = styled.div`
  flex: 3;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 10px;
`;

const CategorySelect = styled.select`
  outline: none;
  border: none;
  font-size: 14px;
  padding: 5px;
  color: #253d4e;
  min-width: 150px;
`;

const CategoryOption = styled.option`
  font-size: 16px;
  font-weight: 300;
`;

const SearchDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
`;

const SearchIcon = styled(SearchOutlined)`
  color: gray;
  cursor: pointer;

  &:hover {
    transform: scale(1.4);
    transition: all 0.5s ease;
  }
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-evenly;
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CartIcon = styled(ShoppingCartOutlined)`
  cursor: pointer;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserIcon = styled(Person2Outlined)``;

/** Navbar Design */

/**Mega Menu */

const Nav = styled.div`
  padding: 0px 20px;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
  position: fixed;
  width: 100%;
  z-index: 99;
`;

const NavWrapper = styled.div`
  max-width: 1300px;
  height: 70px;
  line-height: 70px;
  position: relative;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuItem = styled.ul`
  display: inline-flex;
`;

const DropMenu = styled.ul`
  position: absolute;
  background: #242526;
  width: 180px;
  top: 85px;
  line-height: 45px;
  border-radius: 5px;
  opacity: 0;
  visibility: visible;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
`;



const ItemLink = styled(Link)`
  padding: 9px 15px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #3a3b3c;
  }
`;

/**Mega Menu */

const MegaBox = styled.div`
  background: gray;
  position: absolute;
  left: 0;
  width: 100%;
  padding: 0px 30px;
  top: 85px;
  opacity: 0;
  visibility : hidden;
`;

const ItemList = styled.li`
  list-style: none;

  &:hover ${DropMenu }  {
    transition: all 0.3s ease;
    top: 70px;
    opacity: 1;
    visibility: visible;
  }
  &:hover ${MegaBox }  {
    transition: all 0.3s ease;
    top: 70px;
    opacity: 1;
    visibility: visible;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  padding: 30px 20px;
  width: 100%;
`;

const HeaderTitle = styled.header`
  color: #f2f2f2;
  font-size: 20px;
  font-weight: 500;
`;

const Row = styled.div`
  width: calc(25% - 30px);
  line-height: 45px;
`;

const MegaItem = styled.ul`
  margin-left: -40px;
  border-left: 1px solid rgba(255, 255, 255, 0.09);
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <Link>Almas.</Link>
          </Logo>
        </Left>
        <Center>
          <SearchWrapper>
            <CategorySelect>
              <CategoryOption disabled>Select Category</CategoryOption>
              <CategoryOption>Laptops</CategoryOption>
              <CategoryOption>Smartphone</CategoryOption>
              <CategoryOption>Women Dresses</CategoryOption>
            </CategorySelect>
            <SearchDiv>
              <Input placeholder="Search the Products" />
              <SearchIcon />
            </SearchDiv>
          </SearchWrapper>
        </Center>
        <Right>
          <CartContainer>
            <Badge overlap="rectangular" badgeContent="0" color="primary">
              <CartIcon />
            </Badge>
            <span style={{ marginLeft: "10px" }}>Cart</span>
          </CartContainer>
          <UserContainer>
            <UserIcon />
            <span style={{ marginLeft: "5px" }}>User</span>
          </UserContainer>
        </Right>
      </Wrapper>
      <Nav>
        <NavWrapper>
          <MenuItem>
            <ItemList>
              <ItemLink to="/">Home</ItemLink>
            </ItemList>
            <ItemList>
              <ItemLink to="/">About</ItemLink>
            </ItemList>
            <ItemList>
              <ItemLink to="/">DropDown</ItemLink>
              <DropMenu type="dropdown">
                <ItemList>
                  <ItemLink>DropDown 1</ItemLink>
                </ItemList>
                <ItemList>
                  <ItemLink>DropDown 1</ItemLink>
                </ItemList>
                <ItemList>
                  <ItemLink>DropDown 1</ItemLink>
                </ItemList>
                <ItemList>
                  <ItemLink>DropDown 1</ItemLink>
                </ItemList>
              </DropMenu>
            </ItemList>
            <ItemList>
              <ItemLink>Mega Menu</ItemLink>
              <MegaBox>
                <Content>
                  <Row>
                    <HeaderTitle>Programming</HeaderTitle>
                    <MegaItem>
                      <ItemList>
                        <ItemLink>Service 1</ItemLink>
                      </ItemList>
                      <ItemList>
                        <ItemLink>Service 1</ItemLink>
                      </ItemList>
                      <ItemList>
                        <ItemLink>Service 1</ItemLink>
                      </ItemList>
                    </MegaItem>
                  </Row>
                  <Row>
                    <HeaderTitle>Coding</HeaderTitle>
                    <MegaItem>
                      <ItemList>
                        <ItemLink>Coding 1</ItemLink>
                      </ItemList>
                      <ItemList>
                        <ItemLink>Coding 1</ItemLink>
                      </ItemList>
                      <ItemList>
                        <ItemLink>Coding 1</ItemLink>
                      </ItemList>
                    </MegaItem>
                  </Row>
                  <Row>
                    <HeaderTitle>Programming</HeaderTitle>
                    <MegaItem>
                      <ItemList>
                        <ItemLink>Service 1</ItemLink>
                      </ItemList>
                      <ItemList>
                        <ItemLink>Service 1</ItemLink>
                      </ItemList>
                      <ItemList>
                        <ItemLink>Service 1</ItemLink>
                      </ItemList>
                    </MegaItem>
                  </Row>
                </Content>
              </MegaBox>
            </ItemList>
          </MenuItem>
        </NavWrapper>
      </Nav>
    </Container>
  );
};

export default Header;
