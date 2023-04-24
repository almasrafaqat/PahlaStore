import {
  Button,
  ButtonContainer,
  CartIcon,
  Container,
  OrderPlaceIcon,
} from "./add-to-cart.style";

const AddToCart = ({ content, width, radius, text, bgColor, icon, orderPlaceIcon }) => {

  return (
    <Container>
      <ButtonContainer bgColor={bgColor} content={content} width={width} radius={radius}>
        {icon && <CartIcon />}
        {orderPlaceIcon && <OrderPlaceIcon />}
        <Button>{text}</Button>
      </ButtonContainer>
    </Container>
  );
};

export default AddToCart;
