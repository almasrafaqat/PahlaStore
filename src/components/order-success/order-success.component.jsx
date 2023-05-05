
import ScrollComponent from "../scroll-component/scroll-component";
import { Link } from "../../GlobalStyle";
import FormatPrice from "../../helpers/FormatPrice";
import AddToCart from "../add-to-cart/add-to-cart.component";
import {
  Bold,
  CheckIcon,
  CheckIconContainer,
  Column,
  ColumnRow,
  Container,
  DeliveryAddress,
  FlexContainer,
  FlexItems,
  Header,
  Heading,
  LineBreaker,
  OrderConfirmMessage,
  OrderDetail,
  Row,
  ShippingIcon,
  ShippingIconContainer,
  ShippingText,
} from "./order-success.style";
import BasicStepper from "../stepper/stepper";

const OrderSuccess = () => {


  ScrollComponent();
  return (
    <Container>
      <Row>
        <Column>
          <BasicStepper stepOne="cart" stepTwo="checkout" stepThree="order placed" stepCompleted={3} />
        </Column>
      </Row>
      <Row>
        <Column details>
          <ColumnRow>
            <OrderDetail>
              <Header>
                <Heading> Order #12345678</Heading>
                <ShippingIconContainer>
                  <ShippingIcon />{" "}
                  <ShippingText>3 days to Deliver  </ShippingText>
                </ShippingIconContainer>
              </Header>
              <DeliveryAddress>
                <Bold>To</Bold>
                <LineBreaker />
                Illustraion in Sketch or AI Includes: Sketch, PSD, PNG, SVG, AI
                Min: 1 illustraion
              </DeliveryAddress>
              <FlexContainer>
                <FlexItems heading>Date</FlexItems>
                <FlexItems>01 May 2023</FlexItems>
              </FlexContainer>
              <FlexContainer>
                <FlexItems heading>Items</FlexItems>
                <FlexItems>2</FlexItems>
              </FlexContainer>

              <FlexContainer>
                <FlexItems heading>Payment</FlexItems>
                <FlexItems>Cash on Delivery</FlexItems>
              </FlexContainer>
              <FlexContainer>
                <FlexItems heading>Delivery Charge </FlexItems>
                <FlexItems>
                  <FormatPrice price="500" />
                </FlexItems>
              </FlexContainer>
              <FlexContainer>
                <FlexItems heading>Total Price </FlexItems>
                <FlexItems heading>
                  <FormatPrice price="2500" />
                </FlexItems>
              </FlexContainer>
            </OrderDetail>
          </ColumnRow>
        </Column>
        <Column button>
          <ColumnRow buttons>
            <CheckIconContainer>
              <CheckIcon />
            </CheckIconContainer>
            <OrderConfirmMessage>
              Your order will go to you soon
            </OrderConfirmMessage>
            <Link to="/"><AddToCart text="Ordr Details" bgColor={({ theme }) => theme.colors.star} width="100" /></Link>
            <Link to="/"><AddToCart text="Track Order" width="100" /></Link>
            <Link to="/"><AddToCart text="Contact Us" bgColor={({ theme }) => theme.colors.gray} width="100" /></Link>
          </ColumnRow>
        </Column>
      </Row>
    </Container>
  );
};

export default OrderSuccess;
