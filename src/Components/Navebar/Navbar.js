import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const PostLink = styled(Link)({
  textDecoration: 'none',
  color: 'white',
  '&: hover': {
    textDecoration: 'none',
    color: 'white',
  },
  '&: visited': {
    textDecoration: 'none',
    color: 'white',
  },
});
export const PostLink2 = styled(Link)({
  textAlign: 'center',
  textDecoration: 'none',
  color: 'black',
  '&: hover': {
    textDecoration: 'none',
    color: 'black',
  },
  '&: visited': {
    textDecoration: 'none',
    color: 'black',
  },
});
