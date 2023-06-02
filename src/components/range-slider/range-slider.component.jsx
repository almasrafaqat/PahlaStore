import React, { useState } from 'react'
import { FilterPriceInput, Main, PriceRange, ProgressBar, Selctor, SelctorValue, SelectBtn, Selector, TextValue } from './range-slider.style'

const RangeSlider = ({ min, max, value }) => {
  const [rangevalue, setRangeValue] = useState(1500);



  const PriceRangeHandler = (event) => {


    setRangeValue((cur) => cur = event.target.value);

  }
  return (
    <Main>
      {/* <FilterPriceInput defaultValue={max} type="range" min={min} max={max} /> */}
      <PriceRange type="range" min="0" max="1500" value={rangevalue} onChange={PriceRangeHandler} />
      <Selector left={rangevalue / 1500 * 100}>
        <SelctorValue>
          <TextValue>{rangevalue}</TextValue>
        </SelctorValue>

      </Selector>
      <ProgressBar width={rangevalue / 1500 * 100} />
    </Main>
  )
}

export default RangeSlider
