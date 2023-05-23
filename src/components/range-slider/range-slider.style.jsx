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
  width: 80%;
  margin: 24% auto;
  position: relative;
`;


export const PriceRange = styled.input`
 
 -webkit-appearance: none;
 background-color: teal;
  width: 100%;
  height: 15px;
  outline: none;
  border-radius: 8px;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 32px;
    height: 32px;
    background-color: orange;
    cursor: pointer;
    z-index: 3;
    position: relative;
  }

`;

export const Selctor = styled.div`
  width: 48px;
  height: 104px;
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  background-color: yellow;
`;

export const SelectBtn = styled.div`
   background-color: red;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
`;

export const ProgressBar = styled.div`
  width: ${(props) => props.width}%;
  height: 15px;
  border-radius: 8px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: pink;
`;

