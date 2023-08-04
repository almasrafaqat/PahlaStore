import { Badge } from "@mui/material";
import NavMobile from "../nav-mobile/nav-mobile.component";
import { useGlobalContext } from "../../context/GlobalContext";
import {
  CartContainer,
  CartIcon,
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
import DropDown from "../dropdown/dropdown.component";

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
             <DropDown/>
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
