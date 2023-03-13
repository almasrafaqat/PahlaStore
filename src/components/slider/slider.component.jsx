import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import styled from "styled-components";
import { MarginBottomContainer } from "../../GlobalStyle"

const Container = styled(MarginBottomContainer)`
    padding: 30px 20px;
    
`;


const Wrapper = styled.div`
    width: 100%;
    height: 60vh;
    border: 1px solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-radius: 30px;
    background-color: aliceblue;
    z-index: 1;
`;

const ArrowContainer = styled.div`
    width : 40px;
    height : 40px;
    border-radius : 50%;
    background-color: ${({ theme }) => theme.colors.border};
   
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    left: ${(props => props.direction === "left" && "10px")};
    right: ${(props => props.direction === "right" && "10px")};
    transition: all 0.5s ease-in-out;
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
    }


`;

const ArrowLeft = styled(KeyboardArrowLeft)``;

const ArrowRight = styled(KeyboardArrowRight)``;

const SliderContainer = styled.div``;


const Slider = () => {
    return (
        <Container>
            <Wrapper>
                <ArrowContainer direction="left">
                    <ArrowLeft />
                </ArrowContainer>
                <ArrowContainer direction="right">
                    <ArrowRight />
                </ArrowContainer>
            </Wrapper>
        </Container>
    )
}

export default Slider