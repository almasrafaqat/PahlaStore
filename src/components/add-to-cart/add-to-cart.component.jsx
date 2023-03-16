import FormatPrice from "../../helpers/FormatPrice";
import {
  Button,
  ButtonContainer,
  CartIcon,
  Container,
  DiscountPrice,
  Price,
  PriceContainer,
} from "./add-to-cart.style";

const AddToCart = ({ price , discount}) => {
  return (
    <Container>
      <PriceContainer>
        <Price>
          <FormatPrice price={price} />
        </Price>
        <DiscountPrice>
          <FormatPrice price={discount} />
        </DiscountPrice>
      </PriceContainer>
      <ButtonContainer>
        <CartIcon />
        <Button>Add</Button>
      </ButtonContainer>
    </Container>
  );
};

export default AddToCart;
