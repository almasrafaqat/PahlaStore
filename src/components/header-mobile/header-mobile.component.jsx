import {
  LocalFireDepartmentOutlined,
  Person2Outlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Badge, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import { Link } from "../../GlobalStyle";
import NavMobile from "../nav-mobile/nav-mobile.component";
import { UserEventContext } from "../../context/EventsContext";

const Container = styled.div`
  height: 60px;
  line-height: 60px;
  margin-bottom: 150px;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 30px 20px;
  flex-direction: column;
  column-gap: 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Logo = styled.div`
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 600;
`;

/**Right */

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CartIcon = styled(ShoppingCartOutlined)`
  cursor: pointer;
  color: teal;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 15px;
`;

const UserIcon = styled(Person2Outlined)`
  color: teal;
`;

const MenuIconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const IconMenu = styled(MenuIcon)`
  cursor: pointer;
`;

/**  Center */

const Center = styled.div`
  flex: 3;
  margin: 20px 0px;
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
  font-size: 12px;
  font-weight: 600;
  padding: 5px;
  color: #253d4e;
  min-width: 110px;
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

const HeaderMobile = () => {
  const { menuOpen, setMenuOpen } = UserEventContext();
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Logo>Almas.</Logo>
            <IconWrapper>
              <CartContainer>
                <Badge badgeContent="0" color="success">
                  <CartIcon style={{ fontSize: "24px" }} />
                </Badge>
              </CartContainer>
              <UserContainer>
                <UserIcon style={{ fontSize: "28px" }} />
              </UserContainer>
              <MenuIconContainer
                onClick={() => {
                  setMenuOpen((boolen) => !boolen);
                }}
              >
                {!menuOpen && <IconMenu />}
              </MenuIconContainer>
            </IconWrapper>
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
        </Wrapper>
      </Container>
      {menuOpen && <NavMobile style={{ left: "0px" }} />}
    </>
  );
};

export default HeaderMobile;
