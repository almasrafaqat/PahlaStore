import {
  ClearSharp,
} from "@mui/icons-material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import styled from "styled-components";
import { UserEventContext } from "../../context/EventsContext";
import { Link } from "../../GlobalStyle";
import { Mobile576, Mobile768 } from "../../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  max-width: 350px;
  z-index: 999;
  overflow-y: auto;
  background: #ececec;
  display: block;
  padding: 30px 10px;
  line-height: 50px;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.15);

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: teal;
  padding: 0 20px;
  border-radius: 3px;
`;

const Logo = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
  letter-spacing: 3px;
`;

const CloseIcon = styled(ClearSharp)`
  color: white;
  cursor: pointer;
`;

const MenuItem = styled.ul``;

const MenuLink = styled(Link)`
  padding: 0 20px;
  display: block;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.active === "active" ? "teal" : ""};
  color: ${(props) => props.active === "active" ? "white" : ""};

  

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const DropdownItem = styled.ul`
  padding-left: 20px;
  width: 100%;
  opacity: 1;
  visibility: visible;
  transition: all 0.9s ease;
  position: static;
  max-height: 0;
  overflow: hidden;
`;

const DropdownList = styled.li`
  list-style: none;
  margin-top: 0;
  &:first-child {
    margin-top: 15px;
  }
`;

const DropdownLink = styled(MenuLink)`
  font-size: 16px;
  font-weight: 500;
  
`;

/**Mega Menu */

const MegaBox = styled.div`
  margin-top: 20px;
  max-height: 0;
  transition: all 0.9s ease;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0 20px;
`;

const Row = styled.div`
  width: 100%;
  margin-bottom: 15px;
  border-top: 1px solid teal;

  &:nth-child(1),
  :nth-child(2) {
    border-top: 0px;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const HeaderTitle = styled.header`
  font-size: 19px;
  font-weight: 500;
`;

const MegaItem = styled.ul`
  padding-left: 20px;
`;

const MegaList = styled.li`
  list-style: none;
  margin: 0;
`;

const MegaLink = styled(MenuLink)`
  font-size: 16px;
  font-weight: 500;
`;

const MenuList = styled.li`
  list-style: none;
  margin: 15px 10px;
`;

const ArrowIcon = styled(KeyboardArrowDownIcon)`
  
`;



const NavMobile = () => {
  const { setMenuOpen } = UserEventContext();
  const [visible, setVisible] = useState(
    { dropdown: false, megaMenu: false },

  );

  const DropdownHanlder = (event) => {
    event.preventDefault();
    var name = event.target.name;

    // console.log("event: ", name);
    var UlItem = event.target.nextElementSibling;
    if (UlItem.style.maxHeight) {
      UlItem.style.maxHeight = null;
      if (name === "dropdown") {
        setVisible({ dropdown: false });
      }
      if (name === "megaMenu") {
        setVisible({ megaMenu: false });
      }



    } else {
      UlItem.style.maxHeight = UlItem.scrollHeight + "px";
      if (name === "dropdown") {
        setVisible({ dropdown: true });
      }
      if (name === "megaMenu") {
        setVisible({ megaMenu: true });
      }
    }
  };


  return (
    <Container>
      <Wrapper>
        <Header>
          <Logo>Almas.</Logo>
          <CloseIcon
            onClick={() => {
              setMenuOpen((boolen) => !boolen);
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
            <MenuLink active={`${visible.dropdown ? "active" : "inactive"}`} name="dropdown" onClick={DropdownHanlder} >
              Dropdown
              <ArrowIcon

                style={{
                  fontSize: "28px",
                  transition: "all 0.5s ease",
                  transform: `rotate(${visible.dropdown ? "0.5turn" : 0})`,
                }}
              />
            </MenuLink>
            <DropdownItem>
              <DropdownList>
                <DropdownLink>Dropdown 1 </DropdownLink>
              </DropdownList>
              <DropdownList>
                <DropdownLink>Dropdown 2</DropdownLink>
              </DropdownList>
              <DropdownList>
                <DropdownLink>Dropdown 3</DropdownLink>
              </DropdownList>
              <DropdownList>
                <DropdownLink>Dropdown 4</DropdownLink>
              </DropdownList>
            </DropdownItem>
          </MenuList>
          <MenuList>
            <MenuLink active={`${visible.megaMenu ? "active" : "inactive"}`} name="megaMenu" onClick={DropdownHanlder}>
              Mega Menu
              <ArrowIcon
                style={{
                  fontSize: "28px",
                  transition: "all 0.5s ease",
                  transform: `rotate(${visible.megaMenu ? "0.5turn" : 0})`,
                }}
              />
            </MenuLink>
            <MegaBox>
              <Content>
                <Row>
                  <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVyoBVQg0JEHNq-rbOPU1WWxj9U3ArpmMlhulg6CjUf3XkRTSUCZqNWNjIYJZ58u56JGs&usqp=CAU" />
                </Row>
                <Row>
                  <HeaderTitle>Graphic Course</HeaderTitle>
                  <MegaItem>
                    <MegaList>
                      <MegaLink>Logo Design</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>UX UL Web Design</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>3D 2D Design</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>Adobe Photoshop</MegaLink>
                    </MegaList>
                  </MegaItem>
                </Row>
                <Row>
                  <HeaderTitle>Programming</HeaderTitle>
                  <MegaItem>
                    <MegaList>
                      <MegaLink>Laravel </MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>React JS</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>HTML</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>Paython</MegaLink>
                    </MegaList>
                  </MegaItem>
                </Row>
                <Row>
                  <HeaderTitle>Digital Marketing</HeaderTitle>
                  <MegaItem>
                    <MegaList>
                      <MegaLink>Google SEO</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>Google Adwords</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>Google Adsense</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>Google My Business</MegaLink>
                    </MegaList>
                  </MegaItem>
                </Row>
                <Row>
                  <HeaderTitle>Freelancing</HeaderTitle>
                  <MegaItem>
                    <MegaList>
                      <MegaLink>Digital Marketer</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>Frontend Web Developer</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>Backend Web Developer</MegaLink>
                    </MegaList>
                    <MegaList>
                      <MegaLink>Full Stack Developer</MegaLink>
                    </MegaList>
                  </MegaItem>
                </Row>
              </Content>
            </MegaBox>
          </MenuList>
          <MenuList>
            <MenuLink>Feedback</MenuLink>
          </MenuList>
        </MenuItem>
      </Wrapper>
    </Container >
  );
};

export default NavMobile;
