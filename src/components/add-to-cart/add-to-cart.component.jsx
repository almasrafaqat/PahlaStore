import {
  Button,
  ButtonContainer,
  CartIcon,
  Container,
} from "./add-to-cart.style";

const AddToCart = ({content, width, radius, text, bgColor, icon }) => {
 
  return (
    <Container>
      <ButtonContainer bgColor={bgColor} content={content} width={width} radius={radius}>
       {icon ?  <CartIcon/> : ""}
        <Button>{text}</Button>
      </ButtonContainer>
    </Container>
  );
};

export default AddToCart;
