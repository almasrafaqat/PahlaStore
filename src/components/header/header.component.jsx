import {
  LocalFireDepartmentOutlined,
  Person2Outlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Badge } from "@mui/material";

import styled from "styled-components";
import { Link } from "../../GlobalStyle";
import Nav from "../nav/nav.component";

const Container = styled.div`
  height: 60px;
  line-height: 60px;
  margin-bottom: 70px;
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

const SearchContainer = styled.div`
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
const InputContainer = styled.div`
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
  flex: 1;
  display: flex;
  justify-content: space-evenly;
`;
const CartContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const CartIcon = styled(ShoppingCartOutlined)`
  
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserIcon = styled(Person2Outlined)``;

const Text = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const Header = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Link to="/">
              <Logo>Almas.</Logo>
            </Link>
          </Left>
          <Center>
            <SearchContainer>
              <CategorySelect>
                <CategoryOption disabled>Select Category</CategoryOption>
                <CategoryOption>Laptops</CategoryOption>
                <CategoryOption>Smartphone</CategoryOption>
                <CategoryOption>Women Dresses</CategoryOption>
              </CategorySelect>
              <InputContainer>
                <Input placeholder="Searh the Products" />
                <SearchIcon />
              </InputContainer>
            </SearchContainer>
          </Center>
          <Right>
            <Link to="/cart">
              <CartContainer>
                <Badge badgeContent="0" color="success">
                  <CartIcon style={{fontSize: "32px"}} />
                </Badge>

                <Text style={{ marginLeft: "12px" }}>Cart</Text>
              </CartContainer>
            </Link>
            <Link>
              <UserContainer>
                <UserIcon style={{fontSize: "36px"}} /> <Text>User</Text>
              </UserContainer>
            </Link>
          </Right>
        </Wrapper>
      </Container>
      <Nav />
    </>
  );
};

export default Header;
