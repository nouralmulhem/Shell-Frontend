import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Row = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  minWidth: 'fit-content',
  marginTop: 15,
  marginBottom: 15,
  [theme.breakpoints.between('0', '900')]: {
    marginTop: 0,
    marginBottom: 0,
    flexDirection: 'column',

  },
}));
export const FirstRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  minWidth: 'fit-content',
  marginTop: 15,
  marginBottom: 15,
  [theme.breakpoints.between('0', '900')]: {
    marginTop: 0,
    marginBottom: 0,
    flexDirection: 'column',

  },
}));

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: '5%',
  marginRight: '5%',
  '& > :not(style)': { m: 8 },
  [theme.breakpoints.between('0', '900')]: {
    alignItems: 'center',

  },
}));
export const InputConatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  m: 4,
  width: 400,
  [theme.breakpoints.between('0', '400')]: {
    width: 250,
  },
}));
