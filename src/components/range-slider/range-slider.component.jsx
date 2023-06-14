import React, { useState } from 'react'
import { Container, ProgressBar, Range, RangeInput, RangeMax, RangeMin, RangeMinMax, RangeValue, Ranger, Selctor, SelctorValue, SelectBtn, SelectValue, Selector, Slider, SliderValue, TextValue, ValueSpan } from './range-slider.style'

const RangeSlider = ({ min, max, value }) => {
  const [rangevalue, setRangeValue] = useState(1500);



  const PriceRangeHandler = (event) => {


    setRangeValue((cur) => cur = event.target.value);

  }
  return (
    // <Main>
    //   {/* <FilterPriceInput defaultValue={max} type="range" min={min} max={max} /> */}
    //   <PriceRange type="range" min="0" max="1500" value={rangevalue} onChange={PriceRangeHandler} />
    //   <Selector left={rangevalue / 1500 * 100}>
    //     <SelctorValue>
    //       <TextValue>{rangevalue}</TextValue>
    //     </SelctorValue>

    //   </Selector>
    //   <ProgressBar width={rangevalue / 1500 * 100} />
    // </Main>

    <Container>
      <Ranger>
        <RangeMinMax>
          <RangeMin>Min<span>0</span></RangeMin>
          <RangeMax>Max<span>100</span></RangeMax>
        </RangeMinMax>

        <RangeInput>
          <Selector left={rangevalue}>
            <SelectValue>{rangevalue}</SelectValue>
            <SelectBtn></SelectBtn>
          </Selector>
          <ProgressBar width={rangevalue}></ProgressBar>
          <Slider type="range" min="0" max="100" value={rangevalue} onChange={PriceRangeHandler} />
        </RangeInput>

      </Ranger>
    </Container>
  )
}

export default RangeSlider
