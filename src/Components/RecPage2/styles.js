import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const PageBox = styled(Box)(() => ({
  width: '100%',
  height: 200,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,
  marginBottom: 20,
}));

export const QImage = styled('img')(() => ({
  height: '100%',
}));

export const EleBox = styled(Box)(() => ({
  height: '80%',
  maxWidth: 200,
  display: 'flex',
  marginLeft: 10,
  marginRight: 10,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}));

export const FormText = styled(Typography)(() => ({
  textAlign: 'center',
  fontWeight: 700,
}));

export const FormBox = styled(Box)(() => ({
  display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  flexDirection: 'column',
  width: '60%',
  marginLeft: 'auto',
  marginRight: 'auto',
}));
