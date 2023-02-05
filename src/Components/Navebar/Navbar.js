import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const PostLink = styled(Link)({
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

export default PostLink;
