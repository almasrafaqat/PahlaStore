import styled from "styled-components";






/** Range Slider Css */

export const Container = styled.div`
  border: 1px solid black;
 
  
`;


export const Ranger = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;



export const RangeMin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
`;
export const RangeMax = styled(RangeMin)``;



export const RangeInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 2.5rem;
  flex: 1;
`;



export const Selector = styled.div`
  
  position: absolute;
  top: 50%;
  left: ${(props) => props.left}%;
  transform: translate(-50%, -90%);
  z-index: 1;
`;

export const SelectValue = styled.div`
  width: 3rem;
  height: 3rem;
  margin-bottom: 1.5rem;
  line-height: 3rem;
  background: yellow;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 50%;

  &:after{
    content: '';
    position: absolute;
    top:0;
    left: 0;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    transform: rotate(45deg);
    z-index: -1;
    width: 3rem;
    height: 3rem;
    background: black;
  }
`;

export const SelectBtn = styled.div`
  width: 3rem;
  height: 1rem;
  border-radius: 50px;
  background: red;
  cursor: pointer;
`;

export const ProgressBar = styled.div`
  position: absolute;
  height: 5px;
  background: teal;
  border-radius: 5px;
  width: ${(props) => props.width}%;
`;

export const Slider = styled.input`
  -webkit-appearance: none;
  height: 5px;
  background-color: lightgray;
  border-radius: 5px;
  


  ::-webkit-slider-thumb {
    -webkit-appearance: none;
  width: 3rem;
  height: 1rem;
  cursor: pointer;
  position: relative;
  z-index: 3;
  }
  

`;