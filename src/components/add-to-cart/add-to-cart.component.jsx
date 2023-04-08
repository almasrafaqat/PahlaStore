import FormatPrice from "../../helpers/FormatPrice";
import {
  Button,
  ButtonContainer,
  CartIcon,
  Container,
} from "./add-to-cart.style";

const AddToCart = ({ price , discount}) => {
  return (
    <Container>
      <ButtonContainer>
        <CartIcon />
        <Button>Add</Button>
      </ButtonContainer>
    </Container>
  );
};

export default AddToCart;
