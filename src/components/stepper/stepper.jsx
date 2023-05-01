import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import {
  ButtonContainer,
  CheckIcon,
  CheckIconContainer,
  Container,
  DelieveryAddressDate,
  DelieveryDate,
  DelieveryDay,
  DeliveryAddress,
  FlexContainer,
  FlexItems,
  OrderConfirmMessage,
  OrderNote,
  OrderNoteButtonContainer,
  OrderNoteTable,
  OrderTableContainer,
  Row,
  StepperContainer,
  StepperRow,
  Wrapper,
} from "./stepper.style";
import { Box } from "@mui/material";
import ScrollComponent from "../scroll-component/scroll-component";
import { Link } from "../../GlobalStyle";
import FormatPrice from "../../helpers/FormatPrice";
import AddToCart from "../add-to-cart/add-to-cart.component";
import { LocalShipping } from "@mui/icons-material";

const BasicStepper = ({ stepOne, stepTwo, stepThree, stepCompleted }) => {
  const steps = [stepOne, stepTwo, stepThree];

  ScrollComponent();
  return (
    <Container>
      <Row>
        <StepperContainer>
          <StepperRow>
            <Box
              sx={{
                width: "100%",
                textTransform: "capitalize",
              }}
            >
              <Stepper activeStep={stepCompleted} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label} </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </StepperRow>
        </StepperContainer>

        <Wrapper>
          <OrderNoteButtonContainer>
            <OrderTableContainer>
              <OrderNoteTable>
                <OrderNote>Your Order Summary </OrderNote>
                <DelieveryAddressDate>
                  <DelieveryDay>
                    <LocalShipping />3 Days Delivery
                  </DelieveryDay>
                  <DeliveryAddress>
                    Illustraion in Sketch or AI Includes: Sketch, PSD, PNG, SVG,
                    AI Min: 1 illustraion
                  </DeliveryAddress>
                </DelieveryAddressDate>

                <FlexContainer>
                  <FlexItems heading>Date</FlexItems>
                  <FlexItems>01 May 2023</FlexItems>
                </FlexContainer>
                <FlexContainer>
                  <FlexItems heading>Order Id</FlexItems>
                  <FlexItems>123456789</FlexItems>
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
                <Link to="/">
                  <AddToCart
                    content="center"
                    bgColor={({ theme }) => theme.colors.hover}
                    width="100"
                    radius="0.2"
                    text="Order Details"
                  />
                </Link>
              </OrderNoteTable>
            </OrderTableContainer>
            <ButtonContainer>
              <CheckIconContainer>
                <CheckIcon />
              </CheckIconContainer>
              <OrderConfirmMessage>
                Your illustraion will go to you soon
              </OrderConfirmMessage>
              <Link to="/">
                <AddToCart
                  content="center"
                  bgColor={({ theme }) => theme.colors.primary}
                  width="100"
                  radius="0.2"
                  text="Continue Shopping"
                />
              </Link>
              <Link to="/">
                <AddToCart
                  content="center"
                  bgColor={({ theme }) => theme.colors.star}
                  width="100"
                  radius="0.2"
                  text="Order Tracking"
                />
              </Link>

              <Link to="/">
                <AddToCart
                  content="center"
                  bgColor={({ theme }) => theme.colors.gray}
                  width="100"
                  radius="0.2"
                  text="Contact Us"
                />
              </Link>
            </ButtonContainer>
          </OrderNoteButtonContainer>
        </Wrapper>
      </Row>
    </Container>
  );
};

export default BasicStepper;
