import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Row = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  minWidth: 'fit-content',
  marginTop: 15,
  marginBottom: 15,
}));
export const FirstRow = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  minWidth: 'fit-content',
  marginTop: 15,
  marginBottom: 15,
}));

export const Container = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: '5%',
  marginRight: '5%',
  '& > :not(style)': { m: 8 },
}));
export const InputConatiner = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'flex-end',
  m: 4,
}));
