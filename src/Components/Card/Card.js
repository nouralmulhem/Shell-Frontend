import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function MediaControlCard(props) {

  return (
    <Card sx={{ display: 'flex', Margin:3}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={{fontWeight: 'bold', fontSize:'1.7rem',  }}>
          {props.header}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          {props.text}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: "100%",height:150, }}
        image={props.url}
        alt={props.name}
      />
    </Card>
  );
}
