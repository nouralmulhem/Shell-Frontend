import {
  styled, Typography,
} from '@mui/material';

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#666666',
  backgroundColor: '#eee',
  fontSize: 40,
  padding: '10px 30px',
  marginTop: 50,
  borderRadius: 10,
  [theme.breakpoints.between('0', '650')]: {
    fontSize: '25px',
    padding: '10px 20px',

  },
}));
