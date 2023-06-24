import styled from "styled-components";






/** Range Slider Css */






// export const RangeMinMax = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 1rem;
// `;

// export const RangeMin = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   font-weight: 600;
// `;
// export const RangeMax = styled(RangeMin)``;



// export const RangeInput = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   margin: 0 0.5rem;
//   padding: 0 1rem;
//   width: 90%;

// `;



// export const Selector = styled.div`

//   position: absolute;
//   top: 50%;
//   left: ${(props) => props.left}%;
//   transform: translate(-50%, -90%);
//   z-index: 1;
//   border: 1px solid black;
// `;

// export const SelectValue = styled.div`
//   width: 2.5rem;
//   height: 2.5rem;
//   margin-bottom: 1rem;
//   line-height: 2.5rem;
//   background: yellow;
//   text-align: center;
//   font-size: 1.1rem;
//   font-weight: 500;
//   border-radius: 50%;


//   &:after{
//     content: '';
//     position: absolute;
//     top:0;
//     left: 0;
//     border-top-right-radius: 50%;
//     border-top-left-radius: 50%;
//     border-bottom-left-radius: 50%;
//     transform: rotate(45deg);
//     z-index: -1;
//     width: 2.5rem;
//     height: 2.5rem;
//     background: black;

//   }
// `;

// export const SelectBtn = styled.div`
//   width: 3rem;
//   height: 1rem;
//   border-radius: 50px;
//   background: teal;
//   cursor: pointer;
// `;

// export const ProgressBar = styled.div`
//   position: absolute;
//   height: 5px;
//   background: teal;
//   border-radius: 5px;
//   /* width: ${(props) => props.width}%; */
// `;

// export const Slider = styled.input`
//   -webkit-appearance: none;
//   height: 5px;
//   width: 100%;
//   background-color: lightgray;
//   border-radius: 5px;



//   ::-webkit-slider-thumb {
//     -webkit-appearance: none;
//   width: 50px;
//   height: 10px;
//   cursor: pointer;
//   position: relative;
//   z-index: 3;
//   border: 2px solid;

//     &:after{
//       content: "";
//       position: absolute;
//       width: 40px;
//       height: 40px;
//       background-color: red;
//     }

//   }


// `;

// export const Thumb = styled.div`
//   position: absolute;
//   left: 100%;;
// `;

/** Badimcode */
export const Container = styled.div``;

export const Range = styled.div`
  width: 100%;
  height: 64px;
  max-width: 332px;
  background-color: yellow;
  border-radius: 4rem;
  box-shadow: 0 6px 16px hsla(256, 72%, 24%, .15);
  padding-inline: 2.5rem;
  display: grid;
`;

export const RangeContent = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  place-items: center;
  background-color: gray;
`;

export const SliderRange = styled.div`
  width: 100%;
  height: 16px;
  background-color: aqua;
  border-radius: 4rem;
  box-shadow: 0 4px 12px hsla(256,72%, 24, .2);
  overflow: hidden;
  
`;

export const RangeSliderLine = styled.div`
  width: 100%;
  height: 100%;
  background-color: pink;
  width: 0;
`;



export const RangeThumb = styled.div`
  width: 32px;
  height: 32px;
  background-color: teal;
  border-radius: 50%;
  position: absolute;
  left: ${(props) => props.left}px;
 
`;

export const RangeValue = styled.div`
  width: 50px;
  height: 50px;
  background-color: greenyellow;
  position: absolute;
  top: -62px;
  left: -16px;
  border-radius: 2rem 2rem 2rem 0.25rem;
  transform: rotate(-45deg);
  display: grid;
  place-items: center;
  
`;

export const RangeValueNumber = styled.span`
  transform: rotate(45deg);
  color: white;
  font-size: 18px;
`;

export const SliderInput = styled.input`
  appearance: none;
  width: 100%;
  height: 16px;
  position: absolute;
  bottom: 0;
  background-color: red;
  /* opacity: 0; */

  &::-webkit-slider-thumb{
    appearance: none;
    width: 32px;
    height: 32px;
    background-color: lime;
  }

`;