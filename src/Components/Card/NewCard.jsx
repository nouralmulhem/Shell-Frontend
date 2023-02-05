import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box/Box';
import Post from './style';

export default function Card({ backgroundImage, header, text }) {
  return (
    <Post
      backgroundImage={backgroundImage}
      sx={{

      }}
    >
      <Box sx={{ backgroundColor: '#00000059' }}>
        <Typography
          component="h5"
          sx={{
            fontWeight: 'bold',
            fontSize: '1.7rem',
            marginLeft: 5,
            color: 'gainsboro',
            textShadow: '1px 1.5px black',
          }}
        >
          {header}

        </Typography>
        <Typography component="p" sx={{ marginLeft: 10, marginBottom: 5 }}>{text}</Typography>
      </Box>

    </Post>
  );
}
// backgroundImage={props.backgroundImage}
