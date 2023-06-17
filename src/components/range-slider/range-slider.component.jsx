import React, { useState } from 'react'
import { Container, ProgressBar, Range, RangeContent, RangeInput, RangeMax, RangeMin, RangeMinMax, RangeSliderInline, RangeSliderLine, RangeThumb, RangeValue, RangeValueNumber, Ranger, Selctor, SelctorValue, SelectBtn, SelectValue, Selector, Slider, SliderInput, SliderRange, SliderValue, TextValue, Thumb, ValueSpan } from './range-slider.style'

const RangeSlider = ({ min, max, value }) => {
  const [rangevalue, setRangeValue] = useState(1500);



  const PriceRangeHandler = (event) => {


    setRangeValue((cur) => cur = event.target.value);

  }
  return (


    <Container>
      <Range>
        <RangeContent>
          <SliderRange>
            <RangeSliderLine>

            </RangeSliderLine>
          </SliderRange>

          <RangeThumb left={rangevalue}>
            <RangeValue>
              <RangeValueNumber>{rangevalue}</RangeValueNumber>
            </RangeValue>

          </RangeThumb>

          <SliderInput type="range" class="range__input" id="range-input" min="0" max="100" step="1" onChange={PriceRangeHandler} />
        </RangeContent>
      </Range>
    </Container>
  )
}

export default RangeSlider


