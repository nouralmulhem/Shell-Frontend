import { styled } from '@mui/material/styles';
import {
  Button, TextareaAutosize, TextField,
} from '@mui/material';

export const BoxObj = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  alignItems: 'center',
  width: '50%',
  height: '85%',
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
