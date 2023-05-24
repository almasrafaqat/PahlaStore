import React, { useState } from 'react'
import { FilterPriceInput, Main, PriceRange, ProgressBar, Selctor, SelectBtn, Selector } from './range-slider.style'

const RangeSlider = ({ min, max, value }) => {
  const [rangevalue, setRangeValue] = useState(1500);



  const PriceRangeHandler = (event) => {

    
    setRangeValue((cur) => cur = event.target.value);

  }
  return (
    <Main>
      {/* <FilterPriceInput defaultValue={max} type="range" min={min} max={max} /> */}
      <PriceRange type="range" min="0" max="1500" value={rangevalue} onChange={PriceRangeHandler} />
      <Selector style={{ left: `${rangevalue / 1500 * 100}` }}>
        <SelectBtn/>
      </Selector>
      <ProgressBar width={rangevalue  / 1500 * 100} />
    </Main>
  )
}

export default RangeSlider
