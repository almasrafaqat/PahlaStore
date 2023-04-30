import React from 'react'
import { Button, CouponContainer, CouponIcon, CouponInput, CouponInputContainer } from './coupon.style'


const Coupon = ({ text, ...otherProps }) => {

  return (
    <CouponContainer focus={true} width={otherProps.width} height={otherProps.height}>
      <CouponInputContainer border={otherProps.border} shadow={otherProps.shadow}>

        <CouponIcon />
        <CouponInput placeholder='Enter Coupon Code..' />
      </CouponInputContainer>
      <Button>{text}</Button>
    </CouponContainer>
  )
}

export default Coupon