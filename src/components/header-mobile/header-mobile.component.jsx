import { Badge } from "@mui/material";
import NavMobile from "../nav-mobile/nav-mobile.component";
import { useGlobalContext } from "../../context/GlobalContext";
import {
  CartContainer,
  CartIcon,
  CategoryOption,
  CategorySelect,
  Center,
  Container,
  IconMenu,
  IconWrapper,
  Input,
  InputContainer,
  Left,
  Logo,
  MenuIconContainer,
  SearchContainer,
  SearchIcon,
  UserContainer,
  UserIcon,
  Wrapper,
} from "./header-mobile.style";

const HeaderMobile = () => {
  const { isMenuOpen, setIsMenuOpen } = useGlobalContext();
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
                  setIsMenuOpen((boolen) => !boolen);
                }}
              >
                {!isMenuOpen && <IconMenu />}
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
      {isMenuOpen && <NavMobile />}
    </>
  );
};

export default HeaderMobile;
