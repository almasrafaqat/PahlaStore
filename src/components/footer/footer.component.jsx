import { Link } from "../../GlobalStyle";
import { Address, Box, Col, Container, CopyRightContainer, Email, FacebookIcon, FlexContainer, HR, IconBg, InstagramIcon, List, ListItem, Logo, LogoContainer, SocialContainer, Telephone, Text, Title, TwitterIcon, Wrapper, YoutubeIcon } from "./footer.style";




const Footer = () => {
  return <Container>
    <Wrapper>
      <Box>
        <Col>
          <LogoContainer>
            <Logo>Almas.</Logo>
          </LogoContainer>
          <Email>support@almasthemes.com</Email>
          <Telephone>(+1)-8888-4545</Telephone>
          <Address>Factory Area , Block no 3 Sialkot, Pakistan</Address>

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
          </SocialContainer>
        </Col>
        <Col>
          <Title>Userful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Col>

        <Col>
          <Title>Customer Care</Title>
          <List>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Contact Support</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>My Account</ListItem>
          </List>
        </Col>


      </Box>
      <HR />
      <CopyRightContainer>
       
          Copyright 2023 - {new Date().getFullYear()} © PahlaStore. All
          rights reserved. Powered by AlmasThemes.
        
      </CopyRightContainer>
    </Wrapper>
  </Container>;
};

export default Footer;
