import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 400, margin:3 , display:"inline-block" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.url}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.header}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
