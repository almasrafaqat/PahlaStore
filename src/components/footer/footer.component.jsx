import { Link } from "../../GlobalStyle";
import {
  Address,
  Box,
  Col,
  Container,
  Content,
  CopyRightContainer,
  CustomerCareContainer,
  Description,
  Email,
  EmailIcon,
  FacebookIcon,
  FlexContainer,
  HR,
  IconBg,
  Image,
  InfoContainer,
  InstagramIcon,
  List,
  ListItem,
  LocationIcon,
  Logo,
  LogoContainer,
  SocialContainer,
  Telephone,
  TelephoneIcon,
  Text,
  Title,
  TwitterIcon,
  Wrapper,
  YoutubeIcon,
} from "./footer.style";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <Col>
            <InfoContainer>
              <LogoContainer>
                <Logo>Almas.</Logo>
              </LogoContainer>
              <FlexContainer>
                <EmailIcon />
                <Link>
                  <Email>support@almasthemes.com</Email>
                </Link>
              </FlexContainer>

              <FlexContainer>
                <TelephoneIcon />
                <Link>
                  <Telephone>(+01)-4444-8888</Telephone>
                </Link>
              </FlexContainer>

              <FlexContainer>
                <LocationIcon />
                <Link>
                  <Address>Factory Area , Block no 3 Sialkot, Pakistan</Address>
                </Link>
              </FlexContainer>

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
            </InfoContainer>
          </Col>
          <Col type="links">
            <Title>Userful Links</Title>
            <List>
              <ListItem>
                <Link>Home</Link>
              </ListItem>
              <ListItem>
                <Link>Cart</Link>
              </ListItem>
              <ListItem>
                <Link>Men Fashion</Link>
              </ListItem>
              <ListItem>
                <Link>Women Fashion</Link>
              </ListItem>
              <ListItem>
                <Link>Accessories</Link>
              </ListItem>
              <ListItem>
                <Link>My Account</Link>t
              </ListItem>
              <ListItem>
                <Link>Order Tracking</Link>
              </ListItem>
              <ListItem>
                <Link>Wishlist</Link>
              </ListItem>
              <ListItem>
                <Link>Terms & Conditions</Link>
              </ListItem>
              <ListItem>
                <Link>Privacy</Link>
              </ListItem>
            </List>
          </Col>

          <Col>
            <Title>Customer Care</Title>
            <CustomerCareContainer>
              <Content>
                <Description>Secured Payment Gateways</Description>
                <Image src="images/payment-method.png" />
              </Content>

              <Content>
                <Description>From App Store or Google Play</Description>
                <Link>
                  <Image src="images/app-store.jpg" type="store" />{" "}
                </Link>
                <Link>
                  <Image src="images/google-play.jpg" type="store" />
                </Link>
              </Content>
            </CustomerCareContainer>
          </Col>
        </Box>
        <HR />
        <CopyRightContainer>
          Copyright 2023 - {new Date().getFullYear()} © PahlaStore. All rights
          reserved. Powered by AlmasThemes.
        </CopyRightContainer>
      </Wrapper>
    </Container>
  );
};

export default Footer;
