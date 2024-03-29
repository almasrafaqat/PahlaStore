import { useGlobalContext } from "../../context/GlobalContext";
import {
  ArrowContainer,
  ArrowLeft,
  ArrowRight,
  Button,
  Container,
  Description,
  Image,
  ImageContainer,
  InfoContainer,
  Slide,
  SlideBox,
  Title,
  Wrapper,
} from "./slider.style";

const Slider = () => {
  const { slideIndex, SlideHandler } = useGlobalContext();
  return (
    <Container>
      <ArrowContainer direction="left" onClick={() => SlideHandler("left")}>
        <ArrowLeft />
      </ArrowContainer>
      <Wrapper slideIndex={slideIndex}>
        <SlideBox>
          <Slide bg="#FAF0E6">
            <ImageContainer>
              <Image src="/images/slider5.png" />
            </ImageContainer>
            <InfoContainer>
              <Title>
              TIMEPIECES THAT MAKE A STATEMENT UP TO 40% OFF 1
              </Title>
              <Description>
                eu gravida lacus. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Integer et neque
              </Description>
              <Button>Show Now!</Button>
            </InfoContainer>
          </Slide>
        </SlideBox>
        <SlideBox>
          <Slide bg="#E6E6FA">
            <ImageContainer>
              <Image src="/images/slider2.png" />
            </ImageContainer>
            <InfoContainer>
              <Title>
              TIMEPIECES THAT MAKE A STATEMENT UP TO 40% OFF 2
              </Title>
              <Description>
                eu gravida lacus. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Integer et neque
              </Description>
              <Button>Show Now!</Button>
            </InfoContainer>
          </Slide>
        </SlideBox>
        <SlideBox>
          <Slide bg="#F0FFFF">
            <ImageContainer>
              <Image src="/images/slider3.png" />
            </ImageContainer>
            <InfoContainer>
              <Title>
              TIMEPIECES THAT MAKE A STATEMENT UP TO 40% OFF 3
              </Title>
              <Description>
                eu gravida lacus. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Integer et neque
              </Description>
              <Button>Show Now!</Button>
            </InfoContainer>
          </Slide>
        </SlideBox>
      </Wrapper>
      <ArrowContainer direction="right" onClick={() => SlideHandler("right")}>
        <ArrowRight />
      </ArrowContainer>
    </Container>
  );
};

export default Slider;
