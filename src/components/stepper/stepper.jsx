import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import { Box } from "@mui/material";



const BasicStepper = ({ stepOne, stepTwo, stepThree, stepCompleted }) => {
  const steps = [stepOne, stepTwo, stepThree];

  return (


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

  );
};

export default BasicStepper;
