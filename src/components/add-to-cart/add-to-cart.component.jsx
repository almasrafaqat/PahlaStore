import FormatPrice from "../../helpers/FormatPrice"
import { Button, ButtonContainer, CartIcon, Container, Price } from "./add-to-cart.style"


const AddToCart = () => {
    return (
        <Container>
            <Price>
                <FormatPrice price="1200" />
            </Price>
            <ButtonContainer>
                <CartIcon />
                <Button>Add</Button>
            </ButtonContainer>

        </Container>
    )
}

export default AddToCart