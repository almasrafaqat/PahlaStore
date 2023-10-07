import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import FormatPrice from "../../helpers/FormatPrice";
import {
  MaxValue,
  MinValue,
  PriceContainer,
  SliderContainer,
} from "./range-slider.style";

const RangeSlider = ({ min, max }) => {
  const [minValue, set_minValue] = useState(min);
  const [maxValue, set_maxValue] = useState(max);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  return (
    <SliderContainer>
      <PriceContainer>
        <MinValue>
          <FormatPrice price={minValue} />
        </MinValue>
        <MaxValue>
          <FormatPrice price={maxValue} />
        </MaxValue>
      </PriceContainer>

      <MultiRangeSlider
        min={min}
        max={max}
        step={50}
        minValue={minValue}
        maxValue={maxValue}
        onInput={(e) => {
          handleInput(e);
        }}
        barInnerColor="#008080"
        ruler={false}
        style={{ border: "none", boxShadow: "none" }}
        label={false}
      />
    </SliderContainer>
  );
};

export default RangeSlider;
