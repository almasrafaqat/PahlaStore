import React from 'react'
import { FilterPriceInput } from './range-slider.style'

const RangeSlider = ({min, max, value }) => {
  return (
    <div>
      <FilterPriceInput defaultValue={max} type="range" min={min} max={max} />
    </div>
  )
}

export default RangeSlider
