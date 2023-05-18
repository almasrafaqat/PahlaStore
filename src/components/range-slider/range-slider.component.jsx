import React from 'react'
import { FilterPriceInput, PriceRange } from './range-slider.style'

const RangeSlider = ({min, max, value }) => {
  return (
    <div>
      {/* <FilterPriceInput defaultValue={max} type="range" min={min} max={max} /> */}
      <PriceRange type="range" />
    </div>
  )
}

export default RangeSlider
