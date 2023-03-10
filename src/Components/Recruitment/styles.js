/* eslint-disable no-unused-vars */
import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import theme from '../../styles';

export const ButtonsContainer = styled(Box)(() => ({
  width: '100%',
  margin: '20px 0px',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
}));

export const NextButton = styled(Button)(() => ({
  backgroundColor: theme.palette.form.next,
}));

export const BackButton = styled(Button)(() => ({
  backgroundColor: theme.palette.form.back,
}));

export const BorderLinearProgress = styled(LinearProgress)(() => ({
  width: '90%',
  height: 7,
  margin: 'auto',
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.progressbar.gray,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.progressbar.main,
  },
}));
