import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const Container = styled(Box)(() => ({
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

}));
export const SecContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

}));
export const PostLink = styled(Link)({
  textDecoration: 'none',
  color: '#717071',
  '&: hover': {
    textDecoration: 'none',
    color: '#717071',
  },
  '&: visited': {
    textDecoration: 'none',
    color: '#717071',
  },
});
