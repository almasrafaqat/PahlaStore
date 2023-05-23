import React, { useState } from 'react'
import { FilterPriceInput, Main, PriceRange, ProgressBar, Selctor, SelectBtn } from './range-slider.style'

const RangeSlider = ({ min, max, value }) => {
  const [rangevalue, setRangeValue] = useState(1500);



  const PriceRangeHandler = (event) => {

    
    setRangeValue((cur) => cur = event.target.value);

  }
  return (
    <Main>
      {/* <FilterPriceInput defaultValue={max} type="range" min={min} max={max} /> */}
      <PriceRange type="range" min="0" max="1500" value={rangevalue} onChange={PriceRangeHandler} />
    
      <ProgressBar width={rangevalue * 100 / 1500} />
    </Main>
  )
}

export default RangeSlider
