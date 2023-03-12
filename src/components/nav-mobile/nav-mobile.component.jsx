import { ClearSharp } from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "../../GlobalStyle";

const Navbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 350px;
  height: 100vh;
  
`;

const Container = styled.div`
  background-color: #ececec;
  height: 100%;
  width: 100%;
  padding: 20px 20px 0 20px;
  line-height: 20px;
  overflow-y: auto;
  
`;

const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.white};
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const CloseIcon = styled(ClearSharp)`
  cursor: pointer;
  
  &:hover{
    transform: scale(1.4);
    transition: all 0.3s ease-in-out;
  }
`;

/** Navbar Menu */

const MenuItem = styled.ul`
  
`;

const MenuList = styled.li`
  list-style: none;
  margin: 10px 10px;
`;

const MenuLink = styled(Link)`
  display: block;
  width: 100%;
  padding : 9px 15px;
  font-size: 20px;
  border-radius: 5px;
  
  &:hover{
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const SubLink = styled(MenuLink)`
  font-size: 16px;
`;

/** Dropdown Menu */

const DropdownItem = styled.ul`
  padding-left: 20px;
  /* max-height: 0; */
  transition: all 0.5s ease-in-out;
  overflow: hidden;
`;

const DropdownList = styled(MenuList)`
  margin:0;
  &:first-child{
    margin-top: 10px;
  }
`;


/** Mega Menu */

const MegaBox = styled.div`
  margin-top: 20px;
`;

const Content = styled.div`

  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  padding: 20px 0;
  border-top: 1px solid ${({theme}) => theme.colors.primary};

  &:nth-child(1), &:nth-child(2){
    border-top: 0;
  }
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const HeaderTitle = styled.header`
  font-size: 20px;
  font-weight: 500;
`;

const MegaItem = styled(DropdownItem)``;

const MegaList = styled(DropdownList)``;


/**Footer */
const Footer = styled.div``;

const InfoContainer = styled.div``;

const SocialContainer = styled.div``;

const CopyRightContainer = styled.div``;






const NavMobile = () => {

  const DropMenuHandler = (event) => {
    event.preventDefault();
    const UL = event.target.nextElementSibling;

    if (UL.style.maxHeight) {
      UL.style.maxHeight = null;
    } else {
      UL.style.maxHeight = UL.scrollHeight + "px";
    }
  }

  return (
    <Navbar>
      <Container>
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
            <MenuLink onClick={DropMenuHandler}>Dropdown</MenuLink>
            <DropdownItem>
              <DropdownList>
                <SubLink>Laravel</SubLink>
              </DropdownList>
              <DropdownList>
                <SubLink>React JS</SubLink>
              </DropdownList>
              <DropdownList>
                <SubLink>MYsql</SubLink>
              </DropdownList>
              <DropdownList>
                <SubLink>Python</SubLink>
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
                  <HeaderTitle>Programming Course</HeaderTitle>
                  <MegaItem>
                    <MegaList>
                      <SubLink>Frontend Web Developer</SubLink>
                    </MegaList>
                    <MegaList>
                      <SubLink>Backend Web Developer</SubLink>
                    </MegaList>
                    <MegaList>
                      <SubLink>Full Stack Web Developer</SubLink>
                    </MegaList>
                  </MegaItem>
                </Row>
                <Row>
                  <HeaderTitle>Programming Course</HeaderTitle>
                  <MegaItem>
                    <MegaList>
                      <SubLink>Frontend Web Developer</SubLink>
                    </MegaList>
                    <MegaList>
                      <SubLink>Backend Web Developer</SubLink>
                    </MegaList>
                    <MegaList>
                      <SubLink>Full Stack Web Developer</SubLink>
                    </MegaList>
                  </MegaItem>
                </Row>
                <Row>
                  <HeaderTitle>Freelancing Course</HeaderTitle>
                  <MegaItem>
                    <MegaList>
                      <SubLink>Frontend Web Developer</SubLink>
                    </MegaList>
                    <MegaList>
                      <SubLink>Backend Web Developer</SubLink>
                    </MegaList>
                    <MegaList>
                      <SubLink>Full Stack Web Developer</SubLink>
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

export default NavMobile;
