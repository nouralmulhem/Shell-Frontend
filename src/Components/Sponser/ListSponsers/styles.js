import {
  Box,
  styled,
} from '@mui/material';

export const BlockedBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

export const Image = styled('img')(() => ({
  maxWidth: '90%',
  height: '100%',
}));
