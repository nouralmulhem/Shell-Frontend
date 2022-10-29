import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function MediaControlCard(props) {

  return (
    <Card sx={{ display: 'flex', Margin:3}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          {props.header}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          {props.text}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        image={props.url}
        alt={props.name}
      />
    </Card>
  );
}
