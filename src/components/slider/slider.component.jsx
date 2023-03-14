import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import styled from "styled-components";
import { useGlobalContext } from "../../context/GlobalContext";
import { ButtonPrimary, MarginBottomContainer } from "../../GlobalStyle"

const Container = styled(MarginBottomContainer)`
    width: 100%;
    height: 70vh;
    overflow: hidden;
    position: relative;
    display: flex;
    top: -40px;
   
`;

const ArrowContainer = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    top:0;
    bottom:0;
    margin: auto;
    left: ${props => props.direction === 'left' && "20px"};
    right: ${props => props.direction === 'right' && "20px"};
    cursor: pointer;
    opacity: 0.5;
    z-index:2;
`;

const ArrowLeft = styled(KeyboardArrowLeft)``;
const ArrowRight = styled(KeyboardArrowRight)``;

const Wrapper = styled.div`

    height: 100%;
    display: flex;
    transition: all 0.5s ease-in-out;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

const SlideBox = styled.div`
     display: flex;
     width: 100vw;
     height: 70vh;
    
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props => props.bg};
    padding: 0 50px;
    width: 100%;
   
`;

const ImageContainer = styled.div`
    flex: 1;
   height: 100%;
   padding: 30px 0;
 
  
    
`;

const Image = styled.img`
   height: 80%;
   width: 80%;
   object-fit: contain;
  
   
`;

const InfoContainer = styled.div`
    flex: 1;
`;

const Title = styled.h1`
    font-size: 50px;
    font-weight: 500;
`;

const Description = styled.p`
    margin: 30px 0;
    font-size: 20px;
    letter-spacing: 1px;
`;

const Button = styled(ButtonPrimary)``;



const Slider = () => {
    const {slideIndex, SlideHandler} = useGlobalContext();
    return (
        <Container>
            <ArrowContainer direction="left" onClick={() => SlideHandler("left")}>
                <ArrowLeft />
            </ArrowContainer>
            <Wrapper slideIndex={slideIndex}>
                <SlideBox>
                    <Slide bg="#FAF0E6">
                        <ImageContainer>
                            <Image src="/images/headphone.png" />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>Vestibulum quis aliquam enim. Cras massa tellus, bibendum 1</Title>
                            <Description> eu gravida lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer et neque</Description>
                            <Button>Show Now!</Button>
                        </InfoContainer>
                    </Slide>
                </SlideBox>
                <SlideBox>
                    <Slide bg="#E6E6FA">
                        <ImageContainer>
                            <Image src="/images/ecom.png" />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>Vestibulum quis aliquam enim. Cras massa tellus, bibendum 2</Title>
                            <Description> eu gravida lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer et neque</Description>
                            <Button>Show Now!</Button>
                        </InfoContainer>
                    </Slide>
                </SlideBox>
                <SlideBox>
                    <Slide bg="#F0FFFF">
                        <ImageContainer>
                            <Image src="/images/headphone.png" />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>Vestibulum quis aliquam enim. Cras massa tellus, bibendum 3</Title>
                            <Description> eu gravida lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer et neque</Description>
                            <Button>Show Now!</Button>
                        </InfoContainer>
                    </Slide>
                </SlideBox>
            </Wrapper>
            <ArrowContainer direction="right" onClick={() => SlideHandler("right")}>
                <ArrowRight />
            </ArrowContainer>
        </Container>
    )
}

export default Slider