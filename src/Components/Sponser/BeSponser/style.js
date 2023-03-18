import { styled } from '@mui/material/styles';
import {
  Box,
} from '@mui/material';

export const BoxObj = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  alignItems: 'center',
  // boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);',
  borderRadius: 10,
  padding: '13px 20px 40px',
  width: '90%',
}));

export const Row = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  minWidth: 'fit-content',
  alignItems: 'center',
  flexDirection: 'column',
  width: 'inherit',
}));
export const FirstRow = styled(Box)(() => ({
  width: 'inherit',
  display: 'flex',
  justifyContent: 'space-evenly',
  minWidth: 'fit-content',
  alignItems: 'center',
  flexDirection: 'column',
}));

export const InputConatiner = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'flex-end',
  m: 4,
  margin: ' 0px 30px',
  marginTop: 10,
  marginBottom: 10,
  flexDirection: 'initial',
  width: '80%',
}));
export const SubmitConatiner = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  m: 4,
  margin: ' 0px 30px',
  paddingTop: '12px',
}));
