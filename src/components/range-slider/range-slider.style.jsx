import styled from "styled-components";

export const SliderContainer = styled.div`
  & .bar-inner {
    border: none;
    box-shadow: none;
  }

  & .bar-left,
  .bar-right {
    box-shadow: none;
  }
  & .thumb:before {
    border: solid 1px #009688;
    box-shadow: none;
  }

  & .thumb .caption * {
    min-width: 32px;
    height: 32px;
    line-height: 32px;
    background-color: #009688;
    color: white;
    box-shadow: 0px 0px 5px #009688;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  font-size: 1rem;
`;

export const MinValue = styled.div`
  margin: 5px;

`;

export const MaxValue = styled.div`
  margin: 5px;
`;
