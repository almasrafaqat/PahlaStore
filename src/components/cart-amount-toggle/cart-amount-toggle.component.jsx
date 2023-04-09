import React from 'react'
import { Amount, Container, MinusIcon,  PlusIcon } from './cart-amount-toggle.style';

const CartAmountToggle = () => {
  return (
    <Container>
     <MinusIcon/>
      <Amount>1</Amount>
     <PlusIcon/>
    </Container>
  )
}

export default CartAmountToggle;