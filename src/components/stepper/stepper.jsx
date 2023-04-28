import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import { Button, Container, OrderNoteContainer, OrderNotes } from './stepper.style';
import { Box } from '@mui/material';
import ScrollComponent from '../scroll-component/scroll-component';
import { Link } from '../../GlobalStyle';


const steps = [
  'Cart',
  'Checkout',
  'Order Placed',
];

const OrderSuccess = () => {
  ScrollComponent();
  return (
    <Container>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={3} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel >{label}  </StepLabel>
            </Step>
          ))}
        </Stepper>
        <OrderNoteContainer>
          <OrderNotes>Your Order Successfully Placed. </OrderNotes>
          <Link to="/"> <Button> Continue Shopping </Button></Link>
        </OrderNoteContainer>

      </Box>

    </Container >

  );
};

export default OrderSuccess;
