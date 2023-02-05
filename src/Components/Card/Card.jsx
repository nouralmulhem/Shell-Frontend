import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({
  url, name, header, text,
}) {
  return (
    <Card sx={{ maxWidth: 400, margin: 3, display: 'inline-block' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={url}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {header}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
