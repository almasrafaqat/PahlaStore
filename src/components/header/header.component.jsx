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
  padding: ${(props) => (props.type !== "menu" ? "30px 20px" : "0px 20px")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: ${(props) => (props.type === "menu" ? "1px solid #ececec" : "")};
  border-bottom: ${(props) =>
    props.type === "menu" ? "1px solid #ececec" : ""};
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

const MenuItem = styled.ul`
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 50px;
  display: flex;
  align-items: center;
`;

const Deals = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 12px;
`;

const DealIcon = styled.span``;
const DealText = styled.span`
  font-size: 18px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
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
      <Wrapper type="menu">
        <MenuItem>
          <ListItem type="deals">
            <Deals>
              <DealIcon>
                <LocalFireDepartmentOutlined />
              </DealIcon>
              <Link to="/">
                <DealText>Deals</DealText>
              </Link>
            </Deals>
          </ListItem>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/about">About</Link>
          </ListItem>
          <ListItem>
            <Link to="/about">Contact</Link>
          </ListItem>
          <ListItem>
            <Link to="/about">Mega Menu</Link>
          </ListItem>
        </MenuItem>
      </Wrapper>
    </Container>
  );
};

export default Header;
