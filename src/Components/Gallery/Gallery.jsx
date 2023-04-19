import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { GetGallery } from './server';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Gallery() {
  const [info] = GetGallery();

  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <Box sx={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px', marginBottom: '30px',
    }}
    >
      <ImageList
        sx={{
          width: '80%',
          height: '80%',
          // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
          transform: 'translateZ(0)',
          overflowY: 'hidden',
        }}
        rowHeight={300}
        gap={0}
      >
        {info?.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;

          return (
            <ImageListItem key={item.img} cols={cols} rows={rows}>
              <img
                {...srcset(item.img, 250, 250, rows, cols)}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{
                  background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, '
                  + 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                title={item.title}
                position="top"
                actionIcon={(
                  <IconButton
                    sx={{ color: 'white' }}
                    aria-label={`star ${item.title}`}
                    // disabled
                  >
                    <StarBorderIcon />
                  </IconButton>
              )}
                actionPosition="left"
              />
            </ImageListItem>
          );
        })}
      </ImageList>

    </Box>
  );
}
