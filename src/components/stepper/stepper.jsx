import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

const OrderSuccess = () => {
  return (
    <>
      <Stepper alternativeLabel activeStep={1} connector={""}>
      
      </Stepper>
      <Stepper
        alternativeLabel
        activeStep={1}
        connector={""}
      >
        
      </Stepper>
    </>
  );
};

export default OrderSuccess;
