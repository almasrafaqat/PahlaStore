import styled from "styled-components";

// excess height to improve interactive area / accessibility
const height = "36px";
const thumbHeight = 25;
const trackHeight = "4px";

// colours
const upperColor = "#ccc";
const lowerColor = "teal";
const thumbColor = "teal";
const thumbHoverColor = "teal";
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;

// Webkit cannot style progress so we fake it with a long shadow on the thumb element
const makeLongShadow = (color, size) => {
  let i = 10;
  let shadow = `${i}px 0 0 ${size} ${color}`;

  for (; i < 706; i++) {
    shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
  }

  return shadow;
};

export const FilterPriceInput = styled.input`
  overflow: hidden;
  display: block;
  appearance: none;
  max-width: 700px;
  width: 100%;
  margin: 0;
  height: ${height};
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${height};
    background: ${lowerBackground};
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: ${thumbHeight}px;
    width: ${thumbHeight}px;
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: ${makeLongShadow(upperColor, "-10px")};
    transition: background-color 150ms;
  }

  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: ${height};
    background: ${upperBackground};
  }

  &::-moz-range-progress {
    background: ${lowerBackground};
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
  }

  &::-ms-track {
    width: 100%;
    height: ${height};
    border: 0;
    /* color needed to hide track marks */
    color: transparent;
    background: transparent;
  }

  &::-ms-fill-lower {
    background: ${lowerBackground};
  }

  &::-ms-fill-upper {
    background: ${upperBackground};
  }

  &::-ms-thumb {
    appearance: none;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
    /* IE Edge thinks it can support -webkit prefixes */
    top: 0;
    margin: 0;
    box-shadow: none;
  }

  &:hover,
  &:focus {
    &::-webkit-slider-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-moz-range-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-ms-thumb {
      background-color: ${thumbHoverColor};
    }
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
`;

export const PriceRange = styled.input`
  -webkit-appearance: none;
  background-color: lightgray;
  width: 100%;
  height: 4px;
  outline: none;
  border-radius: 8px;
  position: absolute;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: white;
    border: 1px solid teal;
    cursor: pointer;
    z-index: 3;
    position: relative;
  }
`;

export const Selector = styled.div`
  width: 40px;
  height: 104px;
  position: absolute;
  bottom: -20px;
  left: ${(props) => props.left}%;
  /* transform: translateX(-30px); */
  z-index: 2;
`;

export const SelctorValue = styled.div`
  width: 40px;
  height: 45px;
  position: absolute;
  top: 2px;
  border-radius: 4px;
  text-align: center;
  line-height: 45px;
  font-size: 16px;
  font-weight: 300;
  background-color: orange;
  z-index: 5;
  color: white;

  &::before {
    content: "";
    border-bottom: 17px solid orange;
    border-left: 20px solid white;
    border-right: 20px solid white;
    position: absolute;
    top: 0px;
    left: 0;
    z-index: 4;
  }
`;

export const TextValue = styled.div`
  margin-top: 5px;
`;

export const ProgressBar = styled.div`
  width: ${(props) => props.width}%;
  height: 4px;
  border-radius: 8px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: teal;
`;

export const Range = styled.div`
  height: 80px;
  width: 100%;
  background: #f0f0f0;
  border-radius: 8px;
  padding: 0 65px 0 45px;
`;

export const SliderValue = styled.div`
  position: relative;
  width: 100%;
`;

export const ValueSpan = styled.span`
  position: absolute;
  height: 45px;
  width: 45px;
  color: #fff;
  font-weight: 500;
  top: -30px;
  left: ${(props) => props.left}%;
  transform: translateX(-50%);
  line-height: 55px;
  z-index: 2;

  &:after{
    position: absolute;
    content: '';
    height: 45px;
    width: 45px;
    background: #664aff;
    left: ${(props) => props.left}%;
    transform: translateX(-50%) rotate(45deg);
    border: 3px solid teal;
    z-index: -1;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-left-radius: 50%;
  }

`;

export const Field = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const MinValue = styled.div`
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  color: #664aff;
  left: -22px;
`;

export const InputSlider = styled.input`
  -webkit-appearance: none;
  height: 3px;
  background: #ddd;
  border-radius: 5px;
  outline: none;
  border: none;

  
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: white;
    border: 1px solid teal;
    cursor: pointer;
    z-index: 3;
    position: relative;
  }

`;

export const MaxValue = styled.div`
position: absolute;
font-size: 18px;
font-weight: bold;
color: #664aff;
right: -43px;
`;
