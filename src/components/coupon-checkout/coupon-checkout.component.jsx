import React from 'react'
import { Button, CouponContainer, CouponIcon, CouponInput } from './coupon.style'


const Coupon = ({ width, height, text, ...otherProps }) => {

  return (
    <CouponContainer width={width} height={height} border={otherProps.border} shadow={otherProps.shadow}>
      <CouponIcon />
      <CouponInput placeholder='Enter Coupon Code..' />
      <Button height={height}>{text}</Button>
    </CouponContainer>
  )
}

export default Coupon