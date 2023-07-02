import React, { useState } from 'react'
import MultiRangeSlider from "multi-range-slider-react";
import "./rangeslider.css"
import FormatPrice from '../../helpers/FormatPrice';

const RangeSlider = ({ min, max }) => {

  const [minValue, set_minValue] = useState(min);
  const [maxValue, set_maxValue] = useState(max);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  return (

    <div className="App">
      <div style={{ display: 'flex', fontSize: "16px" }}>
        <div style={{ margin: '10px' }}><b>Price:</b></div>
        <div style={{ margin: '10px' }}><FormatPrice price={minValue} /></div>
        <div style={{ margin: '10px' }}><FormatPrice price={maxValue} /></div>
      </div>

      <MultiRangeSlider
        min={min}
        max={max}
        step={1}
        minValue={minValue}
        maxValue={maxValue}
        onInput={(e) => {
          handleInput(e);
        }}
        barInnerColor="#009688"
        ruler={false}
        style={{ border: "none", boxShadow: "none" }}
        label={false}
      />

    </div>

  )



}

export default RangeSlider


