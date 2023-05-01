import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import {
  ButtonContainer,
  Container,
  FlexContainer,
  FlexItems,
  OrderNote,
  OrderNoteButtonContainer,
  OrderNoteTable,
  OrderNoteWrapper,
  OrderNotes,
  OrderTableContainer,
  Wrapper,
} from "./stepper.style";
import { Box } from "@mui/material";
import ScrollComponent from "../scroll-component/scroll-component";
import { Link } from "../../GlobalStyle";
import FormatPrice from "../../helpers/FormatPrice";
import AddToCart from "../add-to-cart/add-to-cart.component";

const BasicStepper = ({ stepOne, stepTwo, stepThree, stepCompleted }) => {
  const steps = [stepOne, stepTwo, stepThree];

  ScrollComponent();
  return (
    <Container>
      <Box sx={{ width: "100%", textTransform: "capitalize" }}>
        <Stepper activeStep={stepCompleted} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label} </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Wrapper>
        <OrderNoteButtonContainer>
          <OrderTableContainer>
            <OrderNoteTable>
              <OrderNote>Your Order Summary </OrderNote>
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
    </Container>
  );
};

export default BasicStepper;
