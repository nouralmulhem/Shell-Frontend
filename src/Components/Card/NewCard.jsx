import * as React from 'react';
import Post from '../Card/style';
import Typography from '@mui/material/Typography';

export default function Card(props) {
  return (
    <Post backgroundImage={props.backgroundImage} >
      <Typography component='h5'sx={{margin:5}}>{props.header}</Typography>
      <Typography component='p' sx={{marginLeft:10,marginBottom:5}}>{props.text}</Typography>
    </Post>
  );
}
// backgroundImage={props.backgroundImage} 
