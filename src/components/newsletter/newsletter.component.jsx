import {
  Box,
  Button,
  Container,
  Image,
  ImageContainer,
  InfoContainer,
  Input,
  InputContainer,
  SendIcon,
  ShortDescription,
  Title,
  Wrapper,
} from "./newsletter.style";

const NewsLetter = () => {
  return (
    <Container>
      <Wrapper>
        <InfoContainer>
          <Title>Get timely updates from your favorite products</Title>
          <ShortDescription>
            Save upto 50% off on your first order
          </ShortDescription>
          <InputContainer>
            <SendIcon />
            <Input placeholder="Your email address" />
            <Button>Subscribe</Button>
          </InputContainer>
        </InfoContainer>
        <ImageContainer>
          <Image src="/images/products/imac.png" />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default NewsLetter;
