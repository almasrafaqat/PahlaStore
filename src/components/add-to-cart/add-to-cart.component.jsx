import FormatPrice from "../../helpers/FormatPrice";
import {
  Button,
  ButtonContainer,
  CartIcon,
  Container,
} from "./add-to-cart.style";

const AddToCart = ({content, width, radius, text, bg, icon }) => {
  return (
    <Container>
      <ButtonContainer color={bg} content={content} width={width} radius={radius}>
       {icon &&  <CartIcon />}
        <Button>{text}</Button>
      </ButtonContainer>
    </Container>
  );
};

export default AddToCart;
