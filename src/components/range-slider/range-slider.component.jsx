import React, { useState } from 'react'
import { FilterPriceInput, Main, PriceRange, ProgressBar, Selctor, SelectBtn } from './range-slider.style'

const RangeSlider = ({ min, max, value }) => {
  const [rangevalue, setRangeValue] = useState(0);


  const PriceRangeHandler = (event) => {


    setRangeValue((cur) => cur = event.target.value);

  }
  return (
    <Main>
      {/* <FilterPriceInput defaultValue={max} type="range" min={min} max={max} /> */}
      <PriceRange type="range" min="0" max="200" onChange={PriceRangeHandler} />
      <Selctor>
        <SelectBtn></SelectBtn>
      </Selctor>
      <ProgressBar width={rangevalue} />
    </Main>
  )
}

export default RangeSlider
