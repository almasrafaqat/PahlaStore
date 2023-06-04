import React, { useState } from 'react'
import { Field, FilterPriceInput, InputSlider, Main, MaxValue, MinValue, PriceRange, ProgressBar, Range, RangeValue, Selctor, SelctorValue, SelectBtn, Selector, SliderValue, TextValue, ValueSpan } from './range-slider.style'

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

    <Range>
      <SliderValue>
        <ValueSpan left={rangevalue /2} >{rangevalue}</ValueSpan>
      </SliderValue>
      <Field>
        <MinValue>0</MinValue>
          <InputSlider type="range" min="0" max="200" value={rangevalue} onChange={PriceRangeHandler} />
        <MaxValue>1500</MaxValue>
      </Field>
    </Range>
  )
}

export default RangeSlider
