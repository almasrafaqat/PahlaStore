import { Badge } from "@mui/material";
import { Link } from "../../GlobalStyle";
import Nav from "../nav/nav.component";
import {
  CartContainer,
  CartIcon,
  Center,
  Container,
  Input,
  InputContainer,
  Left,
  Logo,
  Right,
  SearchContainer,
  SearchIcon,
  Text,
  UserContainer,
  UserIcon,
  Wrapper,
} from "./header.style";
import DropDown from "../dropdown/dropdown.component";





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
            <SearchContainer className="search-container">
            <DropDown />
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
                  <CartIcon style={{ fontSize: "32px" }} />
                </Badge>

                <Text style={{ marginLeft: "12px" }}>Cart</Text>
              </CartContainer>
            </Link>
            <Link>
              <UserContainer>
                <UserIcon style={{ fontSize: "36px" }} /> <Text>User</Text>
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
