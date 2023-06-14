import styled from "styled-components";






/** Range Slider Css */

export const Container = styled.div`
  
 
  
`;


export const Ranger = styled.div`
 
 
 
`;


export const RangeMinMax = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
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
  margin: 0 0.5rem;
  padding: 0 1rem;
  width: 90%;
  
`;



export const Selector = styled.div`
  
  position: absolute;
  top: 50%;
  left: ${(props) => props.left}%;
  transform: translate(-50%, -90%);
  z-index: 1;
  border: 1px solid black;
`;

export const SelectValue = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  margin-bottom: 1rem;
  line-height: 2.5rem;
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
    width: 2.5rem;
    height: 2.5rem;
    background: black;
  }
`;

export const SelectBtn = styled.div`
  width: 3rem;
  height: 1rem;
  border-radius: 50px;
  background: teal;
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
  width: 100%;
  background-color: lightgray;
  border-radius: 5px;
  


  ::-webkit-slider-thumb {
    /* -webkit-appearance: none; */
  width: 50px;
  height: 50px;
  cursor: pointer;
  position: relative;
  z-index: 3;
  }
  

`;