import { styled } from '@mui/material/styles';
import {
  Box,
  Button, TextareaAutosize, TextField,
} from '@mui/material';

export const BoxObj = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);',
  borderRadius: 10,
  padding: '40px 20px',
}));
export const Title = styled(TextField)(() => ({
  width: '80%',
  height: '10%',
  marginBottom: 30,
}));

export const Description = styled(TextareaAutosize)(() => ({
  width: '80%',
  marginBottom: 30,
  fontSize: 15,
  fontFamily: 'inherit',
  padding: 10,
}));

export const Upload = styled(Button)(() => ({
  width: '80%',
  marginBottom: 30,
}));

export const Row = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  minWidth: 'fit-content',
  alignItems: 'center',
  flexDirection: 'column',

}));
export const FirstRow = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  minWidth: 'fit-content',
  alignItems: 'baseline',
  flexDirection: 'column',
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
  margin: ' 0px 30px',
  marginTop: 15,
  marginBottom: 15,
  flexDirection: 'initial',

}));
export const SubmitConatiner = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  m: 4,
  margin: ' 0px 30px',
  paddingLeft: '7%',
  paddingTop: '12px',
}));
