import * as React from 'react';
import Post from '../Card/style';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box/Box';
export default function Card(props) {
  return (
    <Post backgroundImage={props.backgroundImage} sx={{
      
}} >
      <Box sx={{ backgroundColor: '#00000059', }}>
        <Typography component='h5' sx={{
          fontWeight: 'bold', fontSize: '1.7rem', marginLeft: 5, color: 'gainsboro',
          textShadow: '1px 1.5px black' }}>{props.header}</Typography>
        <Typography component='p' sx={{ marginLeft: 10, marginBottom: 5 }}>{props.text}</Typography>
    </Box>
      
    </Post>
  );
}
// backgroundImage={props.backgroundImage} 
