import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import { Box } from "@mui/material";
import ScrollComponent from "../scroll-component/scroll-component";
import { Link } from "../../GlobalStyle";
import FormatPrice from "../../helpers/FormatPrice";
import AddToCart from "../add-to-cart/add-to-cart.component";
import { Bold, CheckIcon, CheckIconContainer, Column, ColumnRow, Container, DeliveryAddress, Header, Heading, LineBreaker, OrderConfirmMessage, OrderDetail, Row, ShippingIcon, ShippingIconContainer, ShippingText } from "./stepper.style";


const BasicStepper = ({ stepOne, stepTwo, stepThree, stepCompleted }) => {
  const steps = [stepOne, stepTwo, stepThree];

  ScrollComponent();
  return (
    <Container>
      <Row>
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
      </Row>
      <Row>
        <Column details>
          <ColumnRow>
            <OrderDetail>
              <Header>
                <Heading> Order #12345678</Heading>
                <ShippingIconContainer>
                  <ShippingIcon /> <ShippingText>Deliver within 3 days</ShippingText>
                </ShippingIconContainer>
              </Header>
              <DeliveryAddress>
                <Bold>To</Bold>
                <LineBreaker />
                Illustraion in Sketch or AI Includes: Sketch, PSD, PNG, SVG,
                AI Min: 1 illustraion
              </DeliveryAddress>

            </OrderDetail>

          </ColumnRow>
        </Column>
        <Column>
          <ColumnRow>
            <CheckIconContainer>
              <CheckIcon />
            </CheckIconContainer>
            <OrderConfirmMessage> Your order will go to you soon</OrderConfirmMessage>
          </ColumnRow>
        </Column>
      </Row>
    </Container>



  );
};

export default BasicStepper;
