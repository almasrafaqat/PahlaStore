import { Link } from "../../GlobalStyle";
import { useGlobalContext } from "../../context/GlobalContext";
import {
  ArrowIcon,
  CloseIcon,
  Container,
  Content,
  CopyRightContainer,
  DropdownItem,
  DropdownList,
  FacebookIcon,
  FlexContainer,
  Footer,
  Header,
  HeaderTitle,
  IconBg,
  Image,
  InfoContainer,
  InstagramIcon,
  LocationIcon,
  Logo,
  MegaBox,
  MegaItem,
  MegaList,
  MenuItem,
  MenuLink,
  MenuList,
  Navbar,
  Row,
  SocialContainer,
  SubLink,
  TelephoneIcon,
  Text,
  TwitterIcon,
  UserIcon,
  YoutubeIcon,
} from "./nav-mobile.style";

const NavMobile = () => {
  const { isMenuOpen, setIsMenuOpen, isDropdownOpen, setIsDropdownOpen, DropMenuHandler } =
    useGlobalContext();



  return (
    <Navbar>
      <Container>
        <Header>
          <Logo>Almas.</Logo>
          <CloseIcon
            onClick={() => {
              setIsMenuOpen((boolen) => !boolen);
            }}
          />
        </Header>
        <MenuItem>
          <MenuList>
            <MenuLink>Home</MenuLink>
          </MenuList>
          <MenuList>
            <MenuLink>About</MenuLink>
          </MenuList>
          <MenuList>
            <MenuLink
              active={`${isDropdownOpen.dropdown ? "active" : "inactive"}`}
              name="dropdown"
              onClick={DropMenuHandler}
            >
              Dropdown
              <ArrowIcon
                style={{
                  fontSize: "28px",
                  transition: "all 0.5s ease",
                  transform: `rotate(${isDropdownOpen.dropdown ? "0.5turn" : 0
                    })`,
                }}
              />
            </MenuLink>
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
            <MenuLink
              active={`${isDropdownOpen.megaMenu ? "active" : "inactive"}`}
              name="mega-menu"
              onClick={DropMenuHandler}
            >
              Mega Menu
              <ArrowIcon
                style={{
                  fontSize: "28px",
                  transition: "all 0.5s ease",
                  transform: `rotate(${isDropdownOpen.megaMenu ? "0.5turn" : 0
                    })`,
                }}
              />
            </MenuLink>
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
        <Footer>
          <InfoContainer>
            <FlexContainer>
              <LocationIcon />
              <Link>
                <Text>Our Location</Text>
              </Link>
            </FlexContainer>
            <FlexContainer>
              <UserIcon />
              <Link>
                <Text>Sign In /Sing Up</Text>
              </Link>
            </FlexContainer>
            <FlexContainer>
              <TelephoneIcon />
              <Link>
                <Text>(+01)-4444-8888</Text>
              </Link>
            </FlexContainer>
          </InfoContainer>
          <SocialContainer>
            <Text type="social">Follow US</Text>
            <FlexContainer>
              <Link>
                <IconBg>
                  <FacebookIcon />
                </IconBg>
              </Link>
              <Link>
                <IconBg>
                  <YoutubeIcon />
                </IconBg>
              </Link>
              <Link>
                <IconBg>
                  <TwitterIcon />
                </IconBg>
              </Link>
              <Link>
                <IconBg>
                  <InstagramIcon />
                </IconBg>
              </Link>
            </FlexContainer>
            <CopyRightContainer>
              <FlexContainer>
                Copyright 2023 - {new Date().getFullYear()} © PahlaStore. All
                rights reserved. Powered by AlmasThemes.
              </FlexContainer>
            </CopyRightContainer>
          </SocialContainer>
        </Footer>
      </Container>
    </Navbar>
  );
};

export default NavMobile;
